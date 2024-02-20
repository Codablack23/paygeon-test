"use client";

import { magicbellTheme } from "@/app/utils/constants";
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";

export default function MagicbellButton(){
    return(
       <div className="border h-10 w-10 flex items-center justify-center rounded-md border-light-800">
         <MagicBell
        apiKey="b8b27eda9fc333e25eefe20f6f11cdae6ee2c46c"
        userEmail="vashon@kaped.io"
        theme={magicbellTheme}
        locale="en"
      >
        {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
      </MagicBell>
       </div>
    )
}

{/* <MyOwnNotificationInbox toggle={toggle} isOpen={isOpen} launcherRef={launcherRef} /> */}