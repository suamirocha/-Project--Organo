import './style.css'

function ListaSuspensa({label, itens, obrigatorio, valor, aoAlterado}) {

    return (
        <div className='lista-suspensa'>
            <label>
                {label}
            </label>
            <select 
                onChange={(evento => aoAlterado(evento.target.value))}
                required={obrigatorio}
                value={valor}
            >
                <option />
                {itens.map(item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa