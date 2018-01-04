function cal(x)
{
	
	switch(x)
	{
		case 1:document.getElementById("symbol").innerHTML="+";
				var num1=document.getElementById("num1").value;
				var num2=document.getElementById("num2").value;
				var a=Number(num2) + Number(num1);
				document.getElementById("ans").value=a;
		break;
		case 2:document.getElementById("symbol").innerHTML="-";
				var num1=document.getElementById("num1").value;
				var num2=document.getElementById("num2").value;
				document.getElementById("ans").value=num1-num2;
		break;
		case 3:document.getElementById("symbol").innerHTML="*";
				var num1=document.getElementById("num1").value;
				var num2=document.getElementById("num2").value;
				document.getElementById("ans").value=num1*num2;
		break;
		case 4:document.getElementById("symbol").innerHTML="/";
				var num1=document.getElementById("num1").value;
				var num2=document.getElementById("num2").value;
				document.getElementById("ans").value=num1/num2;
		break;
	}
}