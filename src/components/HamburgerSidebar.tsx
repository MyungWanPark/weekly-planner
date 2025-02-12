import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import SubmenuInfo from "./ui/SubmenuInfo";

type Props = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    toggleSubMenu: (menu: string | null) => void;
    openSubMenu: string | null;
};

const MENUS = [
    { main: "파일", sub: ["새 계획표", "로그아웃", "닫기"] },
    { main: "편집", sub: ["실행 취소", "다시 실행", "찾기"] },
    { main: "정보", sub: [<SubmenuInfo />] },
];

export default function HamburgerSidebar({
    isMenuOpen,
    toggleMenu,
    toggleSubMenu,
    openSubMenu,
}: Props) {
    return (
        <div
            className={`absolute left-0 top-0 w-full h-full bg-white shadow-lg p-4 transition-transform duration-300  ${
                isMenuOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
        >
            <button className="mb-4 text-gray-700" onClick={toggleMenu}>
                <FaTimes size={15} />
            </button>
            <ul className="text-xs md:text-base">
                {MENUS.map((menu, id) => {
                    return (
                        <li key={id} className="border-b border-gray-300">
                            <button
                                onClick={() => toggleSubMenu(menu.main)}
                                className="flex items-center justify-between w-full p-2 text-left text-black hover:bg-gray-200 rounded-md"
                            >
                                <span
                                    className={`absolute left-1/2 transform -translate-x-1/2 ${
                                        openSubMenu === menu.main
                                            ? "font-bold"
                                            : "font-normal"
                                    }`}
                                >
                                    {menu.main}{" "}
                                </span>
                                <span className="ml-auto">
                                    {openSubMenu === menu.main ? (
                                        <FaChevronUp size={12} />
                                    ) : (
                                        <FaChevronDown size={12} />
                                    )}
                                </span>
                            </button>
                            <ul
                                className={`overflow-hidden transition-all duration-300 ${
                                    openSubMenu === menu.main
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                {menu.sub.map((subMenu, subId) => (
                                    <li
                                        key={subId}
                                        className="p-2 text-black hover:bg-gray-300 rounded-md text-center cursor-pointer"
                                        onClick={
                                            subMenu === "닫기"
                                                ? () => toggleSubMenu(menu.main)
                                                : () => {}
                                        }
                                    >
                                        <span className="border-b border-gray-300 pb-1">
                                            {subMenu}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
