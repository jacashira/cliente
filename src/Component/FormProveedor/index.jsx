import { useRef,useContext } from "react"
import { FrontendContext } from '../../Context'

import { PostAPI, PostLoginAPI } from '../Api'
const FormProveedor = ( {action, setModal} ) => {
    
    const context = useContext(FrontendContext)

    const form = useRef(null)

    const handleClickSave = (e) => {
        e.preventDefaul()
    }
    
    const sub = (e) => {
        e.preventDefault()

        const formData = new FormData(form.current)
   		const proveedorData = {
            name: formData.get('name'),
			razon_social: formData.get('razon'),
            // direccion: formData.get('direccion')
		}
        setModal(false)
        console.log(proveedorData)

        let url = context.prefixApi + 'proveedores'
        const rest = PostAPI(url,proveedorData)
        console.log(rest)

    }

    const onCancel = () => {
        console.log('test');
    }

    return(
        <div className="w-full h-full  ">
            <form ref={form} className='flex flex-col w-full h-full gap-3 items-start justify-start' onSubmit={sub}>
                <h2 className="">Proveedor Nuevo</h2>

                <div className="flex flex-col w-full h-full justify-center gap-4">
                    
                    <div className="w-full" >
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name='name' className="ml-12"  required/>
                    </div>
                    <div className=" w-full">
                        <label>Razon Social:</label>
                        <input type="text" id="razon" name='razon' className="ml-6"  required/>
                    </div>
                    <div className=" w-full">
                        <label>Dirección:</label>
                        <input type="text" id="direccion" name='direccion' className="ml-12"  required/>
                    </div>
                </div>

                <div className='flex w-full justify-center gap-2 my-2'>
                    <button type='submit' className='w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' id="botonLogin">Guardar</button>
                    <p className='w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={onCancel()}>Cancelar</p>
                </div>

            </form>
        </div>
    )
}

export default FormProveedor