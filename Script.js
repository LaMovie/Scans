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
     Aux2.style.display = 'none'; 
 
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
    
     <!-- Manejo del Enter -->
  
    if (e.key === "Enter") {
      var Int = e.target.value.toLowerCase().trim();
      var incluyeÑ = Int.includes("ñ");
      var inputValue = Tildes(Int.replace(/\s+/g, ' '), incluyeÑ);
      var matchedItem = [...document.querySelectorAll(".Data")].find(
        item => Tildes(item.textContent.toLowerCase(), incluyeÑ) === inputValue
    );
      
      
    if (matchedItem) {
      var ENLACE = matchedItem.getAttribute("href");
      var NN = matchedItem.textContent;
      
   // DETENER REPRODUCCIÓN ANTERIOR
if (Pantalla.src !== "" && Pantalla.style.display !== 'none') {
  Pantalla.src = 'about:blank'; // Detener iframe
}
 

  var CADENA = ['play.vidyard', 'dropboxuser'];
      
      if (ENLACE.includes('file')) {
   var URL = ENLACE.split('view?usp')[0]; // Obtiene parte anterior a 'view?usp=drive'
        var PRE = 'preview';
 Pantalla.style.display = 'block';
     Pantalla.src = URL + PRE;
     AA.play();
        buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = inputValue;
    mostrarDetallesOMDb(matchedItem.textContent);
buscador.classList.add('PlaceHolder'); 
         audio.pause();
Pantalla.style.background = 'black';
          } else if (CADENA.some(dominio => ENLACE.includes(dominio))) {
 Pantalla.style.display = 'block';
     Pantalla.src = ENLACE; 
       buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = inputValue;  
    mostrarDetallesOMDb(matchedItem.textContent);
buscador.classList.add('PlaceHolder');     
        audio.pause();
Pantalla.style.background = 'black';          
          } else if (NN.includes('Tv')) {
  Pantalla.style.display = 'block';
     Pantalla.src = ENLACE; 
       buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = inputValue;  
    mostrarDetallesOMDb(matchedItem.textContent);
buscador.classList.add('PlaceHolder');     
        audio.pause();
Pantalla.style.background = 'black';
           } else {
   var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   
  
 var TITULO = buscador.value.replace('🍿', '');
   
     var domain = !isMobile ? 'https://www.google.com/search?q=site:sololatino.net+' + TITULO : matchedItem.href;
   
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
   
   var domain = !isMobile ? 'https://www.google.com/search?q=site:sololatino.net+' + TITULO : 'go:GOOGLE';
   
  window.location.href = domain;     
    };



         <!-- HTML -->
         
 var HTML =
  `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
      background: #000;
      position: fixed;      
}
#Aux, #Aux2 {
      margin: 10vh;
}   
#Pantalla {
    margin: 3vh;
    border-radius: 20px; 
    background: url(https://is.gd/L4PVt2);
    background-size: cover;
    background-position: center;
}
section {
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    color: #fff;
    width: 100%;
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
    scale: 90%;
    left: -3vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 40vh;
    overflow: scroll;
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
    top: 56vh;
    right: 10vh;
    scale: 70%;
    display: none;
    position: fixed;
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
<audio id="audio" src="https://archive.org/download/sergio-mendes-feat.-black-eyed-peas-mas-que-nada-mp-3-160-k-1/Best%20Boot%20Bass%20%28Mix%29.mp3"></audio>
  
  <audio id="AA" src="https://ia601709.us.archive.org/5/items/bass-city-nany-reggae-music/PANTALLA%20EN%20NEGRO.mp3"></audio>
  
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
  Pantalla.src = 'about:blank'; // Detener iframe
}

    var CADENA = ['play.vidyard', 'dropboxuser'];
  
  if (ENLACE.includes('file')) {
  var URL = ENLACE.split('view?usp')[0];
       var PRE = 'preview';
  Pantalla.style.display = 'block';
     Pantalla.src = URL + PRE; 
     AA.play();
     buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = event.target.textContent;
    mostrarDetallesOMDb(event.target.textContent);
buscador.classList.add('PlaceHolder');
          audio.pause();
Pantalla.style.background = 'black';
           } else if (CADENA.some(dominio => ENLACE.includes(dominio))) {
  Pantalla.style.display = 'block'; 
     Pantalla.src = ENLACE; 
       buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = event.target.textContent;  
    mostrarDetallesOMDb(event.target.textContent);
buscador.classList.add('PlaceHolder');     
        audio.pause();
Pantalla.style.background = 'black';          
          } else if (NN.includes('Tv')) {
  Pantalla.style.display = 'block'; 
       Pantalla.src = ENLACE; 
       buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = event.target.textContent;  
    mostrarDetallesOMDb(event.target.textContent);
buscador.classList.add('PlaceHolder');     
          audio.pause();
Pantalla.style.background = 'black';
            } else {
   window.location.href = ENLACE;
          audio.pause();
          buscador.value = '';
    } 
  }
});   
     

        <!-- HORIZONTAL -->

        function Handle() {
            var orientation = (window.innerWidth > window.innerHeight) ? evento() : invento();        
}

        function evento() {
    var style = document.createElement('style');
   style.innerHTML = `
<style>
#Aux {
      margin: 10vh;
}   
#Pantalla {
    scale: 190%;
    transform: translate(15vh, 10vh);
    margin: 3vh;
    border-radius: 20px; 
    background: url(https://is.gd/L4PVt2);
    /*https://bit.ly/49X0ijf*/
    background-size: cover;
    background-position: center;
}
section {
    top: 20vh;
    right: -10vh;
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    scale: 120%;
    color: #fff;
    width: 100%;
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
    scale: 90%;
    left: 10vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 50vh;
    overflow: scroll;
    scrollbar: none;
    border-radius: 20px;
    transform: translate(130vh, 10vh);
}
#Lista::-webkit-scrollbar {
    display: none;
}
#No {
    top: 0vh;
    right: 25vh;
    scale: 80%;
    display: none;
    position: fixed;
    transform: translate(-5vh, -30vh);
}
</style>     
`;        document.head.appendChild(style);
} 

       function invento() {
   var style = document.createElement('style');
   style.innerHTML = `
<style>
#Aux {
      margin: 10vh;
}   
#Pantalla {
    scale: 100%;
    transform: translate(0vh, 0vh);
    margin: 3vh;
    border-radius: 20px; 
    background: url(https://is.gd/L4PVt2);
    /*https://bit.ly/49X0ijf*/
    background-size: cover;
    background-position: center;
}
section {
    top: 50vh;
    right: 13vh;
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    scale: 100%;
    color: #fff;
    width: 100%;
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
    scale: 90%;
    left: -3vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 40vh;
    overflow: scroll;
    border-radius: 20px;
    transform: translate(0vh, 0vh);
}
#No {
    top: 56vh;
    right: 25vh;
    scale: 80%;
    display: none;
    position: fixed;
    transform: translate(0vh, 0vh);
}
</style>   
`;        document.head.appendChild(style);
}

 window.addEventListener("resize", Handle);

  <!-- Llama a la función al cargar la página para establecer el estado inicial -->
      Handle();


       <!-- FULL SCREEN -->

<!-- Detectar cuando entra o sale de fullscreen -->
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    <!-- Si estamos en pantalla completa, bloquear orientación horizontal -->
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape');
      Pantalla.style.scale = '100%';
    }
  } else {
    <!-- Si salimos de pantalla completa, volver a orientación vertical -->
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
     

      <!-- FICHA TÉCNICA -->
     // --- MODIFICAR LA FUNCIÓN traducir ---
async function traducir(texto, sl = 'en', tl = 'es') {
  // sl = Source Language (idioma de origen), tl = Target Language (idioma de destino)
  if (!texto) return ''; // Manejar caso de texto vacío
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(texto)}`);
    const data = await res.json();
    // La respuesta de esta API es un array anidado, el resultado es data[0][0][0]
    return data[0][0][0];
  } catch (error) {
    console.error(`Error al traducir de ${sl} a ${tl}:`, error);
    return texto; // Devolver el texto original en caso de error
  }
}

