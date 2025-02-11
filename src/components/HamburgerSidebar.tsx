import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import Logo from "./ui/icons/Logo";

type Props = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    toggleSubMenu: (menu: string | null) => void;
    openSubMenu: string | null;
};

const MENUS = [
    { main: "파일", sub: ["새 계획표", "로그아웃", "닫기"] },
    { main: "편집", sub: ["실행 취소", "다시 실행", "닫기"] },
    { main: "정보", sub: [<Logo width={20} height={20} />] },
];

export default function HamburgerSidebar({
    isMenuOpen,
    toggleMenu,
    toggleSubMenu,
    openSubMenu,
}: Props) {
    return (
        <div
            className={`absolute left-0 top-0 w-64 h-full bg-white shadow-lg p-4 transition-transform duration-300  ${
                isMenuOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
        >
            <button className="mb-4 text-gray-700" onClick={toggleMenu}>
                <FaTimes size={24} />
            </button>
            <ul>
                {MENUS.map((menu, id) => {
                    return (
                        <li key={id}>
                            <button
                                onClick={() => toggleSubMenu(menu.main)}
                                className="flex items-center justify-center w-full p-2 text-left text-black hover:bg-gray-200 rounded-md"
                            >
                                {menu.main}{" "}
                                {openSubMenu === menu.main ? (
                                    <FaChevronUp size={16} />
                                ) : (
                                    <FaChevronDown size={16} />
                                )}
                            </button>
                            <ul
                                className={`ml-4 overflow-hidden transition-all duration-300 ${
                                    openSubMenu === menu.main
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                {menu.sub.map((subMenu, subId) => (
                                    <li
                                        key={subId}
                                        className="p-2 text-black hover:bg-gray-300 rounded-md"
                                    >
                                        {subMenu}
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
