import AccountInput from "./AccountInput";
import useProfileForm from "../hooks/useProfileForm";
import { Spin } from "antd";

export default function AccountsForm(){
    const {fullName,handleFullNameInput,readOnly,editProfile,handleSubmit,loading,contextHolder}  = useProfileForm()
    return (
        <>
        {contextHolder}
        <section className="my-4">
            <h4 className="font-bold text-lg">Account Information</h4>
            <form onSubmit={handleSubmit} action="" className="p-2 py-4 my-2 component-800 rounded-md">
                <AccountInput
                value={fullName}
                label="full name"
                handleInput={handleFullNameInput}
                readOnly={readOnly}
                />
                {!readOnly
                ?<button disabled={loading} className="inline-block mt-2 ml-auto bg-theme px-4 py-2 rounded-md text-white">
                    {loading
                    ?<Spin/>
                    :<span>Save</span>
                    }
                </button>
                :<span onClick={editProfile} className="inline-block cursor-pointer mt-2 ml-auto bg-theme px-4 py-2 rounded-md text-white">Edit Profile</span>
                }
            </form>
        </section>
        </>
       
    )
}