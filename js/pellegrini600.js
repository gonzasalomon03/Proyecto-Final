
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/Pellegrini al 600/"+img+".jpeg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.8348927, lng: -65.2285412},
      });
   let marker7 = new google.maps.Marker({
    position: {lat:-26.8348927, lng: -65.2285412},
    map:map,
  })
}