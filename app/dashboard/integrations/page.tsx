import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { Image } from "antd";
import { integrationsData } from "@/app/utils/constants";
import { IntegrationDataObject } from "@/app/interfaces";

function Integration(props:IntegrationDataObject){
  return(
    <Link href={props.link}>
     <div className="shadow-lg rounded-2xl">
      <div
      style={{backgroundImage: `url('${props.bgUrl}')` }}
      className="h-[120px] rounded-t-xl"></div>
      <div className="p-2 text-center">
            <div className="-mt-[50px] mx-auto border border-white rounded-full flex items-center justify-center h-[63px] w-[63px]">
              <Image
              alt={props.name}
              preview={false}
              height={"60px"}
              width={"60px"}
              src={props.logo}
              className="rounded-full"/>
            </div>
            <div className="">
                  <h2 className="font-bold text-2xl capitalize">{props.name}</h2>
                  <div className="paragraph-fd8 col-l1r mg-bottom-fss my-2">Coming Soon.</div>
                  <div className="flex w-full gap-2 items-center justify-center mb-4">
                      <p className="font-bold">View company</p>
                      <p><i className="bi bi-arrow-right font-bold text-xl inline-block mt-1"></i></p>
                  </div>
            </div>
      </div>
      </div>
    </Link>
  )
}
export default function Page(){
    return (
        <MainLayout active="integrations">
          <div className="pt-4">
                <header className="text-center mb-10">
                  <p className="text-5xl font-bold">Integrations</p>
                  <p className="text-light">Easily connect with the platforms you use everyday</p>
                </header>
                <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {integrationsData.map(integration=>(
                    <Integration
                    {...integration}
                    />
                  ))}
                </section>
          </div>
        </MainLayout>
    )
}