// --- MODIFICAR LA FUNCIÓN mostrarDetallesOMDb ---
async function mostrarDetallesOMDb(tituloOriginal) {
  Aux2.style.display = 'block';
  var API_KEY = "e29e6334";
  var tituloLimpio = tituloOriginal.replace(/^🍿|📺|⚙️/, '').trim(); // Limpiar prefijos de emoji

  try {
    // 1. Pre-traducir el título buscado de ES a EN para la consulta a OMDb
    var queryOMDb = await traducir(tituloLimpio, 'es', 'en');
    // Si la traducción resulta en el mismo texto (probablemente ya estaba en inglés o es un título ambiguo),
    // se mantiene la query original para evitar errores.
    if (queryOMDb === tituloLimpio || !queryOMDb) {
        queryOMDb = tituloLimpio;
    }

    // 2. Consultar OMDb con el título traducido a inglés (o el original si ya lo estaba)
    var res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(queryOMDb)}&apikey=${API_KEY}`);
    var data = await res.json();

    if (data.Response === "True") {
      // 3. Post-traducir los resultados relevantes de EN a ES para la visualización
      var [titulo, genero, director, sinopsis] = await Promise.all([
        traducir(data.Title, 'en', 'es'),
        traducir(data.Genre, 'en', 'es'),
        traducir(data.Director, 'en', 'es'),
        traducir(data.Plot, 'en', 'es')
      ]);

      Aux2.innerHTML = `
        <div style="padding: 1em; background: #111; color: white; border-radius: 10px; max-width: 600px; margin: 1vh -8vh; scale: 50%;">
          <img src="${data.Poster !== "N/A" ? data.Poster : ''}" alt="${titulo}" style="width: 150px; float: left; margin-right: 1em; border-radius: 10px;">
          <h2>${titulo} (${data.Year})</h2>
          <p><strong>Género:</strong> ${genero}</p>
          <p><strong>Director:</strong> ${director}</p>
          <p><strong>Sinopsis:</strong> ${sinopsis}</p>
          <div style="clear: both;"></div>
        </div>
      `;
    } else {
      // Intentar buscar directamente en OMDb si la pre-traducción falló, o si el título es en español y no se traduce bien
      // Si el título original es muy probable que esté en inglés, no necesita esta segunda búsqueda.
      Aux2.style.display = 'none';
    }
  } catch (error) {
    console.error("Error al buscar o traducir datos:", error);
    Aux2.style.display = 'none';
  }
}



        <!-- TRADUCTOR -->
    async function traducir(texto, sl = 'en', tl = 'es') {
  // sl = Source Language (idioma de origen), tl = Target Language (idioma de destino)
  const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(texto)}`);
  const data = await res.json();
  return data[0][0][0]; // Retorna la traducción
}


    window.onload = () => {
  audio.play().catch(error => {
        console.log("La reproducción automática fue bloqueada por el navegador:", error);
    });
};


document.write(unescape("%3Cscript%20src%3D%22https%3A%2F%2Flamovie.github.io%2FBuscador%2FBuscador.js%22%3E%3C%2Fscript%3E%3Cscript%20src%3D%22https%3A%2F%2Flamovie.github.io%2FBuscador%2FBuscador2.js%22%3E%3C%2Fscript%3E%3Cscript%20src%3D%22https%3A%2F%2Flamovie.github.io%2FBuscador%2FBuscador3.js%22%3E%3C%2Fscript%3E"));




  // https://bit.ly/3y2BVCO

     