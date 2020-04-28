$(document).ready(function() {
    $("#dropdownMenuButton").dropdown('toggle')

    $( "#item1" ).click(function() {
        var myElement = $(".bg");
        myElement.css("background-image","url('img/lightblue.jpg')");
      });
      $( "#item2" ).click(function() {
        var myElement = $(".bg");
        myElement.css("background-image","url('img/lightgold.jpg')");
      });
      $( "#item3" ).click(function() {
        var myElement = $(".bg");
        myElement.css("background-image","url('')");
      });
      

      async function registerServiceWorker() {
        try {
          const registration = await navigator.serviceWorker.register('serviceworker.js');
          // do something with registration, e.g., registration.scope
        } catch (e) {
          console.error('ServiceWorker failed', e);
        }
      }
        
    });

