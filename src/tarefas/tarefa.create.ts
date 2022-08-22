import { IPaginaForm } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepository } from "../shared/repositorio.interface.js";
import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.local-storage.js";

class TarefaPaginaCadastro implements IPaginaHTML, IPaginaForm {
    private txtDescricao: HTMLInputElement;
    private btnSalvar: HTMLButtonElement;
    private repositorioTarefas: IRepository<Tarefa>;
    private rdbPrioridade: HTMLInputElement;

    constructor(repositorioTarefas: IRepository<Tarefa>) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
    }

    gravarRegistro(): void {
        this.rdbPrioridade = document.querySelector("input[type='radio']:checked") as HTMLInputElement;

        const prioridade = this.rdbPrioridade.value as Prioridade;

        const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);

        this.repositorioTarefas.inserir(novaTarefa);

        window.location.href = "tarefa.list.html";
    }

    configurarElementos(): void {
        this.txtDescricao = document.getElementById("txtDescricao") as HTMLInputElement;
        this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistro());
    }
}

new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());