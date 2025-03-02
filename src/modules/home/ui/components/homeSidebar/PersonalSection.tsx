'use client';

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClerk, useAuth } from '@clerk/nextjs';

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
    const clerk = useClerk();
    const { isSignedIn } = useAuth();

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
                                    //
                                    //
                                    // --------------Quick Note-------------
                                    // for new devlopers on Next.js
                                    // please use 'use client'; for enable onClick event
                                    //
                                    //
                                    onClick={e => {
                                        if (item.auth && !isSignedIn) {
                                            e.preventDefault();
                                            return clerk.openSignIn();
                                        }
                                    }}
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
