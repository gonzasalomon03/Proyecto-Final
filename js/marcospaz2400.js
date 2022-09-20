
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/Marcos Paz al 2400/"+img+".jpeg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.815097, lng: -65.232108},
      });
   let marker7 = new google.maps.Marker({
    position: {lat:-26.815097, lng: -65.232108},
    map:map,
  })
}
