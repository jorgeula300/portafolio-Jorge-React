import { setColor } from "../../store/state/headerColor.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Porfolio from "../../components/porfolio/Porfolio";
import porfolioP from '../../json/porfolioPEn.json'
import ModalPortafolio from "../../components/porfolio/ModalPortafolio";
import { useSelector } from "react-redux";



const PorfolioPageEn = () => {
    const dispatch = useDispatch();
    const datosPotafolio = useSelector(state => state.datosPotafolioSlice)

    useEffect(() => {
        dispatch(setColor("bg-[#F1F6F3] dark:bg-[#06121A]"));
    }, [])

    return (
        <div className=" w-full h-full flex flex-col justify-center items-center gap-5 px-2 animate-fade animate-once animate-duration-1000" >
            <h2 className=" text-center dark:text-white text-xl sm:text-2xl md:text-3xl  font-bold mt-4">MY <span className=" text-[#78AB92] dark:text-[#4BDB9E]">PROJECTS</span></h2>

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

export default PorfolioPageEn