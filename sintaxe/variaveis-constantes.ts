//CORRETO
let funcionario: string = "Eduardo";
//CORRETO
let funcionario2: string = "Eduardo";
//CORRETO
let funcionario_2: string = "Eduardo";
//CORRETO
let _funcionario: string = "Eduardo";
//ERRADO - NAO PODE COMEÇAR COM NUMERO
let 2funcionario: string = "Eduardo";
//ERRADO - NOME DE VARIAVEL COM ESPAÇO
let funcionario 2: string = "Eduardo";
//ERRADO - NOME DE VARIAVEL COM ' - ' (TRAÇO)
let funcionario-2: string = "Eduardo";
//ERRADO - NOME DA VARIAVEL COM SIMBOLO
let funcionario@: string = "Eduardo";

//a variavel pode ter um tipo sendo declarada por inferencia, 
//ou seja, ele observa o valor e defini seu tipo de acordo com ele:
let inferencia = "declarado por inferencia";

//a variavel pode ter um tipo sendo declarada explicidatamente:
let explicito : string = "declarado explicitamente";

//number
let id = 1;

//string
let nome = "Renan";

//string
let idade = "20";

//a declaração deve ser feita antes da execução
//Variável declarada
let x;
 
//Valor atribuído
x = 10;

//Declaração e atribuição de valor ao mesmo tempo
let b = 10;

//Variável declarada e atribuída
let z = 10;
 
//Variável utilizada
//y não foi declarado e sim x
console.log(y);

const nome2: string = "Renan";
const aceleracaoGravidade: number = 9.81;
 
//Aqui ocorrerá um erro de compilação, pois não é possível mudar o valor de uma constante. 
aceleracaoGravidade = 9.8;

//Isso está correto
const aceleracaoGravidade = 9.81

//Isso está incorreto, o valor deve ser definido no momento da declaração
const aceleracaoGravidade;
aceleracaoGravidade = 9.81;

// O TypeScript recomenda que a palavra-chave const seja utilizada 
// sempre que possível, a menos que o valor da variável precise 
// mudar. Nesse caso usamos let

//Esse valor nunca será alterado pela aplicação
const aceleracaoGravitacional: number = 9.81;
 
//Esse valor poderá ser alterado pela aplicação
let valocidadeAtual: number = 0;
 
valocidadeAtual = 100;

