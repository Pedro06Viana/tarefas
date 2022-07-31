import { useState } from "react";
import Tarefa from "../../model/Tarefa";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {

    const [descricao, setDescricao] = useState("")

    function criarNovaTarefa() {
        if (descricao?.trim().length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescricao('')
        }
    }

    return (
        <div className="flex flex-1 justify-center">
            <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
                className={`
                    text-2xl
                    py-2 px-3 w-1/2
                    rounded-lg border-2
                    border-purple-300 focus:outline-none
                    focus:ring-2 focus:ring-purple-600
                `}
            />
            <button onClick={() => criarNovaTarefa()}
                className={`
                    ml-3 px-5 py-4 rounded-lg
                    bg-purple-600 text-white text-xl
                    focus:outline-none
                `}
            >
                <FontAwesomeIcon size='lg' icon={faPlus} />
            </button>
        </div>
    );
}