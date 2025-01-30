import React from 'react';

import { Outlet } from "react-router-dom";

import { useAppDispatch} from '@hooks/store';

import { themeAction } from '@store/slice/theme';


const Layout = () => {

    const dispatch = useAppDispatch();
    //const {theme, toggleTheme} = themeAction
    
    React.useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {

            dispatch(themeAction.setTheme('light'));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //const theme = localStorage.getItem('theme');
    
    localStorage.setItem('theme', themeAction);

    if (theme === 'light') {
      document.body.classList.remove('cd-dark');
    } else {
      document.body.classList.add('cd-dark');
    }

    return (
        <div className={`cd-min-h-screen cd-transition-colors cd-duration-500 ${theme === 'dark' ? 'dark cd-bg-zinc-800' : 'cd-bg-white'}`}>

            <header className={
                "fixed-div cd-font-sans cd-header cd-flex " +
                "cd-items-center cd-justify-between " +
                "cd-p-4 cd-shadow-md"
            } >
                <a href="" className="cd-text-3xl cd-font-bold dark:cd-text-white cd-text-black cd-m-3">Wallet
                    <span className="cd-text-violet-700">fy</span>
                </a>
                <button
                    className="cd-p-3 cd-rounded-md cd-shadow-lg cd-bg-gray-200 hover:cd-bg-gray-300 cd-mx-6 dark:cd-bg-zinc-700 dark:hover:cd-bg-gray-500 cd-transition-colors cd-duration-500"
                    onClick={() => themeAction.toggleTheme}
                >
                    {theme === 'light' ? '🌒' : '🌞'}
                </button>
            </header >

            <Outlet />
        </div>
    );
};

export default Layout;