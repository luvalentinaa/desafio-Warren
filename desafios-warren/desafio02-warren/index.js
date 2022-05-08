let quantidade = prompt('Informe a quantidade de alunos presentes na sala!')
let limiteAlunos = alert(`limite de alunos é :${quantidade}`)

chegou = []
atrasado = 0
noHorario = 0
for (i = 1; i <= quantidade; i++) {
  let tempoChegada = prompt('Informe o tempo de chegada de cada aluno em minutos Onde : negativo(-) é adiantado , zero (0) no horário e positivo (2) atrasada')

  chegou.push(tempoChegada)
}

for(i = 0; i <= chegou.length; i++){
  if(chegou[i] <= 0){
     noHorario++
  }else{
    atrasado++
  }
}
  if(noHorario >= atrasado ){
    alert('Aula normal')
  }else{
    alert('Aula cancelada')
  }
