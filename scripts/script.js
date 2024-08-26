const output = document.querySelector(".output__text"); 
const input = document.querySelector(".input__texto");
const div = document.getElementById("placeholder")

let matriz= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function buttonEncriptar() {
    output.value = encriptar(input.value);
    cambiarContenido();
}

function buttonDesencriptar() {
    output.value = desencriptar(input.value);
    cambiarContenido();
}

function cambiarContenido(){
    var placeholder = document.querySelector(".output__placeholder");
    var result = document.querySelector(".output__result");
    placeholder.style.display = "none"
    result.style.display = "flex"
}

function copiar() {
    var text = output.value;
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
    console.log("Texto copiado al portapapeles")
}

function encriptar(texto) {
    for(let i = 0; i<matriz.length; i++){
        if(texto.includes(matriz[i][0])){
            texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return texto;
}

function desencriptar(texto){
    for(let i = 0; i<matriz.length; i++){
        if(texto.includes(matriz[i][1])){
            texto = texto.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return texto;
}