function gerarCuriosidade(){

const curiosidades = [

"🌱 A agricultura de precisão pode economizar até 30% de água.",

"🚁 Drones agrícolas conseguem identificar pragas antes que elas se espalhem.",

"🤖 Sistemas de IA ajudam agricultores a prever mudanças climáticas.",

"📡 Sensores inteligentes monitoram nutrientes do solo em tempo real.",

"☀️ Fazendas sustentáveis utilizam energia solar para reduzir impactos ambientais.",

"🚜 Máquinas modernas utilizam GPS para evitar desperdício de sementes.",

"🌍 Tecnologias agrícolas ajudam a produzir mais alimentos usando menos recursos naturais.",

"💧 Sistemas inteligentes de irrigação reduzem o desperdício de água no campo.",

"🌾 A IA ajuda a identificar doenças em plantações usando imagens captadas por drones."

];

const sorteio =
curiosidades[Math.floor(Math.random() * curiosidades.length)];

document.getElementById("resultado").innerHTML = sorteio;

}
