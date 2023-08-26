class Disciplina{
    constructor(codigo, nome){
        this._codigo = codigo;
        this._nome = nome;
        this.alunos = [];
    }

    get codigo(){
        return this._codigo
    }
    
    set codigo(codigoNovo){
        this._codigo = codigoNovo;
    }

    get nome(){
        return this._nome;
    }

    set nome(nomeNovo){
        this._nome = nomeNovo;
    }

    inserir(aluno){
        this.alunos.push(aluno);
    }

    remover(matricula){
       const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if(indxAlunoARemover > -1){
            this.alunos.splice(indxAlunoARemover, 1);
        }

    }

    listar(){
        return this.alunos
    }

  



}