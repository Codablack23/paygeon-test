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
        handleEmailInput,
        name,
        handleNameInput,
        password,
        handlePasswordInput,
        confirmPassword,
        handleConfirmPasswordInput,
        handleSignUp,
        loading,
        contextHolder
    } = useAccountsForm()
    const {shown,togglePasswordShown} = usePasswordVisibility()
    const {shown:confirmShown,togglePasswordShown:toggleConfirmShown} = usePasswordVisibility()
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
            <header className="mb-8 mt-[60px]">
                <h1 className="font-extrabold text-5xl">Sign up</h1>
                <p className="text-base mt-2 text-[#747A80]">Enter your details to get started</p>
            </header>
            <form onSubmit={handleSignUp}>
                <InputField
                    value={name}
                    containerClass="mb-6"
                    handleInput={handleNameInput}
                    label={"Legal business name"}
                    type={"text"}
                    minLength={3}
                    required
                    placeholder="Provide your legal business name"
                    suffixComponent={
                        <Image
                        src="/images/icons/envelope.png"
                        />
                    }
                />
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
                    minLength={8}
                    maxLength={50}
                    suffixComponent={
                        <TogglePasswordShown
                        shown={shown}
                        toggleShown={togglePasswordShown}
                        />
                    }
                />
                <InputField
                    value={confirmPassword}
                    containerClass="mb-4"
                    handleInput={handleConfirmPasswordInput}
                    label={"confirm password"}
                    type={confirmShown?"text":"password"}
                    placeholder="Enter your password"
                    required
                    minLength={8}
                    maxLength={50}
                    suffixComponent={
                        <TogglePasswordShown
                        shown={shown}
                        toggleShown={toggleConfirmShown}
                        />
                    }
                />
                <div className="flex items-center gap-2 mt-8 mb-1">
                        <Checkbox checked/>
                        <p className="text-light font-bold text-sm">I agree to receive email updates</p>
                </div>  
                <div className="flex items-center gap-2 mb-12">
                        <Checkbox checked/>
                        <p className="text-light font-bold text-sm">I have read and agree to <Link target="_blank" href={"https://legal.paygeon.com/terms-and-conditions"}><span className="cursor-pointer text-theme">Terms of Service</span></Link></p>
                </div>
                <button disabled={loading} className="w-full my-4 bg-theme disabled:bg-gray-200 disabled:cursor-not-allowed text-white py-3 rounded-lg text-lg font-bold">
                    {loading
                    ?<Spin/>
                    :"Create Account"
                    }
                </button>
                <p className="my-10 gap-4 text-center">
                    <span>Already registered? </span>
                    <Link href={"/accounts/login"}>
                        <span className="text-theme font-bold">Sign in</span>
                    </Link>
                </p>
            </form>
        </section>
    </>
    )
}