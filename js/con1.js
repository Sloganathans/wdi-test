
		
    function celsiusToFahrenheit()
    {
    var temp=parseInt(document.forms[3].temp.value);
    var a=temp-32;
    var b=a*5;
    var c=b/9;
    alert(" fahrenheit and output :"+( temp)+ " °C is" +(c)+" °F");
    }
    function fahrenheitToCelsius()
    {
    var temp=parseInt(document.forms[3].temp.value);
    var a=temp*9;
    var b=a/5;
    var c=b+32;
    alert("celsius and output :"+( temp)+ " °F is" +(c)+" °C");
    }

    
