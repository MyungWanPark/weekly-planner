import Menu from "./Menu";

const MENUS = [
    {
        name: "2025년 주간 계획",
        route: "",
    },
    {
        name: "기타 폴더",
        route: "etc-folder",
    },
];

export default function Menus() {
    return (
        <ul className="border-t border-black mt-5">
            {MENUS.map((val, id) => (
                <li key={id}>
                    <Menu info={val} />
                </li>
            ))}
        </ul>
    );
}
