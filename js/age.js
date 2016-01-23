
    function calculateAge()
    {
    var bday=parseInt(document.forms[0].year.value);
    var now = new Date();
    tage=(now.getFullYear());
    alert("you are:"+(tage-bday)+ " years old");
}

