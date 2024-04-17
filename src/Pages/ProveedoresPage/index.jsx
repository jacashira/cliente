import { useContext, useEffect, useState } from "react";
import Header from "../../Component/Header";
import ProveedoresTable from "../../Component/ProveedoresTable";
import { FrontendContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
import Pagination from "../../Component/Pagination";
import Modal from "../../Component/modal";
import { toast } from 'react-toastify';
import { GetAPI2 } from "../../Component/Api";

const ProveedoresPage = () => {

    const context = useContext(FrontendContext)
    const [proveedores,setProveedores] = useState(null)
    const [modal,setModal] = useState(false)
    const [style,SetStyle] = useState('opacity-0')

    const  [currentPage, setCurrentPage] = useState(0)
    const  [perPage, setPerPage] = useState(10)
    const  [pageNumber, setPageNumber] = useState(5)
    const  [currentPageData, setCurrentPageData] = useState()


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected)
    }
    
    const handlePageSizeChange = (size) => {
        setPerPage(size)
        setCurrentPage(0)
    }

    useEffect(() => {
        refresh()
    },[perPage])
    
    useEffect(() => {
        refresh()
    },[currentPage])

    useEffect(() => {
        refresh()
    }, [])

    const refresh = async () =>{

        SetStyle('w-[95%] h-[90%] flex flex-col justify-start items-center  rounded-lg transition-all duration-800 opacity-1 shadow-lg shadow-black backdrop-blur-lg border')      
        try {
            let url = context.prefixApi + 'proveedores'
            const items = await GetAPI2(url)
            console.log(items);
            setProveedores(items)
            let offSet = currentPage * perPage
            setTimeout(() => {
                setCurrentPageData(items?.slice(offSet, offSet + perPage))
                if(items)
                    setPageNumber(Math.ceil(items.length / perPage))
            }, 300)
        } catch (error) {
            console.error('Error fetching data:', error);
        } 

    }

    useEffect(() => {
    }, [proveedores])


    const newreg = () => {

        setModal(true)
    }

    return(
        <div className={style}>
            <Header />
            <div className=" w-full flex flex-col justify-around items-start text-white text-3xl border border-b-2 p-4 ">
                <h3>Proveedores</h3>
            </div>
            <div className=" w-full h-full flex flex-col justify-around items-start text-white text-3xl">
                <ProveedoresTable items={currentPageData} setModal={setModal}/>
            </div>
            <div className=" w-full flex flex-col justify-end items-end text-white text-3xl " onClick={() => newreg()}>
                <button className='w-[40px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full m-4' >
                    <PlusIcon className="w-6 h-6 text-white font-bold" />
                </button>
            </div>
            <div className=" w-full flex flex-col justify-around items-center text-white m-2 rounded-lg">
                <Pagination perPage={perPage} pageNumber={pageNumber} onChageSizeAction={handlePageSizeChange} onChangePage={handlePageChange}/>
            </div>
            {/* {renderModal()} */}
            { modal && (<Modal setModal={setModal} /> )}
            
        </div>
    )
}

export default ProveedoresPage