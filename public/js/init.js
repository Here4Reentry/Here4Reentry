(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip({delay: 50});
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute

    });
    $('.collapsible').collapsible();
    $(".dropdown-button").dropdown();
    $('.tooltipped').tooltip({delay: 40});
    $('.scrollspy').scrollSpy();










  }); // end of document ready
})(jQuery); // end of jQuery name space