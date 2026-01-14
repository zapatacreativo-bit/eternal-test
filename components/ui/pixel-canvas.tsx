"use client"

import * as React from "react"
import { useMemo, useEffect, useRef } from "react"

export interface PixelCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: number
    speed?: number
    colors?: string[]
    variant?: "default" | "icon"
    noFocus?: boolean
}

export function PixelCanvas({
    gap = 5,
    speed = 35,
    colors = ["#f8fafc", "#f1f5f9", "#cbd5e1"],
    variant = "default",
    noFocus = false,
    className,
    style,
    ...props
}: PixelCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Animation state
        let animationFrameId: number | null = null
        let pixels: Pixel[] = []

        // Resize Observer
        const resizeObserver = new ResizeObserver(() => handleResize())
        resizeObserver.observe(container)

        // Configuration
        const gapValue = Math.max(4, Math.min(50, gap))
        const speedValue = Math.max(0, Math.min(100, speed)) * 0.001
        const colorList = colors

        // Pixel Class Logic (Inner Helper)
        class Pixel {
            width: number
            height: number
            ctx: CanvasRenderingContext2D
            x: number
            y: number
            color: string
            speed: number
            size: number
            sizeStep: number
            minSize: number
            maxSizeInteger: number
            maxSize: number
            delay: number
            counter: number
            counterStep: number
            isIdle: boolean
            isReverse: boolean
            isShimmer: boolean

            constructor(
                w: number,
                h: number,
                ctx: CanvasRenderingContext2D,
                x: number,
                y: number,
                color: string,
                spd: number,
                delay: number
            ) {
                this.width = w
                this.height = h
                this.ctx = ctx
                this.x = x
                this.y = y
                this.color = color
                this.speed = this.getRandomValue(0.1, 0.9) * spd
                this.size = 0
                this.sizeStep = Math.random() * 0.4
                this.minSize = 0.5
                this.maxSizeInteger = 2
                this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger)
                this.delay = delay
                this.counter = 0
                this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01
                this.isIdle = false
                this.isReverse = false
                this.isShimmer = false
            }

            getRandomValue(min: number, max: number) {
                return Math.random() * (max - min) + min
            }

            draw() {
                const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5
                this.ctx.fillStyle = this.color
                this.ctx.fillRect(
                    this.x + centerOffset,
                    this.y + centerOffset,
                    this.size,
                    this.size,
                )
            }

            appear() {
                this.isIdle = false

                if (this.counter <= this.delay) {
                    this.counter += this.counterStep
                    return
                }

                if (this.size >= this.maxSize) {
                    this.isShimmer = true
                }

                if (this.isShimmer) {
                    this.shimmer()
                } else {
                    this.size += this.sizeStep
                }

                this.draw()
            }

            disappear() {
                this.isShimmer = false
                this.counter = 0

                if (this.size <= 0) {
                    this.isIdle = true
                    return
                } else {
                    this.size -= 0.1
                }

                this.draw()
            }

            shimmer() {
                if (this.size >= this.maxSize) {
                    this.isReverse = true
                } else if (this.size <= this.minSize) {
                    this.isReverse = false
                }

                if (this.isReverse) {
                    this.size -= this.speed
                } else {
                    this.size += this.speed
                }
            }
        }

        // Helpers
        const getDistanceToCenter = (x: number, y: number, w: number, h: number) => {
            const dx = x - w / 2
            const dy = y - h / 2
            return Math.sqrt(dx * dx + dy * dy)
        }

        const getDistanceToBottomLeft = (x: number, y: number, w: number, h: number) => {
            const dx = x
            const dy = h - y
            return Math.sqrt(dx * dx + dy * dy)
        }

        const handleResize = () => {
            if (!container || !canvas || !ctx) return
            const rect = container.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1

            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`

            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(dpr, dpr)

            createPixels(rect.width, rect.height)
        }

        const createPixels = (w: number, h: number) => {
            pixels = []
            for (let x = 0; x < w; x += gapValue) {
                for (let y = 0; y < h; y += gapValue) {
                    const color = colorList[Math.floor(Math.random() * colorList.length)]
                    let delay = 0
                    if (variant === "icon") {
                        delay = getDistanceToCenter(x, y, w, h)
                    } else {
                        delay = getDistanceToBottomLeft(x, y, w, h)
                    }
                    pixels.push(new Pixel(w, h, ctx, x, y, color, speedValue, delay))
                }
            }
        }

        const animatePixels = (mode: "appear" | "disappear") => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId)

            const frame = () => {
                animationFrameId = requestAnimationFrame(frame)
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                let allIdle = true
                for (const pixel of pixels) {
                    pixel[mode]()
                    if (!pixel.isIdle) allIdle = false
                }

                if (allIdle) {
                    if (animationFrameId) cancelAnimationFrame(animationFrameId)
                    animationFrameId = null
                }
            }
            frame()
        }

        // Event Listeners
        const onMouseEnter = () => animatePixels("appear")
        const onMouseLeave = () => animatePixels("disappear")
        const onFocus = () => animatePixels("appear")
        const onBlur = () => animatePixels("disappear")

        container.addEventListener("mouseenter", onMouseEnter)
        container.addEventListener("mouseleave", onMouseLeave)

        if (!noFocus) {
            container.addEventListener("focus", onFocus)
            container.addEventListener("blur", onBlur)
        }

        // Initial init
        handleResize()

        // Cleanup
        return () => {
            resizeObserver.disconnect()
            container.removeEventListener("mouseenter", onMouseEnter)
            container.removeEventListener("mouseleave", onMouseLeave)
            if (!noFocus) {
                container.removeEventListener("focus", onFocus)
                container.removeEventListener("blur", onBlur)
            }
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
    }, [gap, speed, colors, variant, noFocus])

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }}
            {...props}
        >
            <canvas
                ref={canvasRef}
                style={{ display: 'block', width: '100%', height: '100%' }}
            />
        </div>
    )
}
