const key ="133dcaa11542a603ad177ff25ceac0d9"

function DadosTela(dados){
    document.querySelector('.titulos-cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = "A umidade relativa do ar:" + dados.main.humidity + "%"
}
async function Buscardados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosTela(dados)
}



function Cliquebotao(){
    const cidade = document.querySelector('.input-cidade').value
    Buscardados(cidade)
}

