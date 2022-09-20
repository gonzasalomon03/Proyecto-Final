
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/Santiago 118/"+img+".jpeg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.8254231, lng: -65.1975611},
      });
   let marker7 = new google.maps.Marker({
    position: {lat:-26.8254231, lng: -65.1975611},
    map:map,
  })
}
