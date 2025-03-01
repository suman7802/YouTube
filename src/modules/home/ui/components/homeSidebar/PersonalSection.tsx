import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const items = [
    {
        title: 'History',
        icon: HistoryIcon,
        url: '/playlist/history',
        auth: true,
    },
    {
        title: 'Liked Videos',
        icon: ThumbsUpIcon,
        url: '/playlist/liked',
        auth: true,
    },
    {
        title: 'All Playlists',
        icon: ListVideoIcon,
        url: '/playlist',
        auth: true,
    },
];

export const PersonalSection = () => {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupLabel>You</SidebarGroupLabel>
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
