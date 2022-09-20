
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/Santiago al 900/presentacion.jpg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat: -26.822804, lng: -65.209708},
      });
   let marker7 = new google.maps.Marker({
    position: {lat: -26.822804, lng: -65.209708},
    map:map,
  })
}