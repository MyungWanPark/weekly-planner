import PlanTable from "@/components/PlanTable";
import Tab from "@/components/Tab";

export default function DashBoardPage() {
    return (
        <article className="w-full px-4 py-10">
            <Tab />
            <PlanTable />
        </article>
    );
}
