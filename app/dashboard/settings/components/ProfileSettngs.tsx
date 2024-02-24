import AccountsForm from "./AccountsForm";
import BusinessForm from "./BusinessForm";
import ProfilePicture from "./ProfilePicture";

export default function ProfileSettings(){
    return(
        <div className="my-4">
            <ProfilePicture/>
            <AccountsForm/>
            <BusinessForm/>
        </div>
    )
}