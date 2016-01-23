
		
    function calculateSupply()
    {
    var age=parseInt(document.forms[1].age.value);
    var amt=parseInt(document.forms[1].amount.value);
    alert("You will need:"+((age*amt).toFixed( 2 ))+ "to last you until the ripe old age of"+(age));
    }

