import useProfileForm from "../hooks/useProfileForm"
import AccountInput from "./AccountInput"

export default function BusinessForm(){
    const {legalName,setLegalName,email,setEmail,readOnly,editProfile,handleBusinessSubmit,contextHolder}  = useProfileForm()
    return (
    <>
    {contextHolder}
     <section className="my-4">
            <h4 className="font-bold text-lg">Business Information</h4>
            <form onSubmit={handleBusinessSubmit} action="" className="p-2 py-4 my-2 component-800 rounded-md">
                <AccountInput
                value={legalName}
                required
                label="legal business Name"
                handleInput={setLegalName}
                readOnly={readOnly}
                />
                <AccountInput
                value={email}
                required
                type="email"
                label="Business Email"
                handleInput={setEmail}
                readOnly={readOnly}
                />
                {
                    readOnly
                    ?<span onClick={editProfile} className="inline-block cursor-pointer mt-2 ml-auto bg-theme px-4 py-2 rounded-md text-white">Edit Profile</span>
                    :<button className="inline-block cursor-pointer mt-2 ml-auto bg-theme px-4 py-2 rounded-md text-white">Save</button>
                }
            </form>
        </section>
    </>
    )
}