function construirLista() {
var PELIS = [...Lista1, ...Lista2, ...Lista3];

var lista = document.getElementById("Lista");
  
// Agrega los nuevos elementos dinámicamente
    PELIS.forEach(item => {
  
  var li = document.createElement("li");
  var a = document.createElement("a");

  a.href = item.URL || item.url;
  a.textContent = item.NAME || item.name;
  a.classList.add("Data");

  li.appendChild(a);
  lista.appendChild(li);
});
}


document.addEventListener("keyup", e=>{
 
     // TILDES
  function Tildes(texto, preservarÑ = false) {
    let limpio = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (!preservarÑ) {
      limpio = limpio.replace(/ñ/g, "n");
    }
    return limpio;
  };
  
      var In = e.target.value.toLowerCase().trim();
      var incluyeÑ = In.includes("ñ");
      var Data = document.querySelectorAll(".Data");
      let foundMatch = false;
      var Input = Tildes(In.replace(/\s+/g, ' '), incluyeÑ);
 
 
 
    
  if (e.target.matches("#buscador")){          
   
      Lista.style.display = Input === '' ? "none" : "block"; 
      
     Aux2.style.display = Input === '' ? 'block' : 'none'; 
 
  Data.forEach(item => {
    let itemText = Tildes(item.textContent.toLowerCase(), incluyeÑ);    
        if (itemText.includes(Input)) {
          item.classList.remove("filtro");
          foundMatch = true;
        } else {
          item.classList.add("filtro");
        }
      });
    No.style.display = foundMatch ? "none" : "block";
  }

    
     // MANEJO DEL ENTER  
if (e.key === "Enter") {
  var Int = e.target.value.toLowerCase().trim();
  var incluyeÑ = Int.includes("ñ");

  var inputLimpio = Int.replace(/🍿|🌐|📺|⚙️/g, '').trim();
  var inputValue = Tildes(inputLimpio.replace(/\s+/g, ' '), incluyeÑ);

     var matchedItem = [...document.querySelectorAll(".Data")].find(item => {
    let textoItemLimpio = item.textContent.replace(/🍿|🌐|📺|⚙️/g, '').toLowerCase().trim();
    return Tildes(textoItemLimpio, incluyeÑ) === inputValue;        
  });
          
  if (matchedItem) {
    var ENLACE = matchedItem.getAttribute("href");
    var NN = matchedItem.textContent;
    
    // DETENER REPRODUCCIÓN ANTERIOR
    if (Pantalla.src !== "" && Pantalla.style.display !== 'none') {
      Pantalla.src = 'about:blank';
    }

    var CADENA = ['play.vidyard', 'dropbox.com', 'okpeliz.com'];
    
    if (ENLACE.includes('google.com/file')) {
      var URL = ENLACE.split('view?usp')[0];
      var PRE = 'preview';
      Pantalla.style.display = 'block';
      Pantalla.src = URL + PRE;
      AA.play();
      buscador.value = '';          
      Lista.style.display = 'none';
      buscador.placeholder = Int;
      mostrarDetallesTMDB(matchedItem.textContent);
      buscador.classList.add('PlaceHolder'); 
      audio.pause();
      Pantalla.style.background = 'black';

    } else if (CADENA.some(dominio => ENLACE.includes(dominio))) {
      Pantalla.style.display = 'block';
      Pantalla.src = ENLACE.replace('www.dropbox.com', 'dl.dropboxusercontent.com'); 
      buscador.value = '';          
      Lista.style.display = 'none';
      buscador.placeholder = Int;  
      mostrarDetallesTMDB(matchedItem.textContent);
      buscador.classList.add('PlaceHolder');     
      audio.pause();
      Pantalla.style.background = 'black';          

    } else if (NN.includes('Tv')) {
      Pantalla.style.display = 'block';
      Pantalla.src = ENLACE; 
      buscador.value = '';          
      Lista.style.display = 'none';
      buscador.placeholder = Int;  
      mostrarDetallesTMDB(matchedItem.textContent);
      buscador.classList.add('PlaceHolder');     
      audio.pause();
      Pantalla.style.background = 'black';

    } else if (NN.includes('🌐')) {
      var TextLimp = NN.replace('🌐', '').trim();
      
   abrirFuera(`${ENLACE}?texto=${encodeURIComponent(TextLimp)}`);
      buscador.value = '';

    } else if (ENLACE.includes('pelisflix')) {
  window.location.href = `https://lamovie.github.io/La-Movie-Delux/AUX.html?titulo=${NN}&url=${ENLACE}`;          
        } else {
      var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   
      var TITULO = inputLimpio;
      var domain = !isMobile ? ENLACE.replace('latino.solo-latino', 'h5.swplayer') : matchedItem.href;
      
      window.location.href = domain;
      audio.pause();
      buscador.value = '';
    }

       } else {
    Check();
    Lista.style.display = 'none';
    No.style.display = "none";
    buscador.value = '';
   }
  }      
});

    
       function Check() {
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
      
   var TITULO = buscador.value.replace('🍿', '');
   
   const urlDestino = `${'https://lamovie.github.io/La-Movie-Delux/GOOGLE.html'}?texto=${TITULO}`;
  
   var domain = !isMobile ? 'https://www.google.com/search?q=site:sololatino.net+' + TITULO : urlDestino;
   
  window.location.href = domain;     
    };



         // HTML 
         
 var HTML =
  `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
      background: #000;
      margin: 0;
      overflow-x: hidden;
}
#Aux {
      width: 100%;
      position: relative;
} 
#Aux2 {
      width: 100%;
      
}  
#S {
    height: 20vh;  
    overflow-y: auto;
    padding-right: 10px;
}
#S::-webkit-scrollbar {
    width: 6px;
}
#S::-webkit-scrollbar-thumb {    
    background: #4f3fff;
    border-radius: 10px;
}
#Pantalla {
    border-radius: 20px; 
    background: url(https://is.gd/L4PVt2);
    background-size: cover;
    background-position: center;
}
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    color: #fff;
    padding: 10px;
    outline: none;
    font-weight: 600;
    border-radius: 20px;
    background: transparent;
    border: 2px solid gray;   
}
.PlaceHolder::placeholder {
    color: blue;
    opacity: .7;
}
#Lista {
    display: none;
    font-size: 30px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    scrollbar-width: none;
    border-radius: 20px;
}
li {
    margin: 5px 0;
}
.filtro {
    display: none;
}
a {
    color: #fff;
    text-decoration: none;
  &:hover {
     color: #4f9;
     text-shadow: 0 0 10px red;
 }
}
#No {
    display: none;
    border-radius: 50px;
  &:hover {
      filter: hue-rotate(90deg);
  }
}
</style>

<style>
:root {
  --bg: #110921;
  --purple: #3720b4;
  --green: #5ff8c2;
  --font: 'Roboto Mono', sans-serif;
}
h1 {
  font-size: 3vw;
}
</style>
</head>
<body>
<section id="contenedor-main">
    <div>
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
           <br/><br/>
    <ul id="Lista"></ul>
           </div>
</section>
<img id="No" src="https://is.gd/NjNew4"/>
<audio id="audio" autoplay src="https://archive.org/download/sergio-mendes-feat.-black-eyed-peas-mas-que-nada-mp-3-160-k-1/Best%20Boot%20Bass%20%28Mix%29.mp3"></audio>
  
  <audio id="AA" src="https://archive.org/download/bass-city-nany-reggae-music/PANTALLA%20EN%20NEGRO.mp3"></audio>
  
`;

     Aux.innerHTML = HTML;

 buscador.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') { 
                event.preventDefault(); 
  var TextPre = buscador.value.toLowerCase().trim(); 
  let Prefijo;
 
 if (TextPre.includes('tv')) {
         Prefijo = '📺';
     } else if(TextPre.includes('sofia')){
         Prefijo = '⚙️';
     } else {
         Prefijo = '🍿';
     }   
   var Texto = Prefijo + TextPre;       
   buscador.value = Texto; 
  }
});    

       No.alt = 'No EnCoNTraDO';
      No.style.color = '#fff';   
     
       No.onclick = () => {
            Check();
      No.style.display = 'none';
     }
          
  var Lista = document.getElementById('Lista');



     // MANEJO DEL CLICK
