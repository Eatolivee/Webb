function validateForm() {
	var a = $("#nama_user").val();
	var b = $("#Quest2").val();
	var c = $("#Quest3").val();
	if (a == "") {
		Swal.fire({
			customClass: {
				title: 'custom-title-class',
			},
			icon: 'question',
			title: 'Nama Kamu?',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: '#748a86',
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
			icon: 'question',
			title: 'Hobby Kamu?',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: '#748a86',
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
	if (c == "") {
		Swal.fire({
			customClass: {
				title: 'custom-title-class',
			},
			icon: 'question',
			title: 'Harus diisi, Ok?',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: '#748a86',
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

function nonTo() {document.getElementById('myModal2').style.display = "none";}

function showDiv() {document.getElementById('myModal3').style.display = "block";}

function iloveu() {if(u==text2.length){
	document.getElementById('sp1').style.display = "none";
	document.getElementById('sp2').style.display = "block";}
}

function fotoKt() {
	document.getElementById('ftAk').style.opacity = "1";
}

var i=0,text;
text = ""
var u=0,text2;
text2 = ""
var o=0,text3;
text3 = "...                                     "
var a=0,textakhir;

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
		if(u==text2.length){
			siap();iloveu();
			document.getElementById('lanjut').style.display = "block";
		}
	}

	function lanjut(){
		document.getElementById('lanjut').style.display = "none";
		document.getElementById('text').style.display = "none";
		document.getElementById('text2').style.display = "none";
		document.getElementById("text3").innerHTML = "&#128155;&#128155;";ketikakhir();}

		function ketikakhir() {
			if(a<textakhir.length){
				document.getElementById("textakhir").innerHTML += textakhir.charAt(a);
				a++;
				setTimeout(ketikakhir,120);
			}
			if(a==textakhir.length){
				fotoKt();
				document.getElementById("text3").innerHTML = "muachh &#10084;";
				document.getElementById("textakhir").innerHTML = "" + textakhir + emotakhir;
			}
		}
		async function siap() {
			if(o<text3.length){
				document.getElementById("text3").innerHTML += text3.charAt(o);
				o++;
				setTimeout(siap,80);
			}
			if(o==text3.length){
			}   
		}

		document.getElementById("sp1").innerHTML = "Hai Diva cangtip!"

		async function mulai(){
			await Swal.fire({
				customClass: {
					title: 'custom-title-class',
				},
				icon: 'success',
				title: 'Thank you😊',
				showClass: {popup: 'animate__animated animate__bounce'},
				hideClass: {popup: 'animate__animated animate__zoomOut'},
				background: 'black',
				backdrop: `black left top no-repeat`,
				allowOutsideClick: false,
				showCancelButton: false,
				confirmButtonColor: '#d33',
				confirmButtonText: 'oke',
			});

			document.getElementById("sp1").innerHTML = "&#10084;";
			var name = document.getElementById("nama_user");
			text = "Gooddddddddddddddddddddddddddddddddd    "+ name.value +"            ddddddddddddddddddd!";
			text2 = "Selamattttttttttttttttttt                 tttttttttttttttttttttt";
			textakhir = "kalauuuuuuuuuuuuuuu              uuuuuuuuuuuuuuuuuuu" ;
			emotakhir = "😉";
			ketik();showDiv();nonTo();
		}

		function myFunction() {
			var name = document.getElementById("nama_user").value;
			document.getElementById("greeting").innerHTML = name; 
		}

		function quest1() {
			Swal.fire({
				customClass: {
					title: 'custom-title-class',
				},
				icon: 'info',
				title: 'Nama Kamu siapa?',
				background: '#332f28',
				showClass: {popup: 'animate__animated animate__zoomIn'},
				hideClass: {popup: 'animate__animated animate__zoomOut'},
				backdrop: `black left top no-repeat`,
				width: 400,
				allowOutsideClick: false,
				showCancelButton: false,
				showConfirmButton: true,
				confirmButtonText: 'Jawab',
				confirmButtonColor: '#332f28',
			});
		}
		function quest2() {
			Swal.fire({
				customClass: {
					title: 'custom-title-class',
				},
				icon: 'info',
				title: 'Hobby Kamu apa? kalo aku hobinya ngehayalin Kamu! hehe iyaa serius',
				background: '#332f28',
				showClass: {popup: 'animate__animated animate__zoomIn'},
				hideClass: {popup: 'animate__animated animate__zoomOut'},
				backdrop: `black left top no-repeat`,
				width: 400,
				allowOutsideClick: false,
				showCancelButton: false,
				showConfirmButton: true,
				confirmButtonText: 'bacot!',
				confirmButtonColor: '#332f28',
			});
		}
		function quest3() {
			Swal.fire({
				customClass: {
					title: 'custom-title-class',
				},
				icon: 'info',
				title: 'Kamu pernah CRUSHin adek kelas? alasannya apa? kasih kata-kata buat Dia donk!?',
				background: '#332f28',
				showClass: {popup: 'animate__animated animate__zoomIn'},
				hideClass: {popup: 'animate__animated animate__zoomOut'},
				backdrop: `black left top no-repeat`,
				width: 400,
				allowOutsideClick: false,
				showCancelButton: false,
				showConfirmButton: true,
				confirmButtonText: 'Jawab',
				confirmButtonColor: '#332f28',
			});
		}

		/* global bootstrap: false */

		window.addEventListener('load', () => {
			document.querySelectorAll('.toast').forEach(toastEl => new bootstrap.Toast(toastEl))

			document.getElementById('btnShowToast').addEventListener('click', () => {
				document.querySelectorAll('.toast').forEach(toastEl => bootstrap.Toast.getInstance(toastEl).show())
			})

			document.getElementById('btnHideToast').addEventListener('click', () => {
				document.querySelectorAll('.toast').forEach(toastEl => bootstrap.Toast.getInstance(toastEl).hide())
			})
		})