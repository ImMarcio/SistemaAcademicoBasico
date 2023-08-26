class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(Disciplina) {
        this.disciplinas.push(Disciplina);
    }
    remover(codigo) {
        const idxDisciplinaRemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (idxDisciplinaRemover > -1) {
            this.idxDisciplinaRemover.splice(idxDisciplinaRemover, 1);
        }
    }
    listar() {
        return this.disciplinas
    }

    inserirAlunoNaDisciplina(aluno, codigo) {
        const disciplinaParaInserir = this.disciplinas.find(disciplina => disciplina.codigo === codigo);
        if (disciplinaParaInserir)
            disciplinaParaInserir.inserir(aluno);


    }
    removerAlunoNaDisciplina(matricula, codigo) {
        const disciplinaDoAluno = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (disciplinaDoAluno > -1) {
            const alunoRemover = this.disciplinaDoAluno.findIndex(aluno => aluno.matricula === matricula);
            if (alunoRemover > -1) {
                this.disciplinaDoAluno.splice(alunoRemover, 1);
            }
        }
    }

}