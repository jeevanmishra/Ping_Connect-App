import { useEffect } from "react";
import EditProfileForm from "../../components/edit-profile-form/EditProfileForm";

const UserDetails = () => {
    useEffect(() => {
        document.title = "USER DETAILS | PING CONNECT";
      }, []);
    return (
        <div className="mt-8">
            <EditProfileForm/>
        </div>
    );
};

export default UserDetails;