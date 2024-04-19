import { setDatosPotafolio } from "../../store/state/datosPotafolio.slice"
import { useDispatch } from "react-redux"

const ModalPortafolio = ({ datosPotafolio }) => {

    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setDatosPotafolio({ datos: null }))
    }

    return (
        <div className=" fixed top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex justify-center items-center transition-transform px-2 animate-fade animate-once animate-duration-1000">
            <div className=" dark:text-white w-full max-w-[500px] bg-[#78AB92] dark:bg-[#06121A] border m-auto absolute  rounded-xl space-y-3 pb-4">
                <header className=' overflow-hidden  rounded-t-xl'>
                    <img src={datosPotafolio.img} alt={datosPotafolio.nome} />
                    <button onClick={handleClose} className=" flex justify-center items-center absolute top-[1em] right-[1em]  bg-slate-50 text-red-600 rounded-full">
                        <i className='bx bxs-x-circle text-[30px]'></i>
                    </button>
                </header>

                <h2 className=' text-center text-lg font-semibold'>{datosPotafolio.name}</h2>

                <div className=' w-full px-1 text-pretty'>
                    <p className=" font-medium" >{datosPotafolio.descrip}</p>
                </div>
                <h2 className=" text-lg text-center font-semibold">Tecnologias usadas</h2>
                <div className=" w-full  grid grid-cols-4 justify-items-center">
                    {
                        datosPotafolio.skills.map(skill =>
                            <div className=" w-full flex flex-col justify-center items-center">
                                <h2 className=" font-medium">{skill.name}</h2>
                                <img className="w-[20px] bg-slate-100 dark:bg-transparent rounded-sm" src={skill.img} alt="" />

                            </div>
                        )
                    }

                </div>


                <div className=' w-full flex justify-center items-center space-x-3 font-medium'>

                    <a className=" bg-white text-black w-[5em] text-center py-2 rounded-md flex justify-center items-center gap-2 hover:bg-slate-300" href={datosPotafolio.repo} target="_blank"> <i className='bx bxl-github'></i> <span>Github</span></a>
                    <a className=" bg-white text-black w-[5em] text-center p-2 rounded-md flex justify-center items-center gap-2 hover:bg-slate-300" href={datosPotafolio.link} target="_blank"> <i class='bx bx-link-alt'></i> <span>Link</span></a>
                </div>
            </div>
        </div>
    )
}

export default ModalPortafolio