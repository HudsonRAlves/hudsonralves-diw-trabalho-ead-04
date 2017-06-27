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
    //var cor = "red";

    var tamanhominuscula = 0;
    var tamanhomaiuscula = 0;
    var tamanhonumero = 0;
    var tamanhosimbolo = 0;


    spanExibeSenha.innerHTML = "Senha digitada: " + this.value;

    if (tamanho >= 8) {
    //    cor = "green";
        QualidadeSenha = 50;
        document.getElementById('quantidadecaracteres').attributes['class'].value = "btn btn-success";   
    }
    else{
      document.getElementById('quantidadecaracteres').attributes['class'].value = "btn btn-danger";   
    }

    spanValidaTamanho.innerHTML =  tamanho;
    //spanValidaTamanho.style = "color:" + cor;

    

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
        spanMinuscula.innerHTML = tamanhominuscula;
        //spanMinuscula.style = "color:" + "green";
        QualidadeSenha += 10;
        document.getElementById('quantidademinuscula').attributes['class'].value = "btn btn-success";     
    }
    else
    {
        spanMinuscula.innerHTML = tamanhominuscula;
        //spanMinuscula.style = "color:" + "red";
        document.getElementById('quantidademinuscula').attributes['class'].value = "btn btn-danger"; 
    }

    if (tamanhomaiuscula >= 1) {
        spanMaiuscula.innerHTML =  tamanhomaiuscula;
       // spanMaiuscula.style = "color:" + "green";
        QualidadeSenha += 10;
        document.getElementById('quantidademaiuscula').attributes['class'].value = "btn btn-success";  
    }
    else
    {
        spanMaiuscula.innerHTML =  tamanhomaiuscula;
        //spanMaiuscula.style = "color:" + "red";
        document.getElementById('quantidademaiuscula').attributes['class'].value = "btn btn-danger"; 
    }


    if (tamanhonumero >= 1) {
        spanNumero.innerHTML =  tamanhonumero;
        //spanNumero.style = "color:" + "green";
        QualidadeSenha += 10;
        document.getElementById('quantidadenumeros').attributes['class'].value = "btn btn-success";  
    }
    else
    {
        spanNumero.innerHTML = tamanhonumero;
        //spanNumero.style = "color:" + "red";
        document.getElementById('quantidadenumeros').attributes['class'].value = "btn btn-danger"; 
    }

    if (tamanhosimbolo >= 1) {
        spanSimbolo.innerHTML =  tamanhosimbolo;
        //spanSimbolo.style = "color:" + "green";
        QualidadeSenha += 10;
        document.getElementById('quantidadesimbolos').attributes['class'].value = "btn btn-success";  
    }
    else
    {
        spanSimbolo.innerHTML =  tamanhosimbolo;
        //spanSimbolo.style = "color:" + "red";
        document.getElementById('quantidadesimbolos').attributes['class'].value = "btn btn-danger"; 
    }

    for (var y = 0; y <= QualidadeSenha; y++) 
    {

        if (QualidadeSenha === 0) 
            {
            barraprogresso.innerHTML = "";
            document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-danger";
            document.getElementById('barra').attributes['style'].value = "width:0%";
            document.getElementById('myCheck').checked = false;
            document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-danger";  
            } 
        else 
             {
                    if ((QualidadeSenha >= 1) && (QualidadeSenha <= 10)) 
                    {
                          barraprogresso.innerHTML = "Senha Fraca!!! Essa está facil demais. :0";
                          document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-danger";
                          document.getElementById('barra').attributes['style'].value = "width:20%";
                          document.getElementById('myCheck').checked = false;
                          document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-danger";  
                     } 
                     else 
                     {
                         if ((QualidadeSenha >= 11) && (QualidadeSenha <= 20)) {
                            barraprogresso.innerHTML = "Vai que você consegue!!! É serio que é só isso!!! rsrs :)";
                            document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-danger";
                            document.getElementById('barra').attributes['style'].value = "width:40%";
                            document.getElementById('myCheck').checked = false;
                                          document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-danger";  

                        } else {
                                if ((QualidadeSenha >= 30) && (QualidadeSenha <= 30)) {
                                    barraprogresso.innerHTML = "Está Melhorando Mais Ainda Não!!! Sabia essa com maças !!! ;) ";
                                    document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-warning";
                                    document.getElementById('barra').attributes['style'].value = "width:50%";
                                    document.getElementById('myCheck').checked = false;
                                                     document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-danger";  
                              } 
                          else 
                             { 
                                 if ((QualidadeSenha >= 30) && (QualidadeSenha <= 70)) 
                                    {
                                    document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-warning";
                                    barraprogresso.innerHTML = "!!! AFF :@ - Está faltando alguma coisa. Mais está no caminho certo!!!";
                                    document.getElementById('barra').attributes['style'].value = "width:70%";
                                     document.getElementById('myCheck').checked = false;
                                          document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-danger"; 
                                    }
                                        else 
                                        {
                                                if ((QualidadeSenha >= 80) && (QualidadeSenha <= 89)) {
                                                barraprogresso.innerHTML = "!!! Acertou Miserável !!! Ficou boa, mais pode melhorar :@ ";
                                                document.getElementById('barra').attributes['class'].value = "progress-bar";
                                                document.getElementById('barra').attributes['style'].value = "width:80%";
                                                document.getElementById('myCheck').checked = true;
                                                document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-success"; 
                                                } 
                                                    else 
                                                {
                                                        if ((QualidadeSenha >= 90) && (QualidadeSenha <= 100)) {
                                                       barraprogresso.innerHTML = "Hello, word!!! Senha Cabulosa, melhor anotar!!!!";
                                                       document.getElementById('barra').attributes['class'].value = "progress-bar progress-bar-success";
                                                       document.getElementById('barra').attributes['style'].value = "width:100%";
                                                       document.getElementById('myCheck').checked = true;
                                                       document.getElementById('SenhaAceitavel').attributes['class'].value = "btn btn-success"; 
                                                        }
                                                }
                                         }           
                   }
                }
            }
        }
  
    }
}   




