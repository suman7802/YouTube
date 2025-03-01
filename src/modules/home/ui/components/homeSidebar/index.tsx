import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import React from 'react';
import { MainSection } from './MainSection';
import { Separator } from '@/components/ui/separator';
import { PersonalSection } from './PersonalSection';

export const HomeSidebar = () => {
    return (
        <Sidebar className='z-40 border-none pt-16' collapsible='icon'>
            <SidebarContent className='bg-background'>
                <MainSection />
                <Separator />
                <PersonalSection />
            </SidebarContent>
        </Sidebar>
    );
};
