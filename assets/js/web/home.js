//JavaScript Documents

var contMenu = 0;

//llama a las funciones para mostrar el menu desplegable
$("#menuMovil").click(function() { showMenu(); });
$("#menuAll").click(function() { hideMenu(); });

//llama a la funcion para enviar el formulario de contacto
$("#btnEnviar").click(function() { sendForm(); });

$('#txtCompania, #txtName, #txtPhone, #txtEmail').keyup(function(e){
    if(e.keyCode ==13){
	sendForm();	
    }
});

//llama a la funcion para bajar el scroll

$(document).on('click','#Godeals',function() { downScroll(1); });
$(document).on('click','#howIt',function() { downScroll(2); });
$(document).on('click','#shakeIt',function() { downScroll(3); });
$(document).on('click','#affiliates',function() { downScroll(4); });
$(document).on('click','#downloads',function() { downScroll(5); });
$(document).on('click','#contact',function() { downScroll(6); });

//llama a la funcion de subir el scroll
$(document).on('click','#btnUp',function() { upScroll(); });

//muestra el menu desplegable
function showMenu(){
	if(contMenu == 0){
		$("#HmenuMovil").show();
		
		$("#menuAll").show();
		
		contMenu = 1;	
	} else{
		$("#HmenuMovil").hide();
		$("#menuAll").hide();
		contMenu = 0;
	}
}

//esconde el menu desplegable
function hideMenu(){
	$("#HmenuMovil").hide();
	$("#menuAll").hide();
	contMenu = 0;
}

//muestra el boton para regresar al menu
$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#btnUp').slideDown(300);
		} else {
			$('#btnUp').slideUp(300);
		}
	});

//
function downScroll(number){
	
	$("#HmenuMovil").hide();
	$("#menuAll").hide();
	contMenu = 0;
	
	var p = ""
	
	$(".tableChild").removeClass("active")
	
	if(number == 1){
		p = $( "#content-Woman" );
		$("#Godeals").addClass("active");
	}else if(number == 2){
		p = $( "#section-comoFunciona" );	
		$("#howIt").addClass("active");
	}else if(number == 3){
		p = $( "#HeaderShakeit" );	
		$("#shakeIt").addClass("active");
	}else if(number == 4){
		p = $( "#HeaderAfiliados" );
		$("#affiliates").addClass("active");	
	}else if(number == 5){
		p = $( "#HeaderDescargar" );
		$("#downloads").addClass("active");	
	}else if(number == 6){
		p = $( "#seccion-contact" );
		$("#contact").addClass("active");	
	}
	
	var offset = p.offset();
	
	console.log(offset)
	
	$('body, html').animate({
		scrollTop: offset.top
	}, 1000);
}

//sube el scroll
function upScroll(){
	$('body, html').animate({
		scrollTop: 0
	}, 1000);
}

//envia los datos al correo
function sendForm(){
	var result = validation();
	
	if(result){
		
		$.ajax({
			type: "POST",
			url: "home/sendMail",
			dataType:'json',
			data: {
				compania:$("#txtCompania").val(),
				name:$("#txtName").val(),
				phone:$("#txtPhone").val(),
				email:$("#txtEmail").val(),
				menssaje:$("#txtMensaje").val()
			},
			success: function(data){
				cleanFields();
				alert("mensaje enviado")
			
			},
			error: function(data){
				cleanFields();	
				alert("error")
			}
		});
		
				
		//cleanFields()
	}
}

function validation(){
	var result = true	
	
	hideAlert();
	
	if($("#txtMensaje").val().trim().length == 0){
		$("#alertMensaje").show();
		$("#lblMensaje").addClass('error');
		$('#txtMensaje').focus();
		result = false;
	}
	
	var emailExpr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	
	if($('#txtEmail').val().trim().length > 0){
		var email = $('#txtEmail').val().trim();
		if( !emailExpr.test(email) ){
			$('#alertEmail').html("Email incorrecto. Porfavor escriba un email correcto");
			$('#alertEmail').show();
        	$('#lblEmail').addClass('error');
        	$('#txtEmail').focus();
        	result = false;
		}
	} else {
		$('#alertEmail').html("Campo Vacio. Porfavor escriba un correo");
		$('#alertEmail').show();
        $('#lblEmail').addClass('error');
        $('#txtEmail').focus();
        result = false;
	}
	
	if($("#txtName").val().trim().length == 0){
		$("#alertName").show();
		$("#lblName").addClass('error');
		$('#txtName').focus();
		result = false;
	}
	
	if(!result){
		$("#contact-Right").css("height","auto");
		var RightTotal = $("#contact-Right").css("height");
		$("#contact-Left").css("height",RightTotal);	
	}else{
		$("#contact-Right").css("height","500px");
		$("#contact-Left").css("height","500px");
	}
	
	return result;
}

function hideAlert(){
	$("#alertMensaje").hide();
	$("#alertEmail").hide();
	$("#alertPhone").hide();
	$("#alertName").hide();
	$("#alertCompania").hide();
	
	$("#lblMensaje").removeClass('error');
	$("#lblEmail").removeClass('error');
	$("#lblPhone").removeClass('error');
	$("#lblName").removeClass('error');
	$("#alertCompania").removeClass('error');
}

function cleanFields(){
	$("#txtMensaje").val("");
	$("#txtEmail").val("");
	$("#txtPhone").val("");
	$("#txtName").val("");
	$("#txtCompania").val("");
}