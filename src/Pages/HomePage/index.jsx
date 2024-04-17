import { useEffect, useState } from "react";
import Header from "../../Component/Header";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [style,SetStyle] = useState('opacity-0')
    const [saludo, setSaludo] = useState('Bienvenido Candidato Jorge Castorena')
    const [version, setVersion] = useState('Version 1.0.3')

    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            SetStyle('w-[40%] h-[80%] flex flex-col justify-start items-center  rounded-lg transition-all duration-800 opacity-1 shadow-lg shadow-black backdrop-blur-lg border')      
        }, 1000);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            SetStyle('w-[40%] h-[80%] flex flex-col justify-start items-center  rounded-lg transition-all duration-800 opacity-1 shadow-lg shadow-black backdrop-blur-lg border')      
        }, 1000);
    }, [])

  
    const proveedores = () => {
        //navigate('/proveedores')
    }

    return (
        <div className={style}>
            <Header />
            <div className="h-full w-full flex flex-col justify-around items-center text-white text-3xl ">
                <div className="w-[200px] h-[300px] backgroud2 border ">home</div>
                <label htmlFor="">{saludo}</label>
                <label htmlFor="">{version}</label>
            </div>
            <div className="m-10">
                <button className='w-[150px] text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={proveedores()}>Continuar</button>
            </div>

        </div>
    )
}

export default HomePage