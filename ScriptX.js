document.body.style.background = '#000';
      
var I = document.createElement("input");
I.id = 'In';
I.type = 'text';
I.style.width = '65%';
I.style.height = '5vh';
I.style.outline = 'none';
I.style.color = '#fff';
I.style.fontWeight = 'bold';
I.style.background = 'transparent';
I.style.borderRadius = '20px';
I.style.border = '2px solid red';
  // document.body.append(I);
  
var F = document.createElement("iframe"); 
F.id = 'Pantalla';
F.style.width = '90%';
F.style.height = '35vh';
F.style.borderRadius = '20px';
F.style.border = '2px solid blue';
  document.body.append(F);
  
var D = document.createElement("div"); 
D.id = 'Aux';
   document.body.append(D);
  
var D2 = document.createElement("div"); 
D2.id = 'Aux2';
   document.body.append(D2);
  
 
var SCT = document.createElement("script");
SCT.src = "Script.js";
document.body.append(SCT); 










