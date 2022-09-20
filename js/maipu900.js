
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/Maipu al 900/"+img+".jpg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat: -26.817734, lng: -65.204734},
      });
   let marker7 = new google.maps.Marker({
    position: {lat: -26.817734, lng: -65.204734},
    map:map,
  })
}
