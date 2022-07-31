import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SelecaoProps {
    valor: boolean
}

export default function Selecao(props: SelecaoProps) {

    const gradient = props.valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

    return (
        <div className={`
            flex justify-center items-center 
            h-8 w-8 rounded-full 
            cursor-pointer
            border border-gray-400 text-xl text-white
            ${gradient}
        `}>
            {props.valor ? <FontAwesomeIcon size='1x' icon={faCheck} /> : ''}
        </div>
    )
}