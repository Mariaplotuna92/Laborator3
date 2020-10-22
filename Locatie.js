get_geo_position();
function on_succes(position)
{
	document.getElenemtById("latitude").innerHTML="Latitude= "+position.coords.latitude;
	document.getElenemtById("longitude").innerHTML="Longitude= "+position.coords.longitude;
	document.getElenemtById("acc").innerHTML="Accuracy = "+position.coords.accuracy;
	document.getElenemtById("altitude").innerHTML="Altitude= "+position.coords.altitude;
	var latlon =position.coords.latitude +"," + position.coords.longitude;
	var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=AIzaSyDI1eobaUB3ozeGPYGC_JTqwmvYpUABpDY";
	document.getElenemtById("map").innerHTML= "<img src='"+img_url+"'>";
}
		function on_error(e)
		{
			document.getElenemtById("text").innerHTML=e.message;
		}
		var geo_params={
		enableHighAccuracy:true,
		timeout:1000,
		maximumAge:0
	};
	function get_geo_position()
	{
		var geo=navigator.geolocation;
		geo.getCurrentPosition(on_succes,on_error,geo_params)
	}
	
		