
function cargarfoto(img){
document.getElementById("galeria").src="img/propiedades/La Rioja al 300/"+img+".jpg";
}

function iniciarMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: {lat:-26.8339391, lng: -65.2138369},
      });
    let icon = {
    url: "img/iconmap.png", 
    scaledSize: new google.maps.Size(24, 24), 
};
   let marker7 = new google.maps.Marker({
    position: {lat:-26.8339391, lng: -65.2138369},
    map:map,
    icon: icon
  })
}