"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import Logo from "./ui/icons/Logo";

export default function LandingBanner() {
    const router = useRouter();

    return (
        <div className="bg-lightGrey w-96 h-60 flex flex-col items-center justify-center rounded-lg">
            <Logo width={57} height={57} />
            <h2 className="font-bold text-lg mt-5">주간계획표</h2>
            <p className="text-sm mb-5">
                지난 주의 할 일과 이번 주의 할 일을 체크합니다.
            </p>
            <Button type={0} onClick={() => router.push("/login")} />
        </div>
    );
}
