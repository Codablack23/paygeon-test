"use client";
interface Props{
  email:string
}
import { magicbellTheme } from "@/app/utils/config";
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";
import { Suspense } from "react";

const DefaultButton = ()=>(
<div className="border hidden h-10 w-10 sm:flex items-center justify-center rounded-md border-light-800">
<i className="bi bi-bell text-xl md:text-3xl"></i>
</div>
)
const apiKey = process.env.NEXT_PUBLIC_MAGICBELL_KEY
export default function MagicbellButton(props:Props){
    return(
     <Suspense fallback={<DefaultButton/>}>
       <div className="border hidden h-10 w-10 sm:flex items-center justify-center rounded-md border-light-800">
         <MagicBell
        apiKey={apiKey?apiKey:""}
        userEmail={props.email}
        theme={magicbellTheme}
        locale="en"
      >
        {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
      </MagicBell>
       </div>
       <div className="border h-8 w-8 flex sm:hidden items-center justify-center rounded-md border-light-800">
         <MagicBell
        apiKey={apiKey?apiKey:""}
        userEmail={props.email}
        theme={{
          ...magicbellTheme,
          icon:{
            "borderColor":"#747A80",
            width:"16px"
          }
        }}
        locale="en"
      >
        {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
      </MagicBell>
       </div>
     </Suspense>
    )
}

{/* <MyOwnNotificationInbox toggle={toggle} isOpen={isOpen} launcherRef={launcherRef} /> */}