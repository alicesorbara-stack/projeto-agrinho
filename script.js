function mostrarCuriosidade(){

  const curiosidades = [

    "🌱 A IA pode reduzir desperdícios de água.",

    "🚜 Drones conseguem detectar pragas rapidamente.",

    "📡 Sensores monitoram o solo em tempo real.",

    "☀️ Fazendas usam energia solar para reduzir impactos ambientais.",

    "🤖 Robôs agrícolas ajudam na colheita sustentável."

  ];

  const sorteio =
  curiosidades[Math.floor(Math.random() * curiosidades.length)];

  document.getElementById("resultado").innerHTML = sorteio;
}
