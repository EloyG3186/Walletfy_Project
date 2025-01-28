import { Outlet } from "react-router-dom";

import React from 'react';

import MyContext from '@context/index';

const Layout = () => {

    const {schema, toggleSchema} = React.useContext(MyContext);

    return (
        <div className="dark:cd-bg-zinc-800">

            <header className={
                "fixed-div cd-font-sans cd-header cd-flex " +
                "cd-items-center cd-justify-between " +
                "cd-p-4 cd-shadow-md"
            } >
                <a href="" className="cd-text-3xl cd-font-bold dark:cd-text-white cd-text-black cd-m-3">Wallet
                    <span className="cd-text-violet-700">fy</span>
                </a>
                <button
                    className="cd-p-3 cd-rounded-md cd-shadow-lg cd-bg-gray-200 cd-mx-6 dark:cd-bg-blue-700 dark:hover:cd-bg-blue-900"
                    onClick={toggleSchema}
                >
                    {schema === 'light' ? '🌒' : '🌞'}
                </button>
            </header >

            <Outlet />
        </div>
    );
};

export default Layout;