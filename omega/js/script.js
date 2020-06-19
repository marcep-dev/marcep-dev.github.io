'use strict';
    // Script do Slick Slider

    $('.slider').slick({
    autoplay: true,
    autoplauSpeed: 4000,
    dots: true,
   // arrows: false
 

  });
    // Script do Jquery Mask

     $('#telefone').mask('(00) 0000-0000');

    // Scrip do Formspree
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Seus Dados foram enviados com sucesso!";
    }

    function error() {
        status.innerHTML = "Oops! Houve um problema.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
        });
    });

    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
  } else {
    error(xhr.status, xhr.response, xhr.responseType);
  }
    };
    xhr.send(data);
    }

