
for (let i = 12; i < 1000; i++) {
  let b = i.toString()
    b = b.split('').reverse(!0 ).join('')
  if(( i % 2) === 0 && ( b % 2)!== 0 ){
    
     let result = Number( i)+ Number(b)
    console.log(i + ' , ' + b + ' = ' + result)

  }

}
