function IMC() {
    var peso = parseFloat(document.getElementById("v1").value); 
    var altura = parseFloat(document.getElementById("v2").value); 

    if (!peso || !altura || altura <= 0) {
        document.getElementById("res").innerHTML = "Por favor, insira valores válidos!";
        document.getElementById("img").style.display = "none"; 
        return;
    }

    var imc = peso / Math.pow(altura, 2); 
    var classificacao = "";
    var imagem = "";

    if (imc <= 18.5) {
        classificacao = "Abaixo do Peso";
        imagem = "img/baixopeso.png";
    } else if (imc > 18.5 && imc < 25) {
        classificacao = "Peso Normal";
        imagem = "img/pesoregular.png";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
        imagem = "img/sobrepeso.png";
    } else if (imc >= 30 && imc < 40) {
        classificacao = "Obesidade do Tipo 1";
        imagem = "img/obeso.png";
    } else if (imc >= 40) {
        classificacao = "Obesidade Mórbida";
        imagem = "img/obesidadegrave.png";
    }

    document.getElementById("res").innerHTML = `Resultado: ${imc.toFixed(2)} - ${classificacao}`;
    var imgElement = document.getElementById("img");
    imgElement.src = imagem; 
    imgElement.style.display = "block"; 
}