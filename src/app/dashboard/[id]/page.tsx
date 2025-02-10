"use client";

import { Plan } from "@/app/model/plan";
import DetailPlan from "@/components/DetailPlan";
import PlanTable from "@/components/PlanTable";
import Tab from "@/components/Tab";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function WeeklyPlanPage() {
    const { id } = useParams();
    const {
        data: plan,
        isLoading,
        error,
    } = useSWR<Plan>(`/api/weeklyPlan/${id}`);
    return (
        <section className="w-full px-4 py-10">
            <Tab name={plan && plan.name} />
            {plan && <DetailPlan plan={plan} />}
        </section>
    );
}
