import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";

export const dynamic = 'force-dynamic'; // Ensure no caching for admin data

export default async function AdminPage() {
    const submissions = await prisma.submission.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="min-h-screen bg-black text-white p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                <Badge variant="outline" className="text-lg px-4 py-1">
                    Total: {submissions.length} Leads
                </Badge>
            </div>

            <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-muted-foreground uppercase border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium">Fecha</th>
                                <th className="px-6 py-4 font-medium">Lead</th>
                                <th className="px-6 py-4 font-medium">Negocio</th>
                                <th className="px-6 py-4 font-medium">Objetivo</th>
                                <th className="px-6 py-4 font-medium">Pain Points</th>
                                <th className="px-6 py-4 font-medium">Presupuesto</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-black/40">
                            {submissions.map((sub) => {
                                const painPoints = sub.painPoints ? JSON.parse(sub.painPoints as string) : [];

                                return (
                                    <tr key={sub.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                                            {sub.createdAt.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-white">{sub.name}</div>
                                            <div className="text-xs text-muted-foreground">{sub.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-white">{sub.businessType}</div>
                                            <Badge variant="secondary" className="mt-1 text-xs">
                                                {sub.teamSize}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-white/90 font-medium">
                                            {sub.goal}
                                        </td>
                                        <td className="px-6 py-4 max-w-[200px]">
                                            <div className="flex flex-wrap gap-1">
                                                {Array.isArray(painPoints) && painPoints.map((pp: string) => (
                                                    <span key={pp} className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] border border-red-500/20">
                                                        {pp}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-white font-medium">
                                            {sub.budget}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
