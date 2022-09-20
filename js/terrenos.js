function iniciarMap(){
    var coord = {lat:-26.6319 ,lng: -65.2089}; 
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}