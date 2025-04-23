var Lista3 = [
  { NAME: "🍿LA CASA DE PAPEL", URL: "https://h5.swplayer.com/es/detail/drama/w4T1wpuJxUu5b0bHfQnU5-Money-Heist-Season-1" },
  { NAME: "🍿JUEGO DE TRONOS", URL: "https://h5.swplayer.com/es/detail/drama/uf5jenYNRHVO6dKZpo3JY-Game-of-Thrones-Season-1/1" },
  { NAME: "🍿ONE PIECE", URL: "https://h5.swplayer.com/es/detail/drama/vdXAbbyiZgaslQlAZ9Z6H-One-Piece" }, 
  { NAME: "🍿VIS A VIS", URL: "https://h5.swplayer.com/es/detail/drama/br2opIQsBK8hepOpdQEDI-Vis-a-vis-Season-1" },
  { NAME: "🍿VIKINGOS", URL: "https://h5.swplayer.com/es/detail/drama/3TVD1tXGJbNUvPc0u3mP8-Vikings-Season-1/1" },
  { NAME: "🍿FAMILY GUY", URL: "https://h5.swplayer.com/es/detail/drama/QTUVOLeIYWjsO8Fv2PcxM-Family-Guy-Season-1" }, 
  { NAME: "🍿BRICKLEBERRY FULL", URL: "https://h5.swplayer.com/es/detail/drama/tNN9IaUvc8Xqek2jHt2Ek-Brickleberry-Season-1" },
  { NAME: "🍿LOS SIMPSONS", URL: "https://h5.swplayer.com/es/detail/drama/MNxoJpARCrPHvVPu1ljH1-The-Simpsons-Season-1" }, 
  { NAME: "🍿OUTLANDER", URL: "https://h5.swplayer.com/es/detail/drama/SC5e4d5u7ZQBPnkhz675G-Outlander-Season-1/1" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }
]
   
// Selecciona la lista existente
var lista = document.getElementById("Lista");

// Agrega los nuevos elementos dinámicamente
Lista3.forEach(item => {
  var li = document.createElement("li");
  var a = document.createElement("a");

  a.href = item.URL || item.url;
  a.textContent = item.NAME || item.name;
  a.classList.add("Data");

  li.appendChild(a);
  lista.appendChild(li);
});

  
  
  
  
  
  
