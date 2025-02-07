import { FormEvent } from "react";

type Props = {
    type: number;
    onClick?: () => void;
};

const ButtonStyle = [
    {
        text: "시작하기",
        bgColor: "bg-startBtn",
        txtColor: "text-white",
    },
];

export default function Button({ type, onClick }: Props) {
    return (
        <button
            className={`${ButtonStyle[type].bgColor} ${ButtonStyle[type].txtColor} px-2 py-1 rounded-md text-sm`}
            onClick={onClick}
        >
            {ButtonStyle[type].text}
        </button>
    );
}
