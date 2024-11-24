"use client"
import { useUserContext } from "../firebase/context";
import Image from "next/image";

const ProfileInfo: React.FC = () => {
    const { user } = useUserContext();
    return (
        <>
            {user ? (
                <div className="flex flex-row justify-between gap-8">
                    <Image className="rounded-xl" src={user.photoURL ? user.photoURL : ""} width={128} height={128} alt=""></Image>
                    <div className="flex flex-col justify-around ">
                        <h1 className="text-xl text-black font-bold">Welcome, {user.displayName || user.email}</h1>
                        <p className="text-md text-black"><strong>Email:</strong> {user.email}</p>
                        <p className="text-md text-black"><strong>User ID:</strong> {user.uid}</p>
                        <p className="text-md text-black"><strong>Phone:</strong> {user.phoneNumber || 'N/A'}</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-between">
                    <h2 className="text-black text-xl text-center">You are not signed in.</h2>
                    <p className="text-black text-xl text-center">Please log in to view your profile.</p>
                </div>
            )}
        </>
    )
}

export default ProfileInfo