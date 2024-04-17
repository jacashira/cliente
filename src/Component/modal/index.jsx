import { useEffect, useState } from "react";
import FormProveedor from "../FormProveedor";

const Modal = ({ setModal,actiom  }) => {

    const [style,SetStyle] = useState('opacity-0')

    useEffect(() => {
        setTimeout(() => {
            SetStyle('w-[35%] h-[35%] flex justify-center items-center rounded-lg border border-slate-400 transition-all duration-500 opacity-1 shadow-lg shadow-black backdrop-blur-lg p-10 ')      
        }, 1000);
    }, [])


    return (
        <div className='absolute flex w-full h-screen justify-center items-center top-0 right-0'>
            <div className={style}>
                <FormProveedor setModal = {setModal} />

            </div>
        </div>

    )

}

export default Modal