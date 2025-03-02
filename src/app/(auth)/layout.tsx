import { AuthLayout } from '@/modules/auth/ui/layout/AuthLayout';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return(
        <AuthLayout>
            {children}
        </AuthLayout>
    )
};

export default Layout;
