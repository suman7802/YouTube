import React from 'react';
import HomeNavbar from '@/modules/home/ui/components/homeNavbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { HomeSidebar } from '../components/homeSidebar';

interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <SidebarProvider>
            <HomeNavbar />

            <div className='flex w-full border pt-16'>
                <HomeSidebar />
                <main>{children}</main>
            </div>
        </SidebarProvider>
    );
};
