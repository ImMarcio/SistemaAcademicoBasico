class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }
    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisaPorCodigo(codigo);
        if (disciplinaPesquisada) {
            throw new Error("Disciplina já cadastrada!");
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    inserirAlunoNaDisciplina(aluno, codigo) {
    
        this.repositorio.inserirAlunoNaDisciplina(aluno, codigo);

    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    pesquisaPorCodigo(codigo) {
        return this.repositorio.listar().find(disciplina => disciplina.codigo === codigo);
    }

    listar() {
        return this.repositorio.listar();
    }


}