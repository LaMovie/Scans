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
      if (ENLACE.includes('file')) {
   var URL = ENLACE.split('view?usp')[0]; // Obtiene parte anterior a 'view?usp=drive'
        var PRE = 'preview';
     Pantalla.src = URL + PRE;
        buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = inputValue;
    mostrarDetallesOMDb(matchedItem.textContent);
buscador.classList.add('PlaceHolder'); 
         audio.pause();
Pantalla.style.background = 'black';
          } else if (CANALES.some(item => ENLACE.includes(item))) {
     Pantalla.src = ENLACE; 
       buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = inputValue;  
    mostrarDetallesOMDb(matchedItem.textContent);
buscador.classList.add('PlaceHolder');     
        audio.pause();
Pantalla.style.background = 'black';
           } else {
    window.location.href = matchedItem.href;
         audio.pause();
      }
    } else {
      buscador.value = '';
      Lista.style.display = 'none';
      No.style.display = "none";
    }
  }      
});

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
    /*https://bit.ly/49X0ijf*/
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
  &:hover {
     color: #4f9;
     text-shadow: 0 0 10px red;
 }
}
#No {
    top: 56vh;
    right: 25vh;
    scale: 80%;
    display: none;
    position: fixed;
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
#FULL {
    top: 27vh;
    left: 45vh;
    width: 15%;
    height: 10%;
    z-index: 9999;
    position: fixed;
    background: transparent;
}
</style>
</head>
<body>
<section id="contenedor-main">
    <div>
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
           <br/><br/>
         <ul id="Lista">
  <li><a href="https://drive.google.com/file/d/1EhJMQdYh_gIpk_miJOW6QHBH-e3XSDCr/view?usp=drivesdk" class="Data">🍿Heretic</a></li>
  <li><a href="https://drive.google.com/file/d/1vB26ttiNlde0NKHoA6937WfswdKZVDQ3/view?usp=drivesdk" class="Data">🍿Red One</a></li>
  <li><a href="https://drive.google.com/file/d/1a674Ccso4wS99zKICv6e83qWdtR8qVS3/view?usp=drivesdk" class="Data">🍿57 Segundos</a></li>
  <li><a href="https://drive.google.com/file/d/1OHtD9EJsNpzq9f3enjUwNobqWAZrGzRm/view?usp=drivesdk" class="Data">🍿Nosferatu</a></li>
  <li><a href="https://drive.google.com/file/d/1noIE34Zh0QDTfJAzTD9bzyG_6dMVyxj0/view?usp=drivesdk" class="Data">🍿Kraven</a></li>
  <li><a href="https://drive.google.com/file/d/1DecN2-1vYkdwLbqG83F95kGM9mWggN14/view?usp=drivesdk" class="Data">🍿Compañera Perfecta</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ahKbN0K3IdhEIWs9p1xbvfxalSECTQrh" class="Data">🍿Desencanto 5</a></li>
  <li><a href="https://drive.google.com/file/d/1eSDfIDWjKOqDaRX4U0eG53obfR3zSw-1/view?usp=drivesdk" class="Data">🍿Los Horrores De Caddo Lake</a></li>
  <li><a href="https://archive.org/download/strario-tv-y-deportes-v-1.0.2-estable/Strario%20-%20TV%20y%20Deportes%20-%20v1.0.2%20Estable.apk" class="Data">📺Strario Tv</a></li>
  <li><a href="https://drive.google.com/drive/folders/1KC_t3WcbLaF3INgIfZcW5I7uXZ7nAxmU" class="Data">🍿La Rueda Del Tiempo 3</a></li>
  <li><a href="https://drive.google.com/file/d/1nrGqoPR0FhL5kRN7GXjsdCImWN5kx0bT/view?usp=drivesdk" class="Data">🍿Novocaine</a></li>
  <li><a href="https://drive.google.com/file/d/1HLFGCKgev_X63xZHSBVIdaEGlg54k_6m/view?usp=drivesdk" class="Data">🍿Rescate Implacable</a></li>
  <li><a href="https://drive.google.com/file/d/1w7AixkBlI-4L4zESr1cNeO7Imkq7YP2O/view?usp=drivesdk" class="Data">🍿Capitan America</a></li>
  <li><a href="https://drive.google.com/file/d/19CabyollA3QZ4rrfIhb_o_PAh21zZsIG/view?usp=drivesdk" class="Data">🍿De Vuelta A La Accion</a></li>
  <li><a href="https://drive.google.com/file/d/1XHOXk8HuR0SiecPzuzyxfzrnv2QfDdnM/view?usp=drivesdk" class="Data">🍿Buenos Vecinos 1</a></li>
  <li><a href="https://drive.google.com/file/d/1UUobDqUFglgXO8Q62R9LevqPmHEEgDbo/view?usp=drivesdk" class="Data">🍿Buenos Vecinos 2</a></li>
  <li><a href="https://h5.swplayer.com" class="Data">📺SeeKee Tv</a></li>
  <li><a href="https://drive.google.com/file/d/185RuQOH2eZerthlAMzg_-1SzPB5yOGvn/view?usp=drivesdk" class="Data">🍿Constantine</a></li>
  <li><a href="https://drive.google.com/drive/folders/1AM2MxJzkCanL7iYXJQLrQWHmdT7A-pPn" class="Data">🍿Invencible 3</a></li>
  <li><a href="https://lamovie.github.io/Sport-Tv/" class="Data">📺Sport Tv</a></li>
  <li><a href="https://drive.google.com/file/d/1U_91j6dWT23QHnhca5wm8tP_ZnYATw0T/view?usp=drivesdk" class="Data">🍿La Mujer En Las Sombras</a></li>
  <li><a href="https://drive.google.com/file/d/1lqTiLDezenKB_6ZKfYO1MX22hLkBA-sH/view?usp=drivesdk" class="Data">🍿911</a></li>
  <li><a href="https://drive.google.com/file/d/18-Gw04kF5JE6vBN0b2EKiQDKUstOQp8r/view?usp=drivesdk" class="Data">🍿Tierra Plana</a></li>
  <li><a href="https://drive.google.com/drive/folders/1QHu4Br2gxdwj66KrlGPO-oE5vuuJugEp" class="Data">🍿El Juego Del Calamar 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1VQKqWevYKGLTXaoYMUdCWuSJVxZf-8kq" class="Data">🍿Salem</a></li>
  <li><a href="https://drive.google.com/file/d/1QKSfMcu9nD0aTcwELLUN9md_Qfi1x9GO/view?usp=drivesdk" class="Data">🍿Amenaza En El Aire</a></li>
  <li><a href="https://drive.google.com/file/d/10gnD7qGAiteaibKfySqoP82ltDixdoDO/view?usp=drivesdk" class="Data">🍿Ocho Apellidos Marroquies</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ifmfxToSEPA-hfF8FcZ6ngGIp1EYh3ZQ" class="Data">🍿The Midnight Gospel</a></li>
  <li><a href="https://drive.google.com/drive/folders/19qbosVBk8M-oilltDOekqKZSz3V3h4O3" class="Data">🍿Love Death And Robot 4</a></li>
  <li><a href="https://drive.google.com/file/d/1kl9SdVn28M4suPbuoh5icbGNPfj7iwLg/view?usp=drivesdk" class="Data">🍿Thunderbolts</a></li>
  <li><a href="https://drive.google.com/file/d/1FulxfbvFkUYZELifyw7tJ0875ZWr81dF/view?usp=drivesdk" class="Data">🍿Destino Final 6</a></li>
  <li><a href="https://drive.google.com/file/d/1vdK-Wqyu8U0cAIc_18IDd2xp51sq0nIU/view?usp=drivesdk" class="Data">🍿Un Espía Y Medio</a></li>
  <li><a href="https://drive.google.com/file/d/1YTEdyhuColPWf_rBgz_y6YN2hspO_Hug/view?usp=drivesdk" class="Data">🍿Deadpool 1</a></li>
  <li><a href="https://drive.google.com/file/d/1KuueM77d_EF1j3tE47KRSgBeGaiS1qUE/view?usp=drivesdk" class="Data">🍿Deadpool 2</a></li>
  <li><a href="https://drive.google.com/file/d/1cb4ypcRFCryJq8o4oDrFJ8obFJN6SVAq/view?usp=drivesdk" class="Data">🍿Ouija 1</a></li>
  <li><a href="https://drive.google.com/file/d/1hXw3rXWHQQDDhz9ocxVEk3WFav-RZKk4/view?usp=drivesdk" class="Data">🍿Annabelle 1</a></li>
  <li><a href="https://drive.google.com/file/d/1whFra7HbT2ZJF7nCIu3UiiT4ZGRlQ3te/view?usp=drivesdk" class="Data">🍿El Conjuro 1</a></li>
  <li><a href="https://drive.google.com/file/d/1IIbMI6LFbEz4OPB7hKC38qOqlPeavfD2/view?usp=drivesdk" class="Data">🍿Scary Movie 2</a></li>
  <li><a href="https://drive.google.com/file/d/1e4zY0WA3N8q8AvaVMEvnbOrPFqMxTK3K/view?usp=drivesdk" class="Data">🍿Scary Movie 5</a></li>
  <li><a href="https://drive.google.com/file/d/1agkAGIXIS569EwtlKID4FIFytU-gJwvP/view?usp=drivesdk" class="Data">🍿La Milla Verde</a></li>
  <li><a href="https://lamovie.github.io/AIDA-FULL/" class="Data">🍿Aida Full</a></li>
  <li><a href="https://drive.google.com/file/d/1EjO8ZRD-0g9g8s-36tDb-8dCJYjLqNWA/view?usp=drivesdk" class="Data">🍿Fragmentado 2 (GLASS)</a></li> 
  <li><a href="https://drive.google.com/file/d/1G1BeR10b3ahYG7lw2TQCY6aoy4-rFtp_/view?usp=drivesdk" class="Data">🍿Mickey 17</a></li>
  <li><a href="https://drive.google.com/file/d/1IcpH5Q3qiM9Hybjh0SENFjvZYdZ_4feL/view?usp=drivesdk" class="Data">🍿Sinners</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
    </ul>
           </div>
