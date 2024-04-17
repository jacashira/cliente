const Layout = ({ children }) => {

    return (
        <>
            <div className=' w-full h-screen bg-slate-800 backgroud'>
            </div>

            <div className='absolute flex w-full h-screen justify-center items-center top-0 right-0'>
                {children}
            </div>
        </>

    )

}

export default Layout