const ProveedoresTable =({ items })  => {

    let isDarkRow = false
    const getRowColor= () =>{
        if(isDarkRow) {
            isDarkRow = false
            return 'grid grid-cols-5 text-sm text-white text-left justify-center bg-slate-500 h-10 border pt-2 pl-10 gap-4'
        } else {
            isDarkRow = true
            return 'grid grid-cols-5 text-sm text-white text-left justify-center bg-slate-400 h-10 border pt-2 pl-10 gap-4'
        }
    }


    const renderContent = (item,style) => {
        return (
            <tr key={item.id} className={style}>
                <td className="" >{item.id}</td>
                <td >{item.name}</td>
                <td className="pl-4">{item.razon_social}</td>
                <th >Dirección</th>

            </tr>
        )
    }

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex justify-center overflow-hidden items-start overflow-y-auto w-auto h-full bg-slate-300 mx-2">
                <table className="flex flex-col mt-5">
                    <thead className="grid rounded-t-md text-lg text-white bg-slate-600 py-2">
                        <tr className="grid grid-cols-5 text-left pl-10 gap-4">
                            <th>#</th>
                            <th >Nombre de Proveedor</th>
                            <th>Razon Social</th>
                            <th >Dirección</th>
                            <th >Accion</th>
                        </tr>
                    </thead>
                    <tbody className="grid text-slate-700">
                        {
                           items && items?.map((item) => renderContent(item,getRowColor()))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProveedoresTable
