var botaoAdicionar = document.querySelector("#buscar-pacientes");//busca o id buscar-pacientes

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest(); //requisição http de vários tipos inclusive xml e json

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //executa o método get no link da api para pegar as informações

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) { //testa se o status da conexão está ok se estiver adiciona
          //uma classe com nome invisivel no id erro-ajax se não remove essa classe
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);//Transforma uma string em objeto JSON

            pacientes.forEach(function(paciente) { //um for que passa por cada indice dentro
              //d array pacientes
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();//envia a requisição para o servidor onde retornará o resultado por evento
    //tem as exceções InvalidStateError	e NetworkError
});
