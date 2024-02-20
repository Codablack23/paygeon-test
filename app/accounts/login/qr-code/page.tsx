"use client";
import { Checkbox, Image, Input, QRCode } from "antd";
import { useState } from "react";
import Link from "next/link";
import { text } from "stream/consumers";



export default function Page(){
    return(
        <section className="pt-2">
            <Image
            src="/images/logo.png"
            />
            <header className="mb-8 mt-[60px]">
                <h1 className="font-extrabold text-4xl">Log in with QR code</h1>
                <p className="text-base mt-2 text-[#747A80]">Scan this code with the mobile app to log in instantly</p>
            </header>
            <form action="">
                <div className="text-center flex justify-center">
                    <QRCode value={"https://login.html"} />
                </div>
                <div className="my-2 mb-6 max-w-[300px] mx-auto flex items-center gap-2">
                    <hr className="flex-1"/>
                    <p className="text-sm text-light">or</p>
                    <hr className="flex-1"/>
                </div>
                <Link href={"/accounts/recover-password"}>
                    <button type="button" className="py-3 border border-light-800 w-full rounded-lg text-lg font-bold">Login with email or phone number</button>
                </Link>
                <p className="mt-20 gap-4 text-center">
                    <span>You don&apos;t have an account? </span>
                    <Link href={"/accounts/recover-password"}>
                        <span className="text-theme font-bold">Create Account</span>
                    </Link>
                </p>
            </form>
        </section>
    )
}