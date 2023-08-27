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
            this.disciplinas.splice(idxDisciplinaRemover, 1);
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
    removerAlunoNaDisciplina(aluno, codigo) {
        const disciplinaRemover = this.disciplinas.find(disciplina => disciplina.codigo === codigo);
        if(disciplinaRemover){
        disciplinaRemover.remover(aluno);}

        
    }
   

}