Lista.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault(); 
    var ENLACE = event.target.href;
    var NN = event.target.textContent;
    
    // DETENER REPRODUCCIÓN ANTERIOR
    if (Pantalla.src !== "" && Pantalla.style.display !== 'none') {
      Pantalla.src = 'about:blank';
    }

    var CADENA = ['play.vidyard', 'dropbox.com', 'okpeliz.com'];
  
    if (ENLACE.includes('google.com/file')) {
      var URL = ENLACE.split('view?usp')[0];
      var PRE = 'preview';
      Pantalla.style.display = 'block';
      Pantalla.src = URL + PRE; 
      AA.play();
      buscador.value = '';          
      Lista.style.display = 'none';
      buscador.placeholder = event.target.textContent;
      mostrarDetallesTMDB(event.target.textContent);
      buscador.classList.add('PlaceHolder');
      audio.pause();
      Pantalla.style.background = 'black';

    } else if (CADENA.some(dominio => ENLACE.includes(dominio))) {
      Pantalla.style.display = 'block'; 
      Pantalla.src = ENLACE.replace('www.dropbox.com', 'dl.dropboxusercontent.com'); 
      buscador.value = '';          
      Lista.style.display = 'none';
      buscador.placeholder = event.target.textContent;  
      mostrarDetallesTMDB(event.target.textContent);
      buscador.classList.add('PlaceHolder');     
      audio.pause();
      Pantalla.style.background = 'black';          

    } else if (NN.includes('Tv')) {
      Pantalla.style.display = 'block'; 
      Pantalla.src = ENLACE; 
      buscador.value = '';          
      Lista.style.display = 'none';
      buscador.placeholder = event.target.textContent;  
      mostrarDetallesTMDB(event.target.textContent);
      buscador.classList.add('PlaceHolder');     
      audio.pause();
      Pantalla.style.background = 'black';

    } else if (NN.includes('🌐')) {
        var TextLimp = NN.replace('🌐', '').trim();
    
     abrirFuera(`${ENLACE}?texto=${encodeURIComponent(TextLimp)}`);
      buscador.value = '';

    } else {
        var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   
      var domain = !isMobile ? ENLACE.replace('latino.solo-latino', 'h5.swplayer') : ENLACE;
      
      window.location.href = domain;
      audio.pause();
      buscador.value = '';
    } 
  }
});

     

        // HORIZONTAL

        function Handle() {
            var orientation = (window.innerWidth > window.innerHeight) ? evento() : invento();        
}

        function evento() {
    var style = document.createElement('style');
   style.innerHTML = `
<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
}
center {
    display: grid;
    grid-template-columns: 60vw 35vw;
    grid-template-rows: auto 1fr;
    gap: 2vw;
    width: 95vw;
    align-items: start;
    justify-items: center;
}
#Pantalla {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 100%;
    height: 70vh;
    margin: 0;
    scale: 1;
    transform: none;
}
br { display: none; }
#Aux {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 100%;
    margin: 0;
}
#Aux2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 100%;
    margin: 0;
}
section {
    width: 100%;
    position: static;
}
input {    
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.2rem;
    scale: 1;
}
#Lista {
    position: absolute;
    top: 65px;
    left: 0;
    width: 70%;
    height: 50vh;
    margin: 0;
    scale: 1;
    transform: none;
    overflow-y: auto;
}
#No {
    position: fixed;
    top: 50%;
    right: 10vw;
    transform: translateY(-50%);
    scale: 80%;
}
</style>     
`;        document.head.appendChild(style);
} 

       function invento() {
   var style = document.createElement('style');
   style.innerHTML = `
<style>
body {
    display: block;
}
center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-top: 2vh;
}
#Pantalla {
    width: 95vw;
    height: 35vh;
    margin: 0;
    scale: 1;
    transform: none;
}
br { display: none; }
#Aux {
    width: 90vw;
    margin: 2vh 0 0 0;
}
#Aux2 {
    width: 90vw;
    margin: 0;
}
section {
    width: 100%;
    position: static;
}
input {    
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 18px;
    scale: 1;
}
#Lista {
    position: absolute;
    top: 65px;
    left: 0;
    width: 70%;
    height: 45vh;
    margin: 0;
    scale: 1;
    transform: none;
    overflow-y: auto;
}
#No {
    position: fixed;
    top: 60vh;
    right: 5vw;
    scale: 80%;
}
</style>   
`;        document.head.appendChild(style);
}

 window.addEventListener("resize", Handle);
 Handle();


       // FULL SCREEN 
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape');
      Pantalla.style.scale = '100%';
    }
  } else {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('portrait');
    }
  }
});


 
      window.onload = () => {
      if (!/Mobi|Android/i.test(navigator.userAgent)) {
    document.addEventListener('fullscreenchange', () => {
 if (!document.fullscreenElement) {
       Pantalla.style.scale = '190%';
     } else {
         Pantalla.style.scale = '100%';
     }
  });
    Full.style.scale = '1.2';
    Full.style.transform = 'translate(20vh, 33vh)';
     }
  };    
     

      // --- FICHA TÉCNICA CON TMDB API ---
