const prompt = require('prompt-sync')();
let cssList = [];
let running = true;

while (running) {
    console.log('Para finalizar digite "SAIR".')
    var item = prompt("Digite a propriedade desejada: ").toLocaleLowerCase();
    if (item == "sair") {
        running = false;
    } else {
        var count = 1;

        cssList.push(item)
        cssList.sort()
        console.clear()
        console.log("--------------Lista de propriedades CSS----------------");
        cssList.forEach((item) => {
            console.log(count + " - " + item);
            count += 1;
        });
        console.log("_______________________________________________________");
    };
};