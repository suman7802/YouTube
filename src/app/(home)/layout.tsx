import { HomeLayout } from '@/modules/home/ui/layout/HomeLayout';
import React from 'react';

interface layoutProps {
    children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
    return (
        <>
            <HomeLayout>{children}</HomeLayout>
        </>
    );
};

export default layout;