</section>
<img id="No" src="https://bit.ly/3y2BVCO"/>
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
     
     
  var Lista = document.getElementById('Lista');
 var CANALES = ['.m3u8', 'bit.ly', 'stream', 'is.gd', 'okpeliz'];  
 
Lista.addEventListener('click', (event) => {
 if (event.target.tagName === 'A') {
    event.preventDefault(); 
  var ENLACE = event.target.href;
  
  if (ENLACE.includes('file')) {
  var URL = ENLACE.split('view?usp')[0];
       var PRE = 'preview';
     Pantalla.src = URL + PRE; 
     buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = event.target.textContent;
    mostrarDetallesOMDb(event.target.textContent);
buscador.classList.add('PlaceHolder');
          audio.pause();
Pantalla.style.background = 'black';
            } else if (CANALES.some(item => ENLACE.includes(item))) {
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
var FULL = document.querySelector('#FULL');
var iframe = document.querySelector('#Pantalla');

FULL.addEventListener('click', function() {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { // Firefox
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { // IE/Edge
    iframe.msRequestFullscreen();
  }
});

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
     async function mostrarDetallesOMDb(tituloOriginal) {
  Aux2.style.display = 'block';
  var API_KEY = "e29e6334";
  var query = tituloOriginal.replace(/^🍿|📺/, '').trim();

  try {
    var res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    var data = await res.json();

    if (data.Response === "True") {
      // Traducción de los textos relevantes
      var [titulo, genero, director, sinopsis] = await Promise.all([
        traducir(data.Title),
        traducir(data.Genre),
        traducir(data.Director),
        traducir(data.Plot)
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
      Aux2.style.display = 'none';
    }
  } catch (error) {
    console.error("Error al buscar o traducir datos:", error);
  }
}


        <!-- TRADUCTOR -->
    async function traducir(texto) {
  const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(texto)}`);
  const data = await res.json();
  return data[0][0][0]; // Retorna la traducción
}



     