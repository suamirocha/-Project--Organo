import './style.css'

function Botao({texto}) {
    return(
        <button 
        className='botao'>
            {texto}
        </button>
    )
}

export default Botao