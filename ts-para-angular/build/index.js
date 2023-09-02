"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let b = false;
let s = "Gabriel";
let n = 30;
let a = 1.7;
let nulo = null;
let indef = undefined;
let q = 3;
q = "oi";
let v;
let o = {
    tipo: "Object"
};
let mo = {
    nome: "mo",
    id: 3,
};
let dados = [];
dados.push(3);
dados.unshift(2);
console.log(dados);
let dados2 = [3, 4, 5];
dados2.push(6);
dados2.shift();
dados2.pop();
console.log(dados2);
let infos = [1, 'um'];
let tuplas = ["agua", 1, false];
let d = new Date();
console.log(d);
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 2));
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("123"));
console.log(callToPhone(123));
function esperar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Felipe";
    });
}
esperar(2).then((data) => { console.log(data); });
const bot = {
    id: 1,
    name: "rob"
};
const bot2 = {
    id: 1,
    name: "rob"
};
console.table(bot);
console.table(bot2);
class Robo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myBot = new Robo(1, 'first');
console.table(myBot);
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
    }
    getName() {
        return this.name;
    }
    attack() {
        console.table(this);
    }
}
let c = new Character("OPA", 31);
c.attack();
