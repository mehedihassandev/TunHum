/**
*
* -----------------------------------------------------------------------------
*
* Template : Konstro | Multipage Html5 Responsive Construction Template 
* Author : em-theme
* Author URI : http://thecodude.com/
*
* -----------------------------------------------------------------------------
*
**/

jQuery(document).ready(function($) {
    'use strict';

    // Get the Contact Form
    var form2 = $('#contact_form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form2).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form2).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form2).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#first-name, #email, #subject, #message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

});