import TableHeader from "./ui/TableHeader";

export default function TableHeaders() {
    return (
        <div className="flex border-b border-black">
            <TableHeader name="이름" isDescendingOrder />
            <TableHeader name="수정일자" isDescendingOrder />
            <TableHeader name="작성일자" isDescendingOrder />
        </div>
    );
}
