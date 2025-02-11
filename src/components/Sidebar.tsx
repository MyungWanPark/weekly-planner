"use client";

import { useState } from "react";
import Menus from "./Menus";
import Button from "./ui/Button";
import HamburgerIcon from "./ui/icons/Hamburger";
import Logo from "./ui/icons/Logo";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import HamburgerSidebar from "./HamburgerSidebar";

export default function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSubMenu = (menu: string | null) =>
        setOpenSubMenu(openSubMenu === menu ? null : menu);

    return (
        <section className="relative bg-semiDarkGrey w-1/4 h-full">
            <div className="flex items-center justify-between p-2">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <HamburgerIcon />}
                </button>
                <Logo width={30} height={30} />
            </div>
            <Button type={1} btnClass="ml-4 mt-2" />
            <Menus />
            <HamburgerSidebar
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                toggleSubMenu={toggleSubMenu}
                openSubMenu={openSubMenu}
            />
        </section>
    );
}
