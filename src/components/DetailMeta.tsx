import { Plan } from "@/app/model/plan";
import InfoBox from "./InfoBox";

type Props = {
    plan: Plan;
};

export default function DetailMeta({
    plan: { writer, position, employeeId, correspondWeek },
}: Props) {
    return (
        <section className="flex justify-between md:justify-normal w-full mt-8 h-[10%]">
            <div className="md:border-r border-gray-500 w-1/4 md:pr-8 grid gap-1">
                <InfoBox
                    title="성명"
                    content={writer}
                    cls="md:grid-cols-[1fr_1fr]"
                />
                <InfoBox
                    title="직위"
                    content={position}
                    cls="md:grid-cols-[1fr_1fr]"
                />
            </div>
            <div className="md:pl-20 grid gap-1">
                <InfoBox
                    title="사번"
                    content={employeeId}
                    cls="md:grid-cols-[6fr_11fr]"
                />
                <InfoBox
                    title="해당주차"
                    content={correspondWeek}
                    cls="md:grid-cols-[6fr_11fr]"
                />
            </div>
        </section>
    );
}
