$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            var table_body = "";
            $.each(data, function(k, v) {
                table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
            });
            $("#GeoResults").html(table_body);
        });
        /*
$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var long;
            var lat;
            long = position.coords.longitude;
            lat = position.coords.latitude;
 
  
  
  var api = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=979f8a61ab16136b2c3386c68663557b';
       
            $.getJSON(api, function (data) {
                var fTemp;
                var cTemp;
                var kTemp;
      
                var weatherType = data.weather[0].description;
                kTemp = data.main.temp;
                var windSpeed = data.wind.speed;
                var city = data.name;
        
        
        fTemp = (kTemp) * (9 / 5) - 459.67;
        cTemp = kTemp - 273;
        
        console.log(city);
                $("#city").html(city);
                $("#weatherType").html(weatherType);
                $("#fTemp").html(fTemp);
            });

        });
    }*/