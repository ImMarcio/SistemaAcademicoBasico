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

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(aluno, codigo) {
        const alunoPesquisado = this.pesquisaAlunoNaDisciplina(aluno.matricula);
        if (alunoPesquisado) {
            throw new Error("Aluno já está cadastrado nessa disciplina!")
        }  
        this.repositorio.inserirAlunoNaDisciplina(aluno, codigo);

    }

    removerAlunoNaDisciplina(aluno, codigo) {

        this.repositorio.removerAlunoNaDisciplina(aluno, codigo);
       

    }



    pesquisaPorCodigo(codigo) {
        return this.repositorio.listar().find(disciplina => disciplina.codigo === codigo);
    }
    pesquisaAlunoNaDisciplina(matricula) {
        const disciplinas = this.repositorio.listar();

        const aluno = disciplinas.forEach(disciplina => disciplina.listar().find(alunoDisciplina => alunoDisciplina.matricula === matricula));
        return aluno;

    }

    listar() {
        return this.repositorio.listar();
    }


}