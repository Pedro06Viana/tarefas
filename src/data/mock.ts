import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";

const tarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, "Estudar Next"),
    Tarefa.criarConcluida(2, "Trabalhar"),
    Tarefa.criarAtiva(3, "Comer a tua prima")
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)