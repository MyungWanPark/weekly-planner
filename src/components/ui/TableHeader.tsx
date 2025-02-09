import DownArrowIcon from "./icons/DownArrow";
import UpArrowIcon from "./icons/UpArrow";

type Props = {
    name: string;
    isDescendingOrder: boolean;
};

export default function TableHeader({ name, isDescendingOrder }: Props) {
    return (
        <div className="flex w-1/3 text-center justify-center items-center">
            <span>{name}</span>
            {isDescendingOrder && <DownArrowIcon />}
            {!isDescendingOrder && <UpArrowIcon />}
        </div>
    );
}
