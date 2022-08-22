class Index {
    constructor() {
        this.configurarElementos();
    }
    configurarElementos() {
        this.btnCadastrar = document.getElementById("btnCadastrar");
        this.btnCadastrar.addEventListener("click", () => console.log('mim clicou'));
    }
}
new Index();
export {};
