import LandingBanner from "@/components/LandingBanner";
import Image from "next/image";

export default function Home() {
    return (
        <section className="flex justify-center items-center w-full h-full">
            <LandingBanner />
        </section>
    );
}
