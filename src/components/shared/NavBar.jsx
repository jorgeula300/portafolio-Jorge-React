import { Link } from "react-router-dom";
import { useState } from "react";
import { setContacto } from "../../store/state/contacto.slice";
import { useDispatch } from 'react-redux'

const NavBar = () => {

    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    const dispatch = useDispatch();
    const handleContacto = () => {
        dispatch(setContacto(true))
    }

    return (<header className={`flex justify-between items-center text-white px-3 `}>
        <Link className="text-2xl md:text-4xl font-bold" to='/'>
            Deve<span className="text-[#4BDB9E]">loper</span>
        </Link>
        <nav onClick={handleMenu} className={` ${!menu && 'hidden'} fixed top-0 left-0 w-full min-h-[100vh] backdrop-blur-[2px]  md:block  md:relative md:min-h-0 md:bg-transparent md:w-auto md:top-auto md:left-auto flex justify-center items-center transition-transform`}>
            <ul className=" w-full max-w-[300px] rounded-md py-3 flex flex-col  justify-center items-center mr-3 space-y-4  bg-[#091922] md:bg-transparent md:space-y-0  md:w-auto md:max-w-full md:space-x-4  md:flex-row [&>li]:text-lg [&>li]:font-semibold [&>li]:text-center ">
                <li><Link
                    className="hover:text-[#4BDB9E]"
                    to='/'
                >
                    Inicio
                </Link></li>
                <li><Link
                    className="hover:text-[#4BDB9E]"
                    to='/about'>
                    Acerca de mí
                </Link></li>
                <li>
                    <Link
                        className="hover:text-[#4BDB9E]"
                        to='/skills'>
                        Habilidades
                    </Link>
                </li>
                <li><Link
                    className="hover:text-[#4BDB9E]"
                    to='/porfolio'>
                    Portafolio
                </Link></li>
                <li>
                    <button
                        onClick={handleContacto}
                        className="hover:text-[#4BDB9E]"
                    >
                        Contacto
                    </button>
                </li>
            </ul>
        </nav>

        <div className=" flex justify-center items-center space-x-3 mr-3">
            <div className=" flex justify-center items-center w-[20px] h-[20px] bg-slate-300 rounded-full ">
                <i className="bx bxs-sun  text-yellow-500"></i>
                <i className="bx bxs-moon text-[#1e3751] absolute"></i>
            </div>
            <a href="./assets/page/indexEn.html"><img className="w-[30px]"
                src="/United_States.svg" alt="" /></a>
        </div>


        <div onClick={handleMenu} className="text-2xl font-semibold relative md:hidden">
            <i className={`bx bx-menu ${menu && 'hidden'}   `}></i>
            <i className={`bx bx-x ${!menu && 'hidden'}`} ></i>
        </div>
    </header>);
}

export default NavBar;