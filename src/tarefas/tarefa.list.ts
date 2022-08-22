import { isPropertyName } from "../../../../../node_modules/typescript/lib/typescript.js";
import { Guid } from "../shared/guid.model.js";
import { IPageList } from "../shared/page.list.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepository } from "../shared/repositorio.interface.js";
import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.local-storage.js";

class TarefaPageList implements IPaginaHTML, IPageList {
    tabela: HTMLTableElement;

    constructor(private repositorioTarefas: IRepository<Tarefa>) {
        this.configurarElementos();
        this.atualizarTabela();
    }

    public configurarElementos(): void {
        this.tabela = document.getElementById("tabela") as HTMLTableElement;
    }

    atualizarTabela(): void {
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