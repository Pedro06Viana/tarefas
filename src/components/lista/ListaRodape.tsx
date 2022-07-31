import ListaTarefas from "../../model/ListaTarefas";
import ListaBotao from "./ListaBotao";

interface ListaRodapeProps {
    tarefas: ListaTarefas
    mudou: (novaTarefa: ListaTarefas) => void
}

export default function ListaRodape(props: ListaRodapeProps) {

    const { tarefas, mudou } = props

    /* hidden lg:inline 
    * O taillwind usa a filosofia mobile first
    * ao colocar uma class ele atribui essa class desde o tamanho mais pequeno até ao maior
    * hidden -> esconde no pequeno
    * lg: inline vai mostrar a partir de um ecra large 1024
    */
    function renderQuantidade() {
        return (<>
            <span className="text-gray-300 hidden lg:inline">
                {tarefas.quantidade}
                {tarefas.quantidade === 0 ? ' Nenhuma Tarefa Encontrada' : tarefas.quantidade === 1 ? ' Tarefa Encontrada' : ' Tarefas Encontradas'}
            </span>
            <span className="flex-1 hidden lg:inline"></span>
        </>)
    }

    function renderBotaoFiltro() {
        return (<>
            <ListaBotao selecionado={tarefas.exibirTodas()} onClick={() => mudou(tarefas.removerFiltros())}
                className="hidden md:inline">
                Todas
            </ListaBotao>
            <ListaBotao selecionado={tarefas.exibirAtivas()} onClick={() => mudou(tarefas.filtrarAtivas())}
                className="mx-4">
                Ativas
            </ListaBotao>
            <ListaBotao selecionado={tarefas.exibirConcluidas()} onClick={() => mudou(tarefas.filtrarConcluidas())}>
                Concluídas
            </ListaBotao>
        </>)
    }

    function renderExcluir() {
        return (<>
            <span className="flex-1"></span>
            <ListaBotao onClick={() => mudou(tarefas.excluirConcluidas())}>
                Excluir <span className="hidden md:inline">Concluídas</span>
            </ListaBotao>
        </>)
    }

    return (
        <li className="flex p-5">
            <>
                {renderQuantidade()}
                {renderBotaoFiltro()}
                {renderExcluir()}
            </>
        </li>
    );
}