"use client";
import { Checkbox, Image, Spin } from "antd";
import InputField from "../components/InputField";
import TogglePasswordShown from "../components/TogglePasswordShown";
import Link from "next/link";
import usePasswordVisibility from "../hooks/usePasswordVisibity";
import useAccountsForm from "../hooks/useAccountsForm";


export default function Page(){
    const {
        email,
        loading,
        handleEmailInput,
        password,
        handlePasswordInput,
        handleSignIn,
        contextHolder
    } = useAccountsForm()
    const {shown,togglePasswordShown} = usePasswordVisibility()
    return(
        <>
        {contextHolder}
        <section className="pt-8">
            <div className="mt-1">
                <div className="max-w-[150px]">
                    <Image
                    src="/images/paygeon-logo.svg"
                    className="w-full"
                    preview={false}
                    />
                </div>
            </div>
            <header className="mb-8 mt-[30px] sm:mt-[60px] text-center sm:text-left">
                <h1 className="font-extrabold text-4xl sm:text-5xl">Sign in</h1>
                <p className="text-base mt-2 text-[#747A80]">Enter your account details or use QR code</p>
            </header>
            <form onSubmit={handleSignIn}>
                <InputField
                    value={email}
                    containerClass="mb-6"
                    handleInput={handleEmailInput}
                    label={"email"}
                    type={"email"}
                    required
                    placeholder="Enter your email"
                    suffixComponent={
                        <Image
                        src="/images/icons/envelope.png"
                        />
                    }
                />
                <InputField
                    value={password}
                    containerClass="mb-4"
                    handleInput={handlePasswordInput}
                    label={"password"}
                    type={shown?"text":"password"}
                    placeholder="Enter your password"
                    required
                    maxLength={50}
                    minLength={8}
                    suffixComponent={
                        <TogglePasswordShown
                        shown={shown}
                        toggleShown={togglePasswordShown}
                        />
                    }
                />
                <div className="my-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Checkbox/>
                        <p className="text-light text-sm">Remember me</p>
                    </div>
                    <Link href={"/accounts/recover-password"}>
                        <button type="button" className="text-sm font-bold">Recover Password</button>
                    </Link>
                </div>
                <button 
                disabled={loading} 
                type="submit" 
                className={`w-full my-4 ${loading?"bg-gray-200":"bg-theme"} shadow-md  disabled:cursor-not-allowed text-white py-3 rounded-lg text-lg font-bold`}>
                    {loading
                    ?<Spin/>
                    :"Sign In"}
                </button>
                <div className="my-2 mb-6 max-w-[300px] mx-auto flex items-center gap-2">
                    <hr className="flex-1"/>
                    <p className="text-sm text-light">or</p>
                    <hr className="flex-1"/>
                </div>
                <Link href={"/accounts/recover-password"}>
                    <button type="button" className="py-3 border border-light-800 w-full rounded-lg text-lg font-bold">Login with QR code</button>
                </Link>
                <p className="my-10 gap-4 text-center">
                    <span>You don&apos;t have an account? </span>
                    <Link href={"/accounts/register"}>
                        <span className="text-theme font-bold">Create Account</span>
                    </Link>
                </p>
            </form>
        </section>
        </>
    )
}