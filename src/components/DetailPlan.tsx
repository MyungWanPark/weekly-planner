import { Plan } from "@/app/model/plan";
import DetailMeta from "./DetailMeta";
import DetailTable from "./DetailTable";

type Props = {
    plan: Plan;
};

export default function DetailPlan({ plan }: Props) {
    return (
        <section className="w-full h-[92%] flex flex-col text-xs md:text-base">
            <DetailMeta plan={plan} />
            <DetailTable />
        </section>
    );
}
