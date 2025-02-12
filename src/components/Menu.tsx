"use client";

import Link from "next/link";
import FolderIcon from "./ui/icons/folder";
import { usePathname } from "next/navigation";

type Props = {
    info: {
        name: string;
        route: string;
    };
};
export default function Menu({ info }: Props) {
    const pathname = usePathname();
    const lastSegment = pathname.split("/").pop();
    const isNumber = /^\d+$/.test(lastSegment || "");

    const isActive =
        pathname === `/dashboard${info.route}` ||
        pathname === `/dashboard/${info.route}`;

    return (
        <Link
            className={`flex items-center border-b border-black py-2 px-5 gap-10 hover:bg-bluePurple ${
                isActive ? "font-bold" : ""
            } ${isNumber && info.name !== "기타 폴더" ? "font-bold" : ""}`}
            href={`/dashboard/${info.route}`}
        >
            <FolderIcon className="" />
            <span>{info.name}</span>
        </Link>
    );
}
