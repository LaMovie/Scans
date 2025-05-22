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
  { NAME: "🍿SCARY MOVIE 4", URL: "https://akm-cdn-play-web.swplayer.com/00b64ae32fd171f0bfdd87c6371c0102/ba63e4137de945ef84286230784492ac-c010099bbd28173b4002c96cf5be02ab-sd.m3u8?hdnts=exp=1747946782_acl=/00b64ae32fd171f0bfdd87c6371c0102/*_hmac=ed26a8555f00d229be4d3b3f27df6ce52897ba64a3c926afce7aa27dd7a4dbfa" },
  { NAME: "🍿EL BESO DEL DRAGON", URL: "https://akm-cdn-play-web.swplayer.com/c0a5d1fb060171f080045114c0db0102/71fc19c7686d467189edcc44b54846c6-9f65f2209507f4d428dd5f0440d9c8f2-sd.m3u8?hdnts=exp=1748027744_acl=/c0a5d1fb060171f080045114c0db0102/*_hmac=d5a59e7d604518f34430d200ae64d6865b46fbc8ded2d758aa274574f5ab0427" }, 
  { NAME: "🍿FRAGMENTADO 2", URL: "https://akm-cdn-play-web.swplayer.com/80135ea4d94e71ef9e535014c1ca0102/92eaa477992947429ce4cfbdcb907126-cb9d9de9ec4604faa0451477c885b8a5-sd.m3u8?hdnts=exp=1747968054_acl=/80135ea4d94e71ef9e535014c1ca0102/*_hmac=459f31be0d379f36977577ab9c180512faee9bf6867227f2538b2362eee82b9e" },
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

  
  
  
  
  
  
