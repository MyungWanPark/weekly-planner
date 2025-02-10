import { Plan } from "@/app/model/plan";
import InfoBox from "./InfoBox";

type Props = {
    plan: Plan;
};

export default function DetailMeta({
    plan: { writer, position, employeeId, correspondWeek },
}: Props) {
    return (
        <section className="flex w-full mt-8">
            <div className="border-r border-gray-500 w-1/4 pr-8 grid gap-1">
                <InfoBox
                    title="성명"
                    content={writer}
                    cls="grid-cols-[1fr_1fr]"
                />
                <InfoBox
                    title="직위"
                    content={position}
                    cls="grid-cols-[1fr_1fr]"
                />
            </div>
            <div className="pl-20 grid gap-1">
                <InfoBox
                    title="사번"
                    content={employeeId}
                    cls="grid-cols-[6fr_11fr]"
                />
                <InfoBox
                    title="해당주차"
                    content={correspondWeek}
                    cls="grid-cols-[6fr_11fr]"
                />
            </div>
        </section>
    );
}
