const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const listaAlunosMedias = [alunos, medias]

function exibeNotaAluno(aluno) {
  if (listaAlunosMedias[0].includes(aluno)) {
    const [alunos, medias] = listaAlunosMedias

    const index = alunos.indexOf(aluno)

    const mediaAluno = medias[index]

    console.log(`${aluno} tem a média ${mediaAluno}`)
  } else {
    console.log('Aluno não encontrado.')
  }
}

exibeNotaAluno('João')
