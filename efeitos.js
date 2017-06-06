window.onload = init;

function init() {

    var edtSenha = document.getElementById('senha');
    edtSenha.onkeyup = validarSenha;
}

function validarSenha() {

    var QualidadeSenha = 0;
    var spanExibeSenha = document.getElementById('exibeSenha');
    var spanValidaTamanho = document.getElementById('validaTamanho');

    var Senha = this.value;

    var TipoCaracter = '';

    var spanMinuscula = document.getElementById('minuscula');
    var spanMaiuscula = document.getElementById('maiuscula');
    var spanNumero = document.getElementById('numero');
    var spanSimbolo = document.getElementById('simbolo');

    var barraprogresso = document.getElementById('barra');

    var tamanho = this.value.length;
    var cor = "red";

    var tamanhominuscula = 0;
    var tamanhomaiuscula = 0;
    var tamanhonumero = 0;
    var tamanhosimbolo = 0;


    spanExibeSenha.innerHTML = "Senha digitada: " + this.value;

    if (tamanho >= 8) {
        cor = "green";
        QualidadeSenha = 50;
    }

    spanValidaTamanho.innerHTML = "Quantidade de Caracteres Total: " + tamanho;
    spanValidaTamanho.style = "color:" + cor;

    

    for (var i = 0; i <= this.value.length - 1; i++) {
        TipoCaracter = Senha.charCodeAt(i);

             
    if ((TipoCaracter >= 97) && (TipoCaracter <= 122)) {
            tamanhominuscula++;
        } else {
            if ((TipoCaracter >= 65) && (TipoCaracter <= 90)) {
                tamanhomaiuscula++;
            } else {
                if ((TipoCaracter >= 48) && (TipoCaracter <= 57)) {
                    tamanhonumero++;
                } else
                {
                    tamanhosimbolo++;
                }
            }
        }
    }

    if (tamanhominuscula >= 1) {
        spanMinuscula.innerHTML = 'Quantidade de Caracteres Minusculos: ' + tamanhominuscula;
        spanMinuscula.style = "color:" + "green";
        QualidadeSenha += 10;
    }
    else
    {
        spanMinuscula.innerHTML = 'Quantidade de Caracteres Minusculos: ' + tamanhominuscula;
        spanMinuscula.style = "color:" + "red";
    }

    if (tamanhomaiuscula >= 1) {
        spanMaiuscula.innerHTML = 'Quantidade de Caracteres Maisculos: ' + tamanhomaiuscula;
        spanMaiuscula.style = "color:" + "green";
        QualidadeSenha += 10;
    }
    else
    {
        spanMaiuscula.innerHTML = 'Quantidade de Caracteres Maisculos: ' + tamanhomaiuscula;
        spanMaiuscula.style = "color:" + "red";
    }


    if (tamanhonumero >= 1) {
        spanNumero.innerHTML = 'Quantidade de Caracteres Numericos: ' + tamanhonumero;
        spanNumero.style = "color:" + "green";
        QualidadeSenha += 10;
    }
    else
    {
        spanNumero.innerHTML = 'Quantidade de Caracteres Numericos: ' + tamanhonumero;
        spanNumero.style = "color:" + "red";
    }

    if (tamanhosimbolo >= 1) {
        spanSimbolo.innerHTML = 'Quantidade de Simbolos: ' + tamanhosimbolo;
        spanSimbolo.style = "color:" + "green";
        QualidadeSenha += 10;
    }
    else
    {
        spanSimbolo.innerHTML = 'Quantidade de Simbolos: ' + tamanhosimbolo;
        spanSimbolo.style = "color:" + "red";
    }

    if (QualidadeSenha === 0) {
        barraprogresso.innerHTML = "";
        document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-danger";
        document.getElementById('barra').attributes['style'].value = "width:0%";
        document.getElementById('myCheck').checked = false;
        document.getElementById('Mestre').attributes['src'].value ="";
    } else {
      if (QualidadeSenha <= 10) {
            barraprogresso.innerHTML = "Senha Fraca!!! Essa está facil demais. :0";
            document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-danger";
            document.getElementById('barra').attributes['style'].value = "width:20%";
            document.getElementById('myCheck').checked = false;
            document.getElementById('Mestre').attributes['src'].value ="";
        } else {
            if (QualidadeSenha <= 20) {
                barraprogresso.innerHTML = "Vai que você consegue!!! É serio que é só isso!!! rsrs :)";
                document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-danger";
                document.getElementById('barra').attributes['style'].value = "width:40%";
                document.getElementById('myCheck').checked = false;
                document.getElementById('Mestre').attributes['src'].value ="";
            } else {
                if (QualidadeSenha <= 30) {
                    barraprogresso.innerHTML = "Está Melhorando Mais Ainda Não!!! Sabia essa com maças !!! ;) ";
                    document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-warning";
                    document.getElementById('barra').attributes['style'].value = "width:60%";
                    document.getElementById('myCheck').checked = false;
                    document.getElementById('Mestre').attributes['src'].value ="";
                } else {
                    if ((QualidadeSenha >= 80) && (QualidadeSenha <= 89)) {
                        barraprogresso.innerHTML = "!!! Acertou Miserável !!! O objetivo foi alcançado mais pode Melhorar :@ ";
                        document.getElementById('barra').attributes['class'].value = "progress-bar";
                        document.getElementById('barra').attributes['style'].value = "width:80%";
                        document.getElementById('myCheck').checked = true;
                        document.getElementById('Mestre').attributes['src'].value ="";
                        document.getElementById('Mestre').attributes['src'].value ="http://cdn.naosalvo.com.br/2016/01/acerto.jpg";

                    } else {
                        if ((QualidadeSenha >= 90) && (QualidadeSenha <= 100)) {
                            barraprogresso.innerHTML = "Hello, word!!! Você está em um nivél unn4m3d !!!!";
                            document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-success";
                            document.getElementById('barra').attributes['style'].value = "width:100%";
                            document.getElementById('myCheck').checked = true;
                            document.getElementById('Mestre').attributes['src'].value ="https://lh3.googleusercontent.com/_cUr3dfuC164LbqXTzyrZLE6cp0SPZt-adDXRDSHIxMSkJajnSLuq2X78ORgjub8WlQ=w300";
                        }
                    }
                }
            }
        }
    }
  
}   




