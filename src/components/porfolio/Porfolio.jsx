import './css/porfolio.css'
import { setDatosPotafolio } from '../../store/state/datosPotafolio.slice'
import { useDispatch } from 'react-redux'

const Porfolio = ({ proyec }) => {
    console.log(proyec)
    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(setDatosPotafolio({ datos: proyec }))
    }

    return (


        <div className=' w-full max-w-[340px] h-[360px]  bg-slate-600 text-white rounded-xl mb-10  space-y-2 shadow-md border shadow-slate-500 ' >
            <header className=' overflow-hidden  rounded-t-xl'>
                <img src={proyec.img} alt={proyec.nome} />
            </header>

            <h2 className=' text-center text-lg font-semibold'>{proyec.name}</h2>

            <div className=' w-full h-[100px]'>
                <p className=" parrafo">{proyec.descrip}</p>
            </div>
            <div className=' w-full flex justify-center items-center'>
                <button onClick={handleModal} className=' bg-slate-50 text-black px-2 py-1 rounded-xl hover:bg-slate-300'>Ver mas</button>
            </div>

        </div>



    )
}

export default Porfolio