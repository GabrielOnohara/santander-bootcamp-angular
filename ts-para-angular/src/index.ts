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

function callToPhone(phone: number | string){
    return phone
}

console.log(callToPhone("123"));
console.log(callToPhone(123));


async function esperar(id:number): Promise<string> {
    return "Felipe"
}
esperar(2).then((data) => {console.log(data);})


interface robot {
    id: number;
    name: string;
}

const bot:robot = {
    id: 1,
    name: "rob"
}

interface robot2 {
    readonly id:number;
    name:string;
}
const bot2:robot2 = {
    id: 1,
    name: "rob"
}
console.table(bot)
console.table(bot2)

class Robo implements robot {
    id: number;
    name: string;

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
}

let myBot:Robo = new Robo(1, 'first')
console.table(myBot);

//classes 
class Character {
    private name: string;
    strength: number;
    skill?: number;

    constructor(name: string, strength: number, skill?: number){
        this.name = name;
        this.strength = strength;
    }
    
    getName():string {
        return this.name
    }

    attack():void {
        console.table(this);
    }
}

let c = new Character("OPA",31)
c.attack()

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

const  numArray = concatArray<number[]>([1], [2, 4])
console.log(numArray);

//saida [1, 2, 4]

//decorators
function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome
class Funcionario {

}

function apiVersion(version :string){
    return (target:any) =>{
        Object.assign(target.prototype), {__version: version}
    }
}
function miniLength(length: number): (target: Api, propertyKey: "name") => void {
    return (target:any, key:string) => {
        let __value = target[key]
        const getter = () => __value;
        const setter = (value:string) => {
            if(value.length < length ){
                throw new Error(`Tamanho mínimo menor do que ${length}`)
            }else{
                __value = value
            }
        }

        Object.defineProperty(target, key, {
            get:  getter,
            set: setter,
        })
    }
}


@apiVersion("1.0")
class Api{
    @miniLength(3)
    name:string;

    constructor(name: string){
        this.name = name
    }
}
const api = new Api("ab");
console.log(api.name);
