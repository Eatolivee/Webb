function validateForm() {
	var a = $("#nama_user").val();
	var b = $("#Quest2").val();
	if (a == "") {
		Swal.fire({
			customClass: {
				title: 'custom-title-class',
			},
			title: 'Nama Kamu?',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: 'black',
			backdrop: `black left top no-repeat`,
			width: 300,
			timer: 1500,
			timerProgressBar: false,
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: false,
		});
		return false;
	}
	if (b == "") {
		Swal.fire({
			customClass: {
				title: 'custom-title-class',
			},
			title: 'Ada yg kosong!',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: 'black',
			backdrop: `black left top no-repeat`,
			width: 300,
			timer: 1500,
			timerProgressBar: false,
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: false,
		});
		return false;
	}
}

function myFunction() {
	var name = document.getElementById("nama_user").value;
	document.getElementById("greeting").innerHTML = name; 
}

function nonTo() {document.getElementById('myModal').style.display = "none";}

function showDiv() {document.getElementById('myModal2').style.display = "block";}

function play() {var audio = new Audio('laguu.mp3');audio.play();}

var i=0,text;
text = ""
var u=0,text2;
text2 = ""

function ketik() {
	if(i<text.length){
		document.getElementById("text").innerHTML += text.charAt(i);
		i++;
		setTimeout(ketik,100);
	}
	if(i==text.length){
		ketikk();}
	}
	function ketikk() {
		if(u<text2.length){
			document.getElementById("text2").innerHTML += text2.charAt(u);
			u++;
			setTimeout(ketikk,200);
		}
		
	}

	async function mulai(){
		await Swal.fire({
			customClass: {
				title: 'custom-title-class',
			},
			title: 'Thanks😊',
			showClass: {popup: 'animate__animated animate__bounce'},
			hideClass: {popup: 'animate__animated animate__zoomOut'},
			background: 'black',
			backdrop: `black left top no-repeat`,
			width: 300,
			//timer: 1500,
			timerProgressBar: false,
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: true,
		});

		var name = document.getElementById("nama_user");
		text = "															Terimaksih "+ name.value +"					kau tahu selama ini aku kepikiran tentang kamu,						tentang bagaiman aku bisa melupakanmu dari pikiranku.						setiap malam bahkan setiap hari aku selalu ingat dirimu,					14 november 2022 sampai sekarang sama saja dan tidak ada sedikitpun berubah,						aku masih memikirkanmu";
		text2 = "sejak 04 november 2021 sampai detik ini,						aku masih memikirkanmu";
		ketik();showDiv();nonTo();play();
	}
