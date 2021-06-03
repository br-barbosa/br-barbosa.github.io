var buttonCalculate = document.querySelector("#calculate");
buttonCalculate.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form");

    var dose = document.querySelector("#dose").value;
    var freq = document.querySelector("#freq").value;
    var drug = document.querySelector("#drug").value;
    var volume = document.querySelector("#volume").value;

    // var paciente = obtemPacienteDoFormulario(form);

    // var erros = validaPaciente(paciente);

    // if (erros.length > 0) {
    //     exibeMensagensDeErro(erros);

    //     return;
    // }

    var amount = computation(dose, freq, drug, volume);

    showResult(amount, freq);

    // adicionaPacienteNaTabela(paciente);

    form.reset();

    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = "";

});

function computation(dose, freq, drug, volume) {
  var oneGram = volume/drug;
  var dailyVolume = dose*oneGram;
  var amount = dailyVolume/freq;
  return amount;
}

function showResult(amount, freq) {
  var div = document.querySelector("#result");
  div.innerHTML = `You must take ${amount} ml, ${freq} time(s) per day!`;
}