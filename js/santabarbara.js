
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/Santa Barbara Hills/"+img+".jpeg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.8148685, lng: -65.2366355},
      });
   let marker7 = new google.maps.Marker({
    position: {lat:-26.8148685, lng: -65.2366355},
    map:map,
  })
}