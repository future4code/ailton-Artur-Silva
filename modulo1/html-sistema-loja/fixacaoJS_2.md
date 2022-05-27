```function calculaPrecoTotal(quantidade) {

let menosDeUmaDuzia = 1.30
let umaDuzia = 1
let total 

if (quantidade >= 12){
  total = umaDuzia * quantidade
  
}else {
  total = menosDeUmaDuzia * quantidade
}
return total
}```