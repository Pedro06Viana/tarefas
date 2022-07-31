
export default class Tarefa {
    #id: number
    #descricao: string
    #concluida: boolean

    constructor(id: number, descricao: string, concluida = false) {
        this.#id = id
        this.#descricao = descricao
        this.#concluida = concluida
    }

    static criarAtiva(id: number, descricao: string) {
        return new Tarefa(id, descricao)
    }

    static criarConcluida(id: number, descricao: string) {
        return new Tarefa(id, descricao, true)
    }

    concluir() {
        return Tarefa.criarConcluida(this.#id, this.descricao)
    }

    ativar() {
        return Tarefa.criarAtiva(this.#id, this.descricao)
    }

    alterarStatus() {
        return this.concluida ? this.ativar() : this.concluir()
    }

    get id() {
        return this.#id
    }
    get descricao() {
        return this.#descricao
    }
    get concluida() {
        return this.#concluida
    }

    get ativa() {
        return !this.concluida
    }
}