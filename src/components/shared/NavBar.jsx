import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { setContacto } from "../../store/state/contacto.slice";
import { useDispatch } from 'react-redux'

const NavBar = () => {

    const [menu, setMenu] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        } else {
            return 'light'
        }
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleMenu = () => {
        setMenu(!menu);
    }
    const dispatch = useDispatch();
    const handleContacto = () => {
        dispatch(setContacto({ idioma: 'es' }))
    }

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
            <header className={`flex justify-between items-center text-white px-3 bg-[#78AB92] dark:bg-transparent `}>
                <Link className="text-2xl md:text-4xl font-bold" to='/'>
                    Deve<span className=" text-[#091922] dark:text-[#4BDB9E]">loper</span>
                </Link>
                <nav onClick={handleMenu} className={` ${!menu && 'hidden'} fixed top-0 left-0 w-full min-h-[100vh] backdrop-blur-[2px]  md:block  md:relative md:min-h-0 md:bg-transparent md:w-auto md:top-auto md:left-auto flex justify-center items-center transition-transform`}>
                    <ul className=" w-full max-w-[300px] rounded-md py-3 flex flex-col  justify-center items-center mr-3 space-y-4  bg-[#091922] md:bg-transparent md:space-y-0  md:w-auto md:max-w-full md:space-x-4  md:flex-row [&>li]:text-lg [&>li]:font-semibold [&>li]:text-center ">
                        <li><Link
                            className="hover:text-black dark:hover:text-[#4BDB9E]"
                            to='/'
                        >
                            Inicio
                        </Link></li>
                        <li><Link
                            className="hover:text-black dark:hover:text-[#4BDB9E]"
                            to='/about'>
                            Acerca de mí
                        </Link></li>
                        <li>
                            <Link
                                className="hover:text-black dark:hover:text-[#4BDB9E]"
                                to='/skills'>
                                Habilidades
                            </Link>
                        </li>
                        <li><Link
                            className="hover:text-black dark:hover:text-[#4BDB9E]"
                            to='/porfolio'>
                            Portafolio
                        </Link></li>
                        <li>
                            <button
                                onClick={handleContacto}
                                className="hover:text-black dark:hover:text-[#4BDB9E]"
                            >
                                Contacto
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className=" flex justify-center items-center space-x-3 mr-3">
                    <div onClick={handleTheme} className=" flex justify-center items-center w-[20px] h-[20px] bg-slate-300 rounded-full cursor-pointer">
                        <i className="bx bxs-sun  text-yellow-500  animate-spin animate-infinite animate-duration-9000"></i>
                        <i className="bx bxs-moon text-[#1e3751] absolute"></i>
                    </div>
                    <Link to={'/homeEN'} ><img className="w-[30px]"
                        src="/United_States.svg" alt="" /></Link>
                </div>


                <div onClick={handleMenu} className="text-2xl font-semibold relative md:hidden">
                    <i className={`bx bx-menu ${menu && 'hidden'}   `}></i>
                    <i className={`bx bx-x ${!menu && 'hidden'}`} ></i>
                </div>
            </header>
            <Outlet />
        </>);
}

export default NavBar;