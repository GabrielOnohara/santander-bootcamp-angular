type heroi = {
    vulgo: string;
    name: string;
}
console.log("Olá mundo!")

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
    
}

printaObjeto({name: 'Bruce Wayne', vulgo: 'Batman'})