import { FormEvent } from "react";
import PlusIcon from "./icons/Plus";

type Props = {
    type: number;
    btnClass?: string;
    onClick?: () => void;
};

const ButtonStyle = [
    {
        text: "시작하기",
        bgColor: "bg-startBtn",
        txtColor: "text-white",
    },
    {
        text: (
            <div className="flex items-center font-bold py-1">
                <PlusIcon />
                <span className="">만들기</span>
            </div>
        ),
        bgColor: "bg-white",
        txtColor: "text-black",
    },
];

export default function Button({ type, btnClass, onClick }: Props) {
    return (
        <button
            className={`${ButtonStyle[type].bgColor} ${ButtonStyle[type].txtColor} px-2 py-1 rounded-md text-sm ${btnClass}`}
            onClick={onClick}
        >
            {ButtonStyle[type].text}
        </button>
    );
}
