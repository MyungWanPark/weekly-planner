import Link from "next/link";

type Props = {
    name?: string;
};

export default function Tab({ name }: Props) {
    return (
        <div className="border-b border-black w-full flex items-end">
            <Link
                href={"/dashboard"}
                className={` border-black bg-semiDarkGrey text-black inline-block ${
                    name
                        ? "border-l border-t px-2 h-6"
                        : "border-l border-t border-r font-semibold py-2 px-4"
                }`}
            >
                Home
            </Link>
            {name && (
                <span className="border-l border-t border-r border-black bg-semiDarkGrey inline-block px-4 py-2 font-bold text-black cursor-pointer">
                    {name}
                </span>
            )}
        </div>
    );
}
