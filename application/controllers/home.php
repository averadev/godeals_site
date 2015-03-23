<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

setlocale(LC_ALL,"es_ES@euro","es_ES","esp");

ob_start();

require_once('EmailManager.php');

class Home extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->database('default');
    }

    /**
     * Despliega la pantalla del home
     */
    public function index(){
        // Get data from database
        $this->load->view('web/vwHome');
    }
	
	public function sendMail(){
		if($this->input->is_ajax_request()){
		
			$EmailManager = new EmailManager();
            $messaje = $EmailManager->contactEmail($_POST["compania"], $_POST["name"], $_POST["phone"], $_POST["email"], $_POST['menssaje']);
		
			echo json_encode($messaje);
			
		}	
	}

}