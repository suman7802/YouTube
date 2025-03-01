import { SidebarTrigger } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SearchInput } from '../searchInput';
import { AuthButton } from '@/modules/auth/ui/components/AuthButton';

const HomeNavbar = () => {
    return (
        <nav className='justify- fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white p-2 pr-5'>
            <div className='flex items-center gap-4'>
                <SidebarTrigger />

                <Link href='/' className='flex gap-1'>
                    <Image src='/logo.svg' alt='logo' width={32} height={32} />
                    <p className='text-xl font-semibold tracking-tight'>YouTube</p>
                </Link>
            </div>

            <SearchInput />

            <div className='flex shrink-0 items-center justify-center'>
                <AuthButton />
            </div>
        </nav>
    );
};

export default HomeNavbar;
