import { setColor } from "../store/state/headerColor.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Porfolio from "../components/porfolio/Porfolio";
import porfolioP from '../json/porfolioP.json'
import ModalPortafolio from "../components/porfolio/ModalPortafolio";
import { useSelector } from "react-redux";



const PorfolioPage = () => {
    const dispatch = useDispatch();
    const datosPotafolio = useSelector(state => state.datosPotafolioSlice)

    useEffect(() => {
        dispatch(setColor("bg-[#06121A]"));
    }, [])

    console.log(porfolioP)
    return (
        <div className=" w-full h-full flex flex-col justify-center items-center gap-5 px-2" >
            <h2 className=" text-center text-white text-xl sm:text-2xl md:text-3xl  font-bold mt-4">MIS <span className="text-[#4BDB9E]">PROYECTOS</span></h2>

            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full'>

                {
                    porfolioP?.proyectos.map(proyec => (
                        <Porfolio key={proyec.name} proyec={proyec} />
                    ))
                }

            </div>
            {
                datosPotafolio.datos ? <ModalPortafolio datosPotafolio={datosPotafolio.datos} /> : null

            }

        </div>
    )
}

export default PorfolioPage