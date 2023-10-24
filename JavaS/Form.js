//const data = document.getElementById("dataC");
const forma = document.getElementById("forma");
const SMS = document.getElementById("SMS");
const rad = document.getElementsByName("radio");
const v = document.getElementById("v");
const t = document.getElementById("t");
const d = document.getElementById("d");
const otv = document.getElementById("otv");
const calendar = document.getElementById("calendar");

//data.classList.add("unvisible"); - Задать переменной класс (add-добавить. remove-удалить)

for (let i=0; i<rad.length; i++)
{
	rad[i].addEventListener("change",function()
	{
		if (this.value=="otvet")
		{
			v.classList.add("unvisible");
			t.classList.add("unvisible");
			d.classList.add("unvisible");
			}
			if (this.value=="Другое")
			{
				SMS.classList.remove("unvisible");
				v.classList.add("unvisible");
				t.classList.add("unvisible");
				otv.classList.add("unvisible");
			}
			if (this.value=="Meet")
			{
				calendar.classList.remove("unvisible");
				t.classList.add("unvisible");
				otv.classList.add("unvisible");
				d.classList.add("unvisible");
			}
			if (this.value=="Telephon")
			{
				SMS.classList.remove("unvisible");
				v.classList.add("unvisible");
				otv.classList.add("unvisible");
				d.classList.add("unvisible");
				}
	});
}

	
forma.addEventListener("submit", function (event)
{
	
	event.preventDefault();
	console.log("cfyvyc");
	
	const nameValid=Validname();
	const emailValid=Validemail();
	const numberValid=Validnumber();
	const dateValid=Validdate();
	const obrValid=Validobr();
	const RadDValid=ValidRadD();
	const RadNValid=ValidRadN();
	const RadEValid=ValidRadE();
	const RadNoValid=ValidRadNo();
	
	
	console.log("Validnumber",Validnumber);
	
	
	if (nameValid && emailValid && numberValid && dateValid && obrValid && RadDValid && RadNValid && RadEValid && RadNoValid)
	{
		alert("Сработало");
		forma.Submit;
	}
	
	function Validname() {
		return true;
	}
	
	function Validemail() {
		return true;
	}
	
	function Validnumber() {
		return true;
	}
	
	function Validdate() {
		return true;
	}
	
		function Validobr() {
		return true;
	}
	
	function ValidRadD()
	{
		const otvetnumber=document.getElementById("SMS");
		const otvetnumberRegex=/^[^\S@]+@[^\S@]+\.[^\S@]+$/;
		if (!rad[0].checked)
		{
			return false;  //равносильно break
		}
		if (otvetnumber==="")
		{
			alert("Введите номер");
			return false;			
		}
		else if (!otvetnumberRegex.test(otvetnumber))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function ValidRadN()
	{
		if (!rad[1].checked)
		{
			return false;  //равносильно break
		}
		const name=document.getElementById("name");
		if (name==="")
		{
			alert("Введите ФИО");
			return false;			
		}
		return true;
	}
	function ValidRadE()
	{
		console.log("drytuirt");
		
		const otvettext=document.getElementById("sms").value.trim();
		const otvettextRegex=/^[А-Яа-я0-9.!?()]+$/;
		if (!rad[2].checked)
		{
			return false;  //равносильно break
		}
		console.log("rdytfhjkl");
		if (otvettext==="")
		{
			alert("Введите сообщение");
			return false;			
		}
		else if (!otvettextRegex.test(otvettext))
		{
			return false;
		}
			return true;
		
	}
	
	function ValidRadNo()
	{
		if (!rad[3].checked)
		{
			return false;  //равносильно break
		}
		const name=document.getElementById("name");
		if (name==="")
		{
			alert("Введите ФИО");
			return false;			
		}
		return true;
	}
});

