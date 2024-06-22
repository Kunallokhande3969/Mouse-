var main  = document.querySelector("#main");
 var crcr = document.querySelector("#crcr")


  main.addEventListener("mousemove",function(dets){
    console.log(dets);   
     crcr.style.left = dets.x +"px";
     crcr.style.top = dets.y +"px";
  })