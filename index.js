function calculoimc() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    var resultado;

    if(imc < 18.5){
        resultado = 'Magreza';
    }else if (imc < 24.9){
        resultado = 'IMC Normal';
    }else if (imc < 30){
        resultado = 'Sobrepeso';  
    }else {
        resultado = 'Obesidade';  
    }
    
    document.getElementById('resultado').innerHTML = resultado
}