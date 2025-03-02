'use client';

import React from 'react';
import { UserCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const AuthButton = () => {
    return (
        <>
            {/* 
                SignedIn is a state which indicate a curent sign in status
                active when the user is signed in
            */}
            <SignedIn>
                {/* 
                    UserButton is a component that displays the user's information
                    like name, email, and profile picture
                */}
                <UserButton />
            </SignedIn>

            {/* 
                SignedOut is a state which indicate a curent sign in status
                active when the user is signed out
            */}
            <SignedOut>
                <SignInButton mode='modal'>
                    <Button
                        variant='outline'
                        className='rounded-full border-blue-500/20 px-4 py-2 text-sm text-blue-600 shadow-none hover:border-blue-500 hover:text-blue-500'
                    >
                        <UserCircleIcon />
                        <span>Sign In</span>
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};
