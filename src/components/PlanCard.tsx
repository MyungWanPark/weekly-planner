import { Plan } from "@/app/model/plan";
import Link from "next/link";

type Props = {
    plan: Plan;
};

export default function PlanCard({ plan }: Props) {
    return (
        <Link
            href={`/dashboard/${plan.id}`}
            className="flex justify-around border-b border-black py-2"
        >
            <span className="">{plan.name}</span>
            <span>{plan.lastModified}</span>
            <span>{plan.created}</span>
        </Link>
    );
}
