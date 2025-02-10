"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import TableHeaders from "./TableHeaders";
import PlanList from "./PlanList";
import { Plan } from "@/app/model/plan";

export default function PlanTable() {
    const { data: plans, isLoading, error } = useSWR("/api/weeklyPlan");
    const [sortedData, setSortedData] = useState<Plan[]>([]);

    useEffect(() => {
        if (plans) {
            setSortedData(plans);
        }
    }, [plans]);

    return (
        <section className="mt-8">
            <TableHeaders
                setSortedData={setSortedData}
                sortedData={sortedData}
            />
            {sortedData && <PlanList plans={sortedData} />}
        </section>
    );
}
