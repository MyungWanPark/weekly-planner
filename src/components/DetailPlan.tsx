import { Plan } from "@/app/model/plan";
import DetailMeta from "./DetailMeta";
import DetailTable from "./DetailTable";

type Props = {
    plan: Plan;
};

export default function DetailPlan({ plan }: Props) {
    return (
        <section className="w-full h-full flex flex-col">
            <DetailMeta plan={plan} />
            <DetailTable />
        </section>
    );
}
