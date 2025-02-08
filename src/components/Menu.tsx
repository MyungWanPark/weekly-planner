import Link from "next/link";
import FolderIcon from "./ui/icons/folder";

type Props = {
    info: {
        name: string;
        route: string;
    };
};
export default function Menu({ info }: Props) {
    return (
        <Link
            className="flex items-center border-b border-black p-2"
            href={`/dashboard/${info.route}`}
        >
            <FolderIcon />
            <span className="ml-2">{info.name}</span>
        </Link>
    );
}
