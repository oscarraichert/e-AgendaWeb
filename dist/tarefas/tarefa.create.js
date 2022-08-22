import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.local-storage.js";
class TarefaPaginaCadastro {
    constructor(repositorioTarefas) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
    }
    gravarRegistro() {
        this.rdbPrioridade = document.querySelector("input[type='radio']:checked");
        const prioridade = this.rdbPrioridade.value;
        const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);
        this.repositorioTarefas.inserir(novaTarefa);
        window.location.href = "tarefa.list.html";
    }
    configurarElementos() {
        this.txtDescricao = document.getElementById("txtDescricao");
        this.btnSalvar = document.getElementById("btnSalvar");
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistro());
    }
}
new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());
