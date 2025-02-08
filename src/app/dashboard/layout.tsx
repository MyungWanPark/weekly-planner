import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex w-full h-full">
            <Sidebar />
            <main>{children}</main>
        </section>
    );
}
