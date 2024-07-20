<?php 
	$sel=$_POST['group'];
	$name=$_POST['firstname'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$comment=$_POST['comment'];
	$recaptcha=$_POST['g-recaptcha-response'];

	if($recaptcha!=''){
		$secret="6LdXc9IUAAAAAAt6DKa6KJUQRKW_xKjE73wM195L";
		$ip=$_SERVER['REMOTE_ADDR'];
		$var=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remoteip=$ip");
		$array=json_decode($var, true);

		if($array['success']){
			//true
			$for="info@vitalgps.la";
			$subject="Consulta " . $sel;
			$content="Nombre: " . $name . "\nCorreo: " . $email . "\nTeléfono: " . $phone . "\nMensaje: " . $comment;

			if($sel=='sales'){
				$subject='Consulta Ventas';
			}elseif($sel=='admin'){
				$subject='Consulta Administración';
			}elseif ($sel=='support') {
				$subject='Consulta Soporte';
			}

			mail($for,$subject,$content);

			echo "<script language='javascript'>
				alert('Mensaje enviado correctamente, gracias por escribirnos.\\nNos comunicaremos con usted a la brevedad.');
				window.location.href = 'http://www.vitalgps.la';
				</script>";
		}else{
			echo "<script language='javascript'>
			alert('Ha ocurrido un error, por favor intente de nuevo.');
			window.location.href = 'http://www.vitalgps.la';
			</script>";
		}
	}else{
		echo "<script language='javascript'>
		alert('Ha ocurrido un error, por favor intente de nuevo.');
		window.location.href = 'http://www.vitalgps.la';
		</script>";
	}

	//header("location:index.html");
?>