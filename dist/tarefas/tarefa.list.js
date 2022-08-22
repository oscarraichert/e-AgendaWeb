import { TarefaRepositoryLocalStorage } from "./tarefa.repository.local-storage.js";
class TarefaPageList {
    constructor(repositorioTarefas) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const tarefas = this.repositorioTarefas.selecionarTodos();
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        tarefas.forEach(tarefa => {
            const novaLinha = corpoTabela.insertRow();
            Object.entries(tarefa).forEach(([k, v]) => {
                if (k != "id") {
                    const novaCelula = novaLinha.insertCell();
                    novaCelula.innerText = v;
                }
            });
        });
    }
}
new TarefaPageList(new TarefaRepositoryLocalStorage());