async function mostrarDetallesTMDB(tituloOriginal) {
  Aux2.style.display = 'block';
  var API_KEY = "2c0b94c5ec729e2cc59b8be6ad7b2159"; // Tu API Key limpia de TMDb
  var tituloLimpio = tituloOriginal.replace(/^🍿|📺|⚙️/, '').trim(); // Limpiar emojis

  try {
    // Buscar la película directamente en español en TMDb
    var searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(tituloLimpio)}&language=es-ES`;
    var response = await fetch(searchUrl);
    var data = await response.json();

    if (data.results && data.results.length > 0) {
      var peli = data.results[0];
      var movieId = peli.id;

      // Obtener detalles completos incluyendo director y equipo técnico
      var detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`;
      var detailRes = await fetch(detailUrl);
      var detailData = await detailRes.json();

      var titulo = detailData.title;
      var año = detailData.release_date ? detailData.release_date.split('-')[0] : "N/A";
      var sinopsis = detailData.overview || "No hay sinopsis disponible.";
      var genero = detailData.genres && detailData.genres.length > 0 
          ? detailData.genres.map(g => g.name).join(", ") 
          : "Desconocido";
      
      var directorObj = detailData.credits.crew.find(miembro => miembro.job === "Director");
      var director = directorObj ? directorObj.name : "Desconocido";
      var poster = detailData.poster_path ? "https://image.tmdb.org/t/p/w500" + detailData.poster_path : "";

      // Inyectar con el contenedor #S que tiene scroll integrado y se adapta a tu diseño
      Aux2.innerHTML = `
        <div style="padding: 1em; background: #111; color: white; border-radius: 10px; width: 100%; box-sizing: border-box; margin: 0; scale: 70%;">
          <img src="${poster}" alt="${titulo}" style="width: 150px; float: left; margin-right: 1em; border-radius: 10px;">
          <h2>${titulo} (${año})</h2>
          <p><strong>🎬 Género:</strong> ${genero}</p>
          <p><strong>🎥 Director:</strong> ${director}</p>
          <div id="S">
              <p><strong>📝 Sinopsis:</strong> ${sinopsis}</p>
          </div>
          <div style="clear: both;"></div>
        </div>
      `;
    } else {
      Aux2.style.display = 'none';
    }
  } catch (error) {
    console.error("Error al buscar en TMDb:", error);
    Aux2.style.display = 'none';
  }
}



          // INTENT
function abrirFuera(urlDestino) {
     var urlSinProtocolo = urlDestino.replace("https://", "");
      
      var intentURL = "intent://" + urlSinProtocolo + "#Intent;scheme=https;action=android.intent.action.VIEW;end;";
      
 window.location.href = intentURL;
    }

  
          // BUSCADORES
      const S = [
  "https://lamovie.github.io/Buscador/Buscador.js",
  "https://lamovie.github.io/Buscador/Buscador2.js",
  "https://lamovie.github.io/Buscador/Buscador3.js"
];

let scriptsCargados = 0;

  S.forEach(src => {
  const scripts = document.createElement("script");
  scripts.src = src;
  scripts.onload = () => {
    scriptsCargados++;
    if (scriptsCargados === S.length) {
      construirLista();
    }
  };
  document.body.appendChild(scripts);
});