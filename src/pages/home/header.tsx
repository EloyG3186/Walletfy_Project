import React from 'react';

import MyContext from '@context/index';

const Header = () => {

    const { schema, toggleSchema } = React.useContext(MyContext);

    return (
        <header className=" cd-fixed-div cd-font-sans  cd-flex cd-items-center cd-justify-between cd-p-4 cd-shadow-md dark:cd-bg-zinc-800" >
            <a href="/" className="cd-text-3xl cd-font-bold cd-text-black cd-m-3">Wallet
                <span className="cd-text-violet-700">fy</span>
            </a>
            <button
                className="cd-p-3 cd-rounded-md cd-shadow-lg cd-mx-6"
                onClick={toggleSchema}
            >
            </button>
        </header >

    )
}


export default Header;

