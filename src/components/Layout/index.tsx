import React from 'react';
import Header from '@/components/Header';

/**
 * @description - Layout component to display the header and the main content
 * @param {React.ReactNode} children - Main content of the page
 * @param {boolean} isLoading - Flag to indicate if the page is loading
 * @returns {JSX.Element} - Layout component
 */
const Layout = ({ children, isLoading }: { children: React.ReactNode; isLoading?: boolean }) => {
    return (
        <>
            <Header isLoading={isLoading} />
            <main data-testid="main-content">{children}</main>
        </>
    );
};

export default Layout;
