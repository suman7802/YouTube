import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({children}:AuthLayoutProps) => {
    return (
        <div className='flex items-center justify-center min-h-svh '>
            {children}
        </div>
    )
};
