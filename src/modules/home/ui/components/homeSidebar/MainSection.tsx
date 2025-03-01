import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const items = [
    {
        title: 'Home',
        icon: HomeIcon,
        url: '/',
        auth: false,
    },
    {
        title: 'Subscriptions',
        icon: PlaySquareIcon,
        url: '/feed/subscriptions',
        auth: true,
    },
    {
        title: 'Trending',
        icon: FlameIcon,
        url: '/feed/trending',
        auth: false,
    },
];

export const MainSection = () => {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map(item => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    tooltip={item.title}
                                    isActive={false} // Todo: Implement this
                                >
                                    <Link href={item.url} className='flex items-center gap-4'>
                                        <item.icon />
                                        <span className='text-sm'>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    );
};
