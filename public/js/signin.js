(function ($,location,localStorage) {

    var signupForm = $("#seekersignup-form");
    var seekerbut = $("#seekersignup");

     seekerbut.click( function() {
         alert('something is happening..')
        signupForm.submit();
    });
    
    
})(jQuery,window.location,window.localStorage);