import React from 'react';
import Header from '@/components/Header';

const Layout = ({ children, isLoading }: { children: React.ReactNode; isLoading?: boolean }) => {
    return (
        <>
            <Header isLoading={isLoading} />
            <main data-testid="main-content">{children}</main>
        </>
    );
};

export default Layout;
