function curiosidade(){

  const curiosidades = [

    "🌱 A IA pode reduzir desperdícios de água em até 30%.",

    "🚜 Drones conseguem detectar pragas antes mesmo do agricultor perceber.",

    "📡 Sensores inteligentes monitoram a saúde do solo em tempo real.",

    "☀️ Painéis solares já são usados em fazendas sustentáveis.",

    "🤖 Robôs agrícolas ajudam na colheita e reduzem impactos ambientais."

  ];

  let sorteio =
  curiosidades[Math.floor(Math.random() * curiosidades.length)];

  document.getElementById("resposta").innerHTML = sorteio;
}
