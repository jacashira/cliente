import ReactPaginate from 'react-paginate'
import './style.css'

const Pagination = ({perPage, pageNumber, onChageSizeAction, onChangePage}) => {
    return (
        <div className='flex justify-center text-black items-center bg-slate-300 mx-2 rounded-lg'>
            <div className='mx-2'>
                <label htmlFor='size' >Tamaño de pagina: </label>
                <select id='size' className='rounded-lg m-2 px-4 py-1' value={perPage} onChange={() => onChageSizeAction(event.target.value)}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <div className='mx-2'>
                <ReactPaginate
                previousLabel={'anterior'}
                nextLabel={'siguiente'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageNumber} // Adjust this based on your total number of pages
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(data) => onChangePage(data)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}/>
            </div>
        </div>
)
}

export default Pagination