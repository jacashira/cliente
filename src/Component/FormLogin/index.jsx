import { useRef,useContext } from "react"
import { FrontendContext } from '../../Context'
import { EnvelopeIcon, LockClosedIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
import { PostAPI, PostLoginAPI } from '../Api'

const FormLogin = ( {action} ) => {
    
    const context = useContext(FrontendContext)
    const form = useRef(null)

    const  handleClick = (e) => {
        console.log('--->',e)
        e.preventDefault()
        console.log('--->')

        var url = context.prefixApi + 'login'
        console.log('---->********'+url)
        const formData = new FormData(form.current)
		const userData = {
            username: formData.get('username'),
			password: formData.get('password')
		}
        console.log(userData)
        let login = PostLoginAPI(url,userData)
        console.log(login)

    }

    return(
        <form ref={form} className='flex flex-col gap-1 w-80'>
            <h2>Login</h2>

            <div className="input-box">
                <EnvelopeIcon className='icon w-5 h-5 text-white mx-2'/>
                <input type="text" id="username" name='username' className='pl-5 bg-transparent' required/>
                <label>Mail</label>
            </div>

            <div className="input-box">
                <LockClosedIcon className='icon w-5 h-5 text-white mx-2' />
                <input type="password" id="password" name='password' className='pl-5 bg-transparent' required/>
                <label>Password</label>
            </div>

            <div className='flex w-full justify-center my-2'>
                <button type='submit' className='w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' id="botonLogin" onClick={(e) => handleClick(e)}>Login</button>
            </div>

            <div className='flex w-full justify-center my-4 font-bold'>
                <label>New Here?</label>
                <label className='text-slate-300 mx-4 hover:cursor-pointer hover:font-bold hover:text-red-500 focus:ring-2 ' onClick={() => action()}>Sing In </label>
            </div>
        </form>

    )
}

export default FormLogin