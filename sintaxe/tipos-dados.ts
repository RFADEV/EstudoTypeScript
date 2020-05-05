//boolean
let powerYourDreams : boolean = true;

//number
let decimal :   number = 2001;
let hexadecimal:number = 0x7d5;//2005
let binario :   number = 0b111111011101; //2013
let octal :     number = 0o3744;//2020

//string
let cor:string = "green";
let texto:string = `Sala de TypeScript`;
let frase:string = `Seja bem vindo a nova ${texto}`;
console.log(frase);

//array
let numeros:number[] = [3,6,0];
let numeros2: Array<number> = [3,6,0];

//Tuple
//defini um variavel do tipo array com tamanho e tipo ja definido 
//para cada indice
let x: [string,number];
//correto
x=["Seamus",10];
//erro - Pois o primeiro parâmetro é number e o segundo string
x=[10,"Seamus"];//erro

//Enum
//permite dar nomes mais amigáveis a valores numéricos
//Cada item representa um índice. Vermelho = 0, Verde = 1, Azul = 2
enum Cor {Vermelho,Verde,Azul};
//o valor da variável corFundo será '1'. 
let corFundo: Cor = Cor.Verde;

//Any
//Valores que nao conhecemos o tipo ainda
let naoidentificado:any = 4;
naoidentificado = "Agora é string";
naoidentificado = false; //neste momento ela vira um boolean

//Void
// O tipo void pode ser considerado o oposto do any,
// pois ele se abstém de qualquer tipo
function aviso():void {
    console.log("Mensagem de aviso!");
}

//Null e Undefined
//possuem tipos associados a eles e são chamados pelos seus respectivos nomes
let u:undefined = undefined;
let n:null = null;

//Never
// O tipo never representa o tipo dos valores que nunca acontecem. 
// Por exemplo, never é o tipo de retorno para a expressão de uma função 
// ou de uma arrow function, que sempre lança uma exceção ou uma que 
// nunca retorna, como um loop infinito por exemplo.
// O tipo never é um subtipo de todos os tipos e pode ser associado a 
// cada um deles, entretanto, nenhum dos tipos, incluindo o tipo any, 
// é um subtipo de never e nem pode ser associado a ele, com exceção 
// do próprio never.

// Funções que retornam 'never' devem possuir um final inalcançável
function error(message: string): never {
    throw new Error(mensagem);
}

// O tipo inferido é never
function fail() {
    return error("Algo falhou");
}

// Funções que retornam 'never' devem possuir um final inalcançável
function infiniteLoop(): never {
    while (true) {
    }
}

//Object
declare function create(o: object | null): void;
  
create({ prop: 0 }); // OK
create(null); // OK
  
create(42); // Erro
create("string"); // Erro
create(false); // Erro
create(undefined); // Erro