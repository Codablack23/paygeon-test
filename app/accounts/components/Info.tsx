import { Image } from "antd";

export default function Info(){
    return(
        <section className="hidden pt-10 p-4 md:block min-h-screen accounts-bg">
        <div className="max-w-[500px] text-white mx-auto text-center">
            <Image
                src="/images/account-image.png"
                preview={false}
                width={"100%"}
            />
            <p className="mt-10 font-extrabold text-2xl">Powerfully online banking built for small business. See why over 160,000 businesses trust us.</p>
            <p className="font-extrabold text-lg mb-1 mt-5">Waiapi Karaka</p>
            <p className="text-sm font-light">Financial Officer</p>
        </div>
    </section>
    )
}