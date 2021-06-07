var buttonCalculate = document.querySelector("#calculate");
buttonCalculate.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form");

    var dose = document.querySelector("#dose").value;
    var freq = document.querySelector("#freq").value;
    var drug = document.querySelector("#drug").value;
    var volume = document.querySelector("#volume").value;
    var duration = document.querySelector("#duration").value;

    // var paciente = obtemPacienteDoFormulario(form);

    // var erros = validaPaciente(paciente);

    // if (erros.length > 0) {
    //     exibeMensagensDeErro(erros);

    //     return;
    // }

    var amount = computation(dose, drug, volume);

    showResult(amount, freq, duration);

    // adicionaPacienteNaTabela(paciente);

    form.reset();

    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = "";

});

function computation(dose, drug, volume) {
  var oneGram = volume/drug;
  var amount = dose*oneGram;
  return amount;
}

function showResult(amount, freq, duration) {
  totalVolume = amount*freq*duration;

  var divResult = document.querySelector('.result');
  divResult.innerHTML = `You must take ${amount} ml, ${freq} time(s) per day, for ${duration} day(s)!`;
  
  var divBottle = document.querySelector('.bottle');
  // divBottle.classList.add('bgBottle');
  // divBottle.classList.remove('bgPlaceholder');

  var img = document.createElement('img');
  img.setAttribute('src', 'img/bottle.png');
  img.setAttribute('alt', 'A bottle');
  img.classList.add('bottle__img');
  
  var divVolume = document.createElement('div');
  divVolume.classList.add('bottle__volume');
  divVolume.innerHTML = `${totalVolume} ml`

  divBottle.appendChild(img);
  divBottle.appendChild(divVolume);
}