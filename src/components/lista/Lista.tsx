import ListaTarefas from "../../model/ListaTarefas"
import ListaItem from "./ListaItem"
import ListaRodape from "./ListaRodape"

interface ListaProps {
    tarefas: ListaTarefas
    mudou: (tarefas: ListaTarefas) => void
}

export default function Lista(props: ListaProps) {

    const { tarefas } = props

    function renderTarefas() {
        return tarefas.itens.map(tarefa => {
            return (
                <ListaItem key={tarefa.id} valor={tarefa.descricao} concluido={tarefa.concluida}
                    alterarStatus={() => {
                        const tarefaAlterada = tarefa.alterarStatus()
                        const novaLista = tarefas.modificarTarefa(tarefaAlterada)
                        props.mudou(novaLista)
                    }} />
            )
        })
    }
    return (
        <div className={`
                relative
                flex w-3/5 items-start
            `}
        >
            <ul className={`
                    absolute -top-14
                    w-full list-none bg-white shadow-lg rounded-lg
                `}
            >
                {renderTarefas()}
                <ListaRodape tarefas={tarefas}
                    mudou={props.mudou}
                />
            </ul>
        </div>
    )
}