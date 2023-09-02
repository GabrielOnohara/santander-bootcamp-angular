let b:boolean = false;
let s:string = "Gabriel";
let n:number = 30;
let a:number = 1.7;

let nulo: null = null;
let indef: undefined = undefined;

let q:any = 3
q = "oi"

let v:void

let o:object = {
    tipo: "Object"
}


type MeuObjetto = {
    nome: string;
    id: number;
}

let mo:MeuObjetto = {
    nome:"mo",
    id: 3,
}

let dados: number[] = []
dados.push(3)
dados.unshift(2)
console.log(dados);


let dados2: Array<number> = [3, 4, 5]
dados2.push(6)
dados2.shift()
dados2.pop()
console.log(dados2);

let infos: (string | number)[] = [1, 'um']
let tuplas: [string, number, boolean] = ["agua", 1, false]

let d:Date = new Date();
console.log(d);

function addNumber(x:number , y:number):number{
    return x + y
}

console.log(addNumber(1,2));
