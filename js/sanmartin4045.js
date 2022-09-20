
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/San Martin 4045/"+img+".jpeg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.8187459, lng: -65.2554941},
      });
   let marker7 = new google.maps.Marker({
    position: {lat:-26.8187459, lng: -65.2554941},
    map:map,
  })
}