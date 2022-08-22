import { EntidadeBase } from "./entidade.model.js";

export interface IRepository<T extends EntidadeBase> {

    inserir(registro: T): void;
    selecionarTodos(): T[];
}