document.addEventListener("keyup", e=>{
 var Toggle = document.querySelector('.switch');
 
 var Mix = ["gold", "aqua", "#4f9", "fuchsia", "#f00060", "orange", "violet"];
 
 var Colors = Mix[Math.floor(Math.random() * Mix.length)];
 
      var Input = e.target.value.toLowerCase().trim();
      var Data = document.querySelectorAll(".Data");
      let foundMatch = false;
 
  if (e.target.matches("#buscador")){          
   
      Lista.style.display = Input === '' ? "none" : "block";
      
 Toggle.style.background = Colors;
 
  Data.forEach(item => {
        if (item.textContent.toLowerCase().includes(Input)) {
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
      var inputValue = e.target.value.toLowerCase().trim();
      var matchedItem = [...document.querySelectorAll(".Data")].find(
        item => item.textContent.toLowerCase() === inputValue
      );

      if (matchedItem) {
        window.location.href = matchedItem.href;
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
    width: 100%;
    padding: 10px;
    outline: none;
    font-weight: 600;
    border-radius: 20px;
    background: gold;
    border: 2px solid red;   
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
    height: 60vh;
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
    scale: 80%;
    display: none;
    position: fixed:
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
         <ul id="Lista">
  <li><a href="https://drive.google.com/file/d/1EhJMQdYh_gIpk_miJOW6QHBH-e3XSDCr/view?usp=drivesdk" class="Data">🍿Heretic</a></li>
  <li><a href="https://drive.google.com/file/d/1E1AprgH-FruccueU-9HSwcZ0_pPAxFbC/view?usp=drivesdk" class="Data">🍿Red One</a></li>
  <li><a href="https://drive.google.com/file/d/1a674Ccso4wS99zKICv6e83qWdtR8qVS3/view?usp=drivesdk" class="Data">🍿57 Segundos</a></li>
  <li><a href="https://drive.google.com/file/d/1In2MfQ8SyBZLbK5maAUgF2oX28qjeQG-/view?usp=drivesdk" class="Data">🍿Nosferatu</a></li>
  <li><a href="https://drive.google.com/file/d/1noIE34Zh0QDTfJAzTD9bzyG_6dMVyxj0/view?usp=drivesdk" class="Data">🍿Kraven</a></li>
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
     
     
     
     
     
     
     