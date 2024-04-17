import { useEffect,  useState } from 'react'
import FormLogin from '../../Component/FormLogin'
import FormSingIn from '../../Component/FormSingIn'

const  Login = () => {

    const [style,SetStyle] = useState('opacity-0')
    const [singIn,setSingIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            SetStyle('w-[40%] h-[50%] flex justify-center items-center rounded-lg border border-slate-400 transition-all duration-1000 opacity-1 shadow-lg shadow-black backdrop-blur-lg p-10 ')      
        }, 1000);
    }, [])

    
    const renderLogin = () => {
        return (<FormLogin action={handleClick}/>)
    }

    const renderSingIn = () => {
        return (<FormSingIn action={handleClick}/>)
    }

    const handleClick = () => {
        setSingIn(!singIn)
    }



    const renderContent = () => !singIn ? renderLogin() : renderSingIn()



    return (
        <>
            <div className=' w-full h-screen bg-slate-800 backgroud'>
            </div>

            <div className='absolute flex w-full h-screen justify-center items-center top-0 right-0'>
                <div className={style}>

                <div className="logreg-box">
                    <div className="form-box login">
                        {renderContent()}
                    </div>
                </div>


                </div>
            </div>
        </>
    )

}

export default Login
