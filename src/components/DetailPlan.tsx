import { Plan } from "@/app/model/plan";
import DetailMeta from "./DetailMeta";
import DetailTable from "./DetailTable";

type Props = {
    plan: Plan;
};

export default function DetailPlan({ plan }: Props) {
    return (
        <section className="w-full">
            <DetailMeta plan={plan} />
            <DetailTable />
        </section>
    );
}
