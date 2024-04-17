import { useNavigate } from 'react-router-dom';
import Action from "../Action"

const Header = () => {
    const navigate = useNavigate()

    const action = () => {
        navigate('/')
    }

    const action2 = () => {
        navigate('/proveedores')
    }

    return (
        <div className="flex w-full h-[100px] border bg-slate-300 opacity-1 justify-between">

            <div className="flex h-full text-slate-600 justify-center items-center text-4xl pl-5">
                <img src="" alt="" />
                <p>e-Commerce Gapsi</p>
           </div>
           <div className="flex justify-center items-center mx-4 text-lg m-4 p-2 font-semibold gap-8" >
                <Action title={'Inicio'} action={action}/>
                <Action title={'Proveedores'} action={action2}/>
           </div>

        </div>
    )
}
export default Header