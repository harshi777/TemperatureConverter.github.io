function calcltemp(){
    event.preventDefault();
    var x1 = document.getElementById('sel1');
    var y1 = x1.options[x1.selectedIndex].value;
    var x2 = document.getElementById('sel2');
    var y2 = x2.options[x2.selectedIndex].value;
    var temp = document.getElementById('tem').value;
    if(temp == '' )
    {
        alert("Please enter a valid value in the temperature field.");
    }
    if ( y1 == 'Celsius' && y2 == 'Farenhite' )
    {
        result = (temp*1.8)+32 ;
        document.getElementById('result').innerHTML = result + "°Farenhite";
    }
    else if ( y1 == 'Farenhite' && y2 == 'Celsius' )
    {
        result = (temp-32)*(5/9);
        document.getElementById('result').innerHTML = result + "°Celsius";
    }
    else if ( y1 == 'Celsius' && y2 == 'Kelvin')
    {
        result = temp + 273.15 ;
        document.getElementById('result').innerHTML = result + "°K";
    }
    else if ( y1 == 'Farenhite' && y2 == 'Kelvin')
    {
        result = (((temp-32)*5)/9)+273.15;
        document.getElementById('result').innerHTML = result + "°K";
    }
    else if ( y1 == 'Kelvin' && y2 == 'Celsius')
    {
        result = temp-273.15 ;
        document.getElementById('result').innerHTML = result + "°Celsius";
    }
    else if ( y1 == 'Kelvin' && y2 == 'Farenhite')
    {
        result = (temp-273.15)*(9/5)+32;
        document.getElementById('result').innerHTML = result + "°Farenhite";
    }
    else if (y1 == y2 & temp != '')
    {
        document.getElementById('result').innerHTML = temp + "°" + y1;
    }
}