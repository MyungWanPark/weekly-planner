import Sidebar from "@/components/Sidebar";
import SWRConfigContext from "@/context/SWRConfigContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex w-full h-full">
            <Sidebar />
            <SWRConfigContext>
                <main className="w-3/4">{children}</main>
            </SWRConfigContext>
        </section>
    );
}
