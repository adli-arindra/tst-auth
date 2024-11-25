"use client";
import { useUserContext } from "../firebase/context";
import Image from "next/image";

const ProfileInfo: React.FC = () => {
    const { user } = useUserContext();

    return (
        <>
            {user ? (
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-white rounded-lg shadow-md">
                    <Image
                        className="rounded-full"
                        src={user.photoURL || ""}
                        width={128}
                        height={128}
                        alt="User Avatar"
                    />
                    <div className="flex flex-col justify-start">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome, {user.displayName || user.email}</h1>
                        <p className="text-md text-gray-700"><strong>Email:</strong> {user.email}</p>
                        <p className="text-md text-gray-700"><strong>User ID:</strong> {user.uid}</p>
                        <p className="text-md text-gray-700"><strong>Phone:</strong> {user.phoneNumber || 'N/A'}</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">You are not signed in.</h2>
                    <p className="text-lg text-gray-700">Please log in to view your profile.</p>
                </div>
            )}
        </>
    );
};

export default ProfileInfo;
