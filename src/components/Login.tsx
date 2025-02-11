"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const LABEL_CLASS = "flex items-center w-1/5";
const INPUT_CLASS = "outline-none bg-semiDarkGrey ml-2 p-2 w-4/5";

export default function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            id === process.env.NEXT_PUBLIC_ID &&
            password === process.env.NEXT_PUBLIC_PASSWORD
        ) {
            router.push("/dashboard");
            return;
        }
        setShowWarning(true);
        setTimeout(() => {
            setShowWarning(false);
        }, 1500);
    };
    const handleIdChange = (e: FormEvent<HTMLInputElement>) => {
        setId(e.currentTarget.value);
    };
    const handlePWChange = (e: FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    return (
        <div className="w-96 h-68 bg-lightGrey flex flex-col items-center p-8">
            <p className="font-bold mb-5">로그인</p>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="flex mb-2">
                    <label htmlFor="id" className={LABEL_CLASS}>
                        아이디
                    </label>
                    <input
                        type="text"
                        id="id"
                        onChange={handleIdChange}
                        value={id}
                        className={INPUT_CLASS}
                    />
                </div>
                <div className="flex justify-center">
                    {" "}
                    <label htmlFor="password" className={LABEL_CLASS}>
                        비밀번호
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={handlePWChange}
                        value={password}
                        className={INPUT_CLASS}
                    />
                </div>
                <div className="flex justify-evenly px-5 py-3 w-full text-sm">
                    <Link href={"/login/search"}>아이디/비밀번호 찾기</Link>
                    <Link href={"/register"}>회원가입</Link>
                </div>
                <div className="flex justify-center">
                    <Button type={0} />
                </div>
            </form>
            {showWarning && (
                <p className="mt-2 text-red-500">
                    아이디 혹은 비밀번호가 틀렸습니다.
                </p>
            )}
        </div>
    );
}
