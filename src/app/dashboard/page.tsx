import Link from "next/link";

export default function DashBoardPage() {
    return (
        <article>
            대시보드 페이지
            <Link href={"/dashboard/1"}>1주차 바로 보기</Link>
        </article>
    );
}
