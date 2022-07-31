import Tarefa from "./Tarefa"
import TipoFiltro from "./TipoFiltro"


export default class ListaTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: TipoFiltro

    constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
        this.#todas = todas
        this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM
    }

    get itens() {
        return this.aplicarFiltroEm(this.#todas)
    }

    get quantidade() {
        return this.itens.length
    }

    get filtroUtilizado() {
        return this.#filtroUtilizado
    }

    modificarTarefa(tarefaModificada: Tarefa): ListaTarefas {
        const todas = this.#todas.map(tarefa => {
            return tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa
        })
        return new ListaTarefas(todas, this.filtroUtilizado)
    }

    adicionarTarefa(novaTarefa: Tarefa): ListaTarefas {
        /* const todas = [...this.#todas] cria uma nova instancia */
        const todas = [...this.#todas]
        todas.push(novaTarefa)
        return new ListaTarefas(todas, this.filtroUtilizado)
    }

    excluirConcluidas(): ListaTarefas {
        const soAtivas = this.#todas.filter(tarefa => tarefa.ativa)
        return new ListaTarefas(soAtivas, TipoFiltro.NENHUM)
    }

    filtrarAtivas(): ListaTarefas {
        if (!this.exibirAtivas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.ATIVAS)
        } else {
            return this
        }
    }

    filtrarConcluidas(): ListaTarefas {
        if (!this.exibirConcluidas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.CONCLUIDAS)
        } else {
            return this
        }
    }

    removerFiltros(): ListaTarefas {
        if (!this.exibirTodas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.NENHUM)
        } else {
            return this
        }
    }

    private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {
        if (this.exibirAtivas()) {
            return this.aplicarFiltroAtivas(tarefas)
        } else if (this.exibirConcluidas()) {
            return this.aplicarFiltroConcluidas(tarefas)
        } else {
            return [...tarefas]
        }
    }

    private aplicarFiltroAtivas(tarefas: Tarefa[]): Tarefa[] {
        return tarefas.filter(tarefa => tarefa.ativa)
    }

    private aplicarFiltroConcluidas(tarefas: Tarefa[]): Tarefa[] {
        return tarefas.filter(tarefa => tarefa.concluida)
    }

    exibirTodas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.NENHUM
    }

    exibirAtivas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.ATIVAS
    }

    exibirConcluidas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
    }

}