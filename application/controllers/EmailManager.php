<?php

class EmailManager {
    
    function contactEmail($conpania, $name, $phone, $email, $messaje){
    	
        // título
        $título = 'Contacto: Comercio de godeals';

        // mensaje
        $mensaje = '
        <html>
            <body>
                <div style="width:100%; height:80px; background: #212121 url(http://godeals.mx/web/assets/img/web/logo.png) no-repeat center left; font-size:50px; color:#ffffff; padding: 20px 0 0 250px; ">
                    Contacto
                </div>
                <div style="width:100%; height:5px; background: #5ec62b;"></div>

                <div style="width:100%; margin: 20px 0;">
                    <h3>'.$name.'</h3>
					<h4>'.$phone.'</h4>
					<h4>'.$conpania.'</h4>

                    <p style="font-family:Georgia; font-size:18px;">'.$messaje.'</p>

                </div>

                <div style="width:100%; height:5px; background: #5ec62b;"></div>
                <div style="width:100%; height:60px; background: #212121; font-size:18px; font-weight: bold; color:#ffffff;">
                    <div style="margin-left: 10px; display: inline-block; line-height: 60px; width:400px; background: url(http://godeals.mx/web/assets/img/web/logo.png) no-repeat center right;">DERECHOS RESERVADOS 2015</div>
                    <div style="margin-left: 10px; display: inline-block; line-height: 60px;">CANCUN QUINTANA ROO MEXICO</div>
                </div>
            </body>
        </html>
        ';

        // Para enviar un correo HTML, debe establecerse la cabecera Content-type
        $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
        $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $cabeceras .= 'From: '.$name.' <'.$email.'>';

        // Enviarlo
		//mail('conomia_alfredo@hotmail.com', $título, $mensaje, $cabeceras);
        if(mail('conomia_alfredo@hotmail.com', $título, $mensaje, $cabeceras)){	
			return true;
		}else {
			return false;
		}
    }
}

?>