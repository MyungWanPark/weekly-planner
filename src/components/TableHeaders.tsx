import { Plan } from "@/app/model/plan";
import TableHeader from "./ui/TableHeader";

type Props = {
    setSortedData: (planList: Plan[]) => void;
    sortedData: Plan[];
};

export default function TableHeaders({ setSortedData, sortedData }: Props) {
    return (
        <div className="flex border-b border-black">
            <TableHeader
                name="이름"
                setSortedData={setSortedData}
                sortedData={sortedData}
            />
            <TableHeader
                name="수정일자"
                setSortedData={setSortedData}
                sortedData={sortedData}
            />
            <TableHeader
                name="작성일자"
                setSortedData={setSortedData}
                sortedData={sortedData}
            />
        </div>
    );
}
