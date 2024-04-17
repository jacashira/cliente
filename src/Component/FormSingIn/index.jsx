import { useRef } from "react"
import { EnvelopeIcon, LockClosedIcon} from '@heroicons/react/24/solid'

const FormSingIn = ( {action} ) => {
    
    const form = useRef(null)


    return(
        <form ref={form} className='flex flex-col gap-1 w-80'>
            <h2>Sing In</h2>

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

            <div className="input-box">
                <LockClosedIcon className='icon w-5 h-5 text-white mx-2' />
                <input type="password" id="password2" name='password2' className='pl-5 bg-transparent' required/>
                <label>Confirm Password</label>
            </div>

            <div className='flex w-full justify-center my-2'>
                <button type='submit' className='w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' id="botonLogin">Sing In</button>
            </div>

            <div className='flex w-full justify-center my-4 font-bold'>
                <label>Already Create Account?</label>
                <label className='text-slate-300 mx-4 hover:cursor-pointer hover:font-bold hover:text-red-500 focus:ring-2 ' onClick={() =>action()} >Login </label>
            </div>
        </form>

    )
}

export default FormSingIn