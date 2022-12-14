import { IRepositorySerializavel } from "../shared/repositorio-serializavel.js";
import { IRepository } from "../shared/repositorio.interface.js";
import { Tarefa } from "./tarefa.model.js";

export class TarefaRepositoryLocalStorage implements IRepository<Tarefa>, IRepositorySerializavel {
    private readonly localStorage: Storage;

    private readonly tarefas: Tarefa[];

    constructor() {
        this.localStorage = window.localStorage;

        this.tarefas = this.selecionarTodos();
    }
    public gravar(): void {
        const tarefasJsonString = JSON.stringify(this.tarefas);

        this.localStorage.setItem("tarefas", tarefasJsonString);
    }

    public inserir(registro: Tarefa): void {
        this.tarefas.push(registro);

        this.gravar();
    }

    public selecionarTodos(): Tarefa[] {
        const dados = this.localStorage.getItem("tarefas");

        if (!dados) {
            return [];
        }

        return JSON.parse(dados);
    }
}