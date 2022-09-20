let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




function iniciarMap(){
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 12,
      center: {lat:-26.8348735,lng: -65.2307359},
      });
    var icon = {
    url: "img/iconmap.png", 
    scaledSize: new google.maps.Size(24, 24), 
};
  // marcador 1
    let marker = new google.maps.Marker({
    content: `
<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="sanmartin4045.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/San Martin 4045/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>San Martin 4045</b></h3>
      <p>
         Duplex<br>
           Habitaciones: 3<br>
        </p>
    </a>
</div>`,
    position: {lat:-26.8187459, lng: -65.2554941},
    map:map,
    icon: icon
  })

  // marcador 2
   let marker1 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="santiago941.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/Santiago al 900/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>Santiago 941</b></h3>
      <p>
        Dimensiones 7m x 24m<br>
        Area: 168m²<br>
        Para restaurar o demoler<br><br>
</p>
    </a>
</div>`,
    position: {lat: -26.822804, lng: -65.209708}, 
    map:map,
    icon: icon
  }) 
   // marcador 3
   let marker2 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="marcospaz2400.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/Marcos Paz al 2400/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>Marcos Paz 2451</b></h3>
 <p>
                    Dos casas en un mismo terreno<br>
                    Dimensiones: 10mx53.35m<br>
                    Area: 533,5m²
                </p>
    </a>
</div>`,
    position: {lat:-26.815097, lng: -65.232108},
    map:map,
    icon: icon
  })
   // marcador 4 
   let marker3 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="santabarbara.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/Santa Barbara Hills/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>Santa Bárbara Hills</b></h3>
<p>
                    Dimensiones 19,6m x 27,9m<br>
                    Area: 546m²<br>
                    Habitaciones: 3 (1 en suite)
                </p>
    </a>
</div>`,
    position: {lat:-26.859556, lng: -65.3165715},
    map:map,
    icon: icon
  })
  // marcador 5 
   let marker4 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="pellegrini600.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/Pellegrini al 600/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>Pellegrini 646</b></h3>
<p>
                    Dimensiones 12.5m x 18m<br>
                    Area: 170m²<br>
                    Habitaciones: 3<br><br>
                </p>
    </a>
</div>`,
    position: {lat:-26.8348927, lng: -65.2285412},
    map:map,
    icon: icon
  })
   // marcador 6 
  let marker5 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="santiago118.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/Santiago 118/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>Santiago 118</b></h3>
      <p>
                    Oficinas, piso 7<br>
                    Semipiso o piso completo<br>
                    100m² / 200m²<br><br>
                </p>
    </a>
</div>`,
    position: {lat:-26.8254231, lng: -65.1975611},
    map:map,
    icon: icon
  })
   // marcador 7
   let marker6 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="maipu900.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/Maipu al 900/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>Maipú 900</b></h3>
   <p>
                    Local comercial<br>
                    Area: 266,7m²<br><br>
                </p>
    </a>
</div>`,
    position: {lat: -26.817734, lng: -65.204734},
    map:map,
    icon: icon
  })
   // marcador 8
   let marker7 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="lariojaal300.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/La Rioja al 300/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>La Rioja 327</b></h3>
   <p>
                    Area: 42,31m²<br>
                    Monoambiente<br><br>
                </p>
    </a>
</div>`,
    position: {lat:-26.8339391, lng: -65.2138369},
    map:map,
    icon: icon
  })
    // marcador 9
    let marker8 = new google.maps.Marker({
    content: `<div style="display: flex; flex-direction: column; width: 160px; height: 200px; margin: 0; padding: 0;">
  <a href="sanluis552.html" style="border:solid 5px #083d61; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-evenly; width: 100%; height: 100%; text-decoration: none; color: #fff; background-color:#083d61;">
      <img src="img/propiedades/San Luis 552/presentacion.jpg" style="width: 100%; height: auto; margin: 0 auto; border-radius: 5px;">
      <h3 style="text-align: center;"><b>San Luis 552</b></h3>
      <p>
                    Departamentos de 1 dormitorio<br>
                    Desde 50m² hasta 65m²<br>
                    Sum y pileta<br>
                </p>
    </a>
</div>`,
    position: {lat:-26.836004, lng: -65.218913}, 
    map:map,
    icon: icon
  })



    let infoWindowOptions = {
      content: marker.content,
      position: marker.position,
    }
    let infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    let infoWindowOpenOptions = {
      map: map,
      anchor: marker
    }



   let infoWindowOptions1 = {
      content: marker1.content,
      position: marker1.position,
    }
    let infoWindow1 = new google.maps.InfoWindow(infoWindowOptions1);
    let infoWindowOpenOptions1 = {
      map: map,
      anchor: marker1
    }



    let infoWindowOptions2 = {
      content: marker2.content,
      position: marker2.position,
    }
    let infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);
    let infoWindowOpenOptions2 = {
      map: map,
      anchor: marker2
    }



    let infoWindowOptions3 = {
      content: marker3.content,
      position: marker3.position,
    }
    let infoWindow3 = new google.maps.InfoWindow(infoWindowOptions3);
    let infoWindowOpenOptions3 = {
      map: map,
      anchor: marker3
    }



    let infoWindowOptions4 = {
      content: marker4.content,
      position: marker4.position,
    }
    let infoWindow4 = new google.maps.InfoWindow(infoWindowOptions4);
    let infoWindowOpenOptions4 = {
      map: map,
      anchor: marker4
    }



    let infoWindowOptions5 = {
      content: marker5.content,
      position: marker5.position,
    }
    let infoWindow5 = new google.maps.InfoWindow(infoWindowOptions5);
    let infoWindowOpenOptions5 = {
      map: map,
      anchor: marker5
    }



    let infoWindowOptions6 = {
      content: marker6.content,
      position: marker6.position,
    }
    let infoWindow6 = new google.maps.InfoWindow(infoWindowOptions6);
    let infoWindowOpenOptions6 = {
      map: map,
      anchor: marker6
    }



    let infoWindowOptions7 = {
      content: marker7.content,
      position: marker7.position,
    }
    let infoWindow7 = new google.maps.InfoWindow(infoWindowOptions7);
    let infoWindowOpenOptions7 = {
      map: map,
      anchor: marker7
    }



     let infoWindowOptions8 = {
      content: marker8.content,
      position: marker8.position,
    }
    let infoWindow8 = new google.maps.InfoWindow(infoWindowOptions8);
    let infoWindowOpenOptions8 = {
      map: map,
      anchor: marker8
    }
     


     google.maps.event.addListener(marker, "click", ()=>{
      infoWindow.open(infoWindowOpenOptions);
     })


     google.maps.event.addListener(marker1, "click", ()=>{
      infoWindow1.open(infoWindowOpenOptions1);
     })


     google.maps.event.addListener(marker2, "click", ()=>{
      infoWindow2.open(infoWindowOpenOptions2);
     })


     google.maps.event.addListener(marker3, "click", ()=>{
      infoWindow3.open(infoWindowOpenOptions3);
     })


     google.maps.event.addListener(marker4, "click", ()=>{
      infoWindow4.open(infoWindowOpenOptions4);
     })


     google.maps.event.addListener(marker5, "click", ()=>{
      infoWindow5.open(infoWindowOpenOptions5);
     })


     google.maps.event.addListener(marker6, "click", ()=>{
      infoWindow6.open(infoWindowOpenOptions6);
     })

     google.maps.event.addListener(marker7, "click", ()=>{
      infoWindow7.open(infoWindowOpenOptions7);
     })

     google.maps.event.addListener(marker8, "click", ()=>{
      infoWindow8.open(infoWindowOpenOptions8);
     })

}
