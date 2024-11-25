import KeyInfo from "./keyInfo";
import ProfileInfo from "./profileInfo"

const ProfilePage: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="mx-72 my-36 bg-white rounded-lg px-8 py-4">
                <h1 className="text-2xl text-black font-bold mb-4">Your Profile</h1>
                <ProfileInfo/>
                <KeyInfo/>
                <hr className="border-t-2 border-gray-300 my-4" />
            </div>
        </div>
    );
}

export default ProfilePage;