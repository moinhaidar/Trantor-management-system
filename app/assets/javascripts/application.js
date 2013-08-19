// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require document_templates.js
//= require document_index.js
//= require_tree .
//= require rails.validations
//= require dataTables/jquery.dataTables
//= require dataTables/extras/TableTools
//= require dataTables/extras/ZeroClipboard.js
$(function() {
        $( ".datepicker" ).datepicker({
		dateFormat: 'dd-mm-yy',
	        changeMonth: true,
        	changeYear: true,
		yearRange: "1920:2025"
	});


    $('li a').filter(function(){
        return $(this).attr('href') == document.location.pathname
    }).parent('li').addClass('active')
        .parents('.collapse').collapse('show');
    });


