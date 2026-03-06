import React from 'react'

const Layout = ({ children, className = "" }) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light px-5 py-8 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 dark:bg-dark ${className}`}>
            {children}
        </div>
    )
}

export default Layout
