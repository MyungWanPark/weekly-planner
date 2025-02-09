import Link from "next/link";

export default function Tab() {
    return (
        <div className="border-b border-black w-full">
            <Link
                href={"/dashboard"}
                className="bg-semiDarkGrey text-black font-semibold inline-block py-2 px-4"
            >
                Home
            </Link>
        </div>
    );
}
