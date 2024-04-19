import { useSelector } from "react-redux";
import { setContacto } from "../../store/state/contacto.slice";
import { useDispatch } from "react-redux";

const ContactoModalEn = () => {
    const headerColor = useSelector((state) => state.headerColorSlice);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setContacto(false));
    }
    return (
        <div className="fixed top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex justify-center items-center transition-transform animate-fade animate-once animate-duration-1000">
            <form
                action="https://formsubmit.co/e67ca0570327480c899ec903760a583b" method="POST"
                className={` flex flex-col justify-center items-center w-[95%] md:w-[80%] min-h-[300px] rounded-lg  ${headerColor} dark:text-white relative`}
            >
                <div onClick={handleClose} className=" flex justify-center items-center absolute top-[1em] right-[1em] cursor-pointer  bg-slate-50 text-red-600 rounded-full">
                    <i className='bx bxs-x-circle text-[30px]'></i>
                </div>
                <h2 className="text-center font-bold lg:text-2xl my-5">Contact</h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-x-4 [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:space-y-3 mb-2 [&>div>input]:w-[260px] lg:[&>div>input]:w-[300px] [&>div>input]:bg-transparent [&>div>input]:border-2 [&>div>input]:border-solid [&>div>input]:border-b-[#2e7055] [&>div>input]:border-x-transparent [&>div>input]:border-t-transparent">
                    <div className="div__interno_contact">
                        <label for="">Full name</label>
                        <input
                            className="imput__contact nombre__contact"
                            type="text"
                            name="Nombre"
                            id="nombre"
                            placeholder="Name"
                        />
                    </div>
                    <div className="div__interno_contact">
                        <label for="">Email</label>
                        <input
                            className="imput__contact correo__contact"
                            type="email"
                            name="Correo"
                            id="email"
                            placeholder="anonimo@hotmail.com"
                        />
                    </div>
                </div>

                <div className="caja__contact contact__caja2 flex flex-col md:flex-row justify-center items-center space-x-4 [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:space-y-3 mb-2 [&>div>input]:w-[260px] lg:[&>div>input]:w-[300px] [&>div>input]:bg-transparent [&>div>input]:border-2 [&>div>input]:border-solid [&>div>input]:border-b-[#2e7055] [&>div>input]:border-x-transparent [&>div>input]:border-t-transparent">
                    <div className="div__interno_contact">
                        <label for="">Phone number</label>
                        <input
                            className="imput__contact asunto__contact"
                            type="number"
                            name="NumeroT"
                            placeholder="Write your number"
                            id="numero"
                        />
                    </div>

                    <div className="div__interno_contact">
                        <label for="">Affair</label>
                        <input
                            className="imput__contact asunto__contact"
                            type="text"
                            name="Asunto"
                            id="reply_to"
                            placeholder="Affair"
                        />
                    </div>
                </div>

                <div className="caja__contact__textarea flex flex-col justify-center md:w-[580px] lg:w-[610px] m-auto">
                    <label for="">Message</label>
                    <textarea
                        className="textarea__contact texto__contact bg-transparent border-2 border-solid border-t-transparent border-x-transparent border-b-[#2e7055]"
                        name="Texto"
                        id="mensaje"
                        rows="2"
                        placeholder="Write your comment"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="boton__submit w-[50%] mb-5 mt-2 bg-[#2e7055] rounded-lg lg:text-lg font-semibold text-white hover:bg-[#4BDB9E] hover:text-black"
                    value="Send Email"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactoModalEn;
