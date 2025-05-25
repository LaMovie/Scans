var Lista3 = [
  { NAME: "🍿REHÉN", URL: "https://play.okpeliz.com/embed/1371202" },
  { NAME: "🍿DESTINO FINAL 5", URL: "https://play.okpeliz.com/embed/55779" },
  { NAME: "🍿BORDERLANDS", URL: "https://play.okpeliz.com/embed/365177" }, 
  { NAME: "🍿EL MAGO DE OZ", URL: "https://play.okpeliz.com/embed/658224" },
  { NAME: "🍿OZ", URL: "https://play.okpeliz.com/embed/68728" },
  { NAME: "🍿BLANCA NIEVES Y EL CAZADOR", URL: "https://play.okpeliz.com/embed/58595" }, 
  { NAME: "🍿PIRATAS DEL CARIBE 5", URL: "https://play.okpeliz.com/embed/166426" },
  { NAME: "🍿VAN HELSING", URL: "https://play.okpeliz.com/embed/7131" }, 
  { NAME: "🍿CAPITANA MARVEL", URL: "https://play.okpeliz.com/embed/299537?alt=5347&referer=" },
  { NAME: "🍿CAPITAN AMERICA CIVIL WAR", URL: "https://play.okpeliz.com/embed/271110" }, 
  { NAME: "🍿IRON MAN 3", URL: "https://play.okpeliz.com/embed/68721" },
  { NAME: "🍿NO HABLES CON EXTRAÑOS", URL: "https://play.okpeliz.com/embed/1114513" },
  { NAME: "🍿NO TE MUEVAS", URL: "https://play.okpeliz.com/embed/1063877" }, 
  { NAME: "🍿THE WITCHER ANIMATION", URL: "https://play.okpeliz.com/embed/1203329" }, 
  { NAME: "🍿JUEGO DE TRONOS", URL: "https://lamovie.github.io/JUEGO-DE-TRONOS/" }, 
  { NAME: "🍿SCARY MOVIE 4", URL: "https://play.okpeliz.com/embed/4257" }, 
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

  
  
  
  
  
  
