const Header = () => {
    return (
        <div className="fixed-div cd-font-sans cd-header cd-flex cd-items-center cd-justify-between cd-bg-slate-50 cd-p-4 cd-shadow-md" >
            <h1 className="cd-text-3xl cd-font-bold cd-text-black cd-m-3">Wallet
                <span className="cd-text-violet-700">fy</span>
            </h1>
            <button className="cd-p-3 cd-rounded-md cd-shadow-lg cd-bg-gray-200 cd-mx-6 ">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-moon "
                    >
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>

                    </svg>
                </span>
            </button>

        </div >

    )
}


export default Header;

