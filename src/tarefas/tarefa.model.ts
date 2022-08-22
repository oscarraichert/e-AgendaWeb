import { Prioridade } from "./prioridade.enum.js";
import { EntidadeBase } from "../shared/entidade.model.js";

export class Tarefa extends EntidadeBase {
    public descricao: string;
    public dataCriacao: string;
    public status: "Concluída" | "Em Andamento";
    public prioridade: Prioridade;

    constructor(descricao: string, prioridade: Prioridade) {
        super();
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.dataCriacao = new Date().toLocaleDateString();
        this.status = "Em Andamento";
    }
}