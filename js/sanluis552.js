
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/San Luis 552/"+img+".jpeg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.836004, lng: -65.218913},
      });
   let marker7 = new google.maps.Marker({
    position: {lat:-26.836004, lng: -65.218913},
    map:map,
  })
}