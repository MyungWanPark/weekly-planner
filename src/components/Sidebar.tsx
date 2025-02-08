import Menus from "./Menus";
import Button from "./ui/Button";
import HamburgerIcon from "./ui/icons/Hamburger";
import Logo from "./ui/icons/Logo";

export default function Sidebar() {
    return (
        <section className="bg-semiDarkGrey w-60 h-full">
            <div className="flex items-center justify-between p-2">
                <HamburgerIcon />
                <Logo width={30} height={30} />
            </div>
            <Button type={1} btnClass="m-2" />
            <Menus />
        </section>
    );
}
