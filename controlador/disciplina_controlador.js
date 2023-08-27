class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }
    inserir() {
        const codigoElemento = document.querySelector('#codigo');
        const nomeElemento = document.querySelector("#nomeDisciplina");
        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);
        const listaDisciplinas = document.querySelector('#listaDisciplinas')
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinas)
        }

    }

    inserirAlunoNaDisciplina(){
        const matriculaAluno = document.querySelector('#matriculaAlunoInserir');
        const disciplinaCodigo = document.querySelector('#CodigoDisciplinaInserir');
        const aluno =  alunoControlador.pesquisarPorMatricula(matriculaAluno.value);
        this.servico.inserirAlunoNaDisciplina(aluno, disciplinaCodigo.value);

    }
    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
    listar(){
        return this.servico.listar();}

    listarDisciplinas(){
       const listaAlunosMatriculados = document.querySelector("#listaAlunosMatriculados");
        this.servico.listar().forEach(disciplina => {
            const disciplinaElemento = document.createElement("li");
            disciplinaElemento.textContent = `Disciplina: ${disciplina.nome} \n Alunos: `;
             disciplina.listar().forEach(aluno => disciplinaElemento.textContent += ` \n ${aluno.nome} `)
            listaAlunosMatriculados.appendChild(disciplinaElemento);
        });
        
      
       
    }
    

    pesquisaPorCodigo(codigo){
        return this.servico.pesquisaPorCodigo(codigo);
    }

}


