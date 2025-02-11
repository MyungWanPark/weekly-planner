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
    const isActive =
        pathname === `/dashboard${info.route}` ||
        pathname === `/dashboard/${info.route}`;

    return (
        <Link
            className={`flex items-center border-b border-black py-2 px-5 gap-10 hover:bg-bluePurple ${
                isActive ? "font-bold" : "font-normal"
            }`}
            href={`/dashboard/${info.route}`}
        >
            <FolderIcon className="" />
            <span className="">{info.name}</span>
        </Link>
    );
}
