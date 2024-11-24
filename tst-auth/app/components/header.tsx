import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthButton from './authButton';

const Header: React.FC = () => {
    return (
        <div className="navbar bg-base-100">
                <Link href="/" className="flex-1">
                    <Image src="/logo-without-name.png" width={50} height={50} alt="logo"/>
                    <h1 className="text-xl">Lautan API</h1>
                </Link>
                <AuthButton/>
        </div>
    );
};

export default Header;
