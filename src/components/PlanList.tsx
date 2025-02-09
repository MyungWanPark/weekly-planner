import { Plan } from "@/app/model/plan";
import PlanCard from "./PlanCard";

type Props = {
    plans: Plan[];
};

export default function PlanList({ plans }: Props) {
    return (
        <ul>
            {plans.map((plan, id) => (
                <li key={id}>
                    <PlanCard plan={plan} />
                </li>
            ))}
        </ul>
    );
}
