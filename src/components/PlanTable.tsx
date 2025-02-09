"use client";

import { useState } from "react";
import useSWR from "swr";
import TableHeaders from "./TableHeaders";
import PlanList from "./PlanList";

export default function PlanTable() {
    const { data: plans, isLoading, error } = useSWR("/api/weeklyPlan");
    const [selected, setSelected] = useState();

    return (
        <section className="mt-8">
            <TableHeaders />
            {plans && <PlanList plans={plans} />}
        </section>
    );
}
