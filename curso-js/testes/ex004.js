// numero formatado com um valor monetário

var n1 = 12345
var formatado = (n1).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})