import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/admin/:path*"],
};

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];
        const [user, pwd] = atob(authValue).split(":");

        // TODO: Move credentials to env vars in production
        if (user === "admin" && pwd === "admin123") {
            return NextResponse.next();
        }
    }

    return new NextResponse("Authentication Required", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
    });
}
