import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Logo.png"

// Profile Dropdown 
const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Dashboard", path: `/` },
        { title: "Settings", path: `/` },
        { title: "Log out", path: `/` },
    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://media.licdn.com/dms/image/D5603AQGZevHjIIVXSQ/profile-displayphoto-shrink_100_100/0/1670482539135?e=1687996800&v=beta&t=7r9I6hJtTVLMI7pL6m1lonFEMcsXPj_GpW3g3ojstLY"
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">Antu Das</span>
                    <span className="block text-sm text-gray-500">antu.haks@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, i) => (
                        <li key={i}>
                            <Link key={i} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const Navbar = () => {

    // Changing Navbar color while scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 95) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

    window.addEventListener('scroll', changeColor);

    const [menuState, setMenuState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: `/` },
        { title: "Services", path: `/` },
        { title: "Gallery", path: `/` },
        { title: "Events", path: `/` },
        { title: "Login", path: `/login` },
        { title: "Sign Up", path: `/signUp` },
    ]
    return (
        <nav className={`bg-[aliceblue] opacity-100  w-full border-none`}>
            <div className="flex items-center justify-end py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link href="/">
                        <img
                            src={logo}
                            width={60}
                            height={60}
                            alt="Float UI logo"
                        />
                    </Link>
                </div>
                <div className="flex-1 flex items-center right-0 justify-between">
                    <div className={`lg:bg-transparent bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-black sm:text-gray-600 hover:text-gray-900">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ProfileDropDown
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full bg-transparent outline-none appearance-none placeholder-black text-black sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                        <ProfileDropDown
                            class="hidden lg:block"
                        />
                        <button
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;