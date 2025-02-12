import { useState } from "react";
import DownArrowIcon from "./icons/DownArrow";
import UpArrowIcon from "./icons/UpArrow";
import { Plan } from "@/app/model/plan";
import { sortByDate, sortByName, sortData } from "@/util/Date";

type Props = {
    name: string;
    setSortedData: (planList: Plan[]) => void;
    sortedData: Plan[];
};

export default function TableHeader({
    name,
    sortedData,
    setSortedData,
}: Props) {
    const [isDescendingOrder, setIsDescendingOrder] = useState(true);

    const handleClick = () => {
        let data = sortData(name, sortedData, isDescendingOrder);
        setSortedData(data!);
        setIsDescendingOrder(!isDescendingOrder);
        return;
    };

    return (
        <div
            className="flex w-1/3 text-center justify-center items-center cursor-pointer"
            onClick={handleClick}
        >
            <span>{name}</span>
            {isDescendingOrder && <DownArrowIcon />}
            {!isDescendingOrder && <UpArrowIcon />}
        </div>
    );
}
