const Action = ({title, action}) => {

    return (
        <button onClick={()=>action()}> {title}</button>
    )
}

export default Action