
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

document.querySelector('#btn-signup').onclick = function(){

			 var name = document.querySelector('#name').value;
     name=name.trim();
    var phone = document.querySelector('#phnno').value;
    phone=phone.trim();
    sessionStorage.setItem("phones",phone)
       var city = document.querySelector("#city").value;
    city=city.trim();
    sessionStorage.setItem("citys",city)
     var interests = document.querySelector("#interest").value;
    interests=interests.trim();
    var gender=document.querySelector("#gender").value;
    if(name!=null && phone!=null && city!=null && interests!=null && gender!=null && name!="" && phone!="" && city!="" && interests!="" && gender!="" && name!=" " && phone!=" " && city!=" " && interests!=" " && gender!=" "){
        var pq=document.getElementById("loadar");
    pq.style.display="block";
    var kpliref = firebase.database().ref(`crimecredential/${phone}${city}/`);
    var data={
        phone: phone,
        regd: city,
        branch: interests,
        name: name,
        sr1:"0",
        sr2:"0",
        sr3:"0",
        prmesg:"https://www.autoproctor.co/tests/start-test/8hfjSxfgTJ",
        prmsg2:"Welcome!",
        temail:"0",
        email:sessionStorage.getItem("vmkey"),
        gender:gender,
        sr1email:"0",
        sr2email:"0",
        sr3email:"0",
        photo:"0"
 }
     kpliref.set(data).then(function() {
           
         
        var pq=document.getElementById("loadar");
    pq.style.display="none";
 window.open('domain.html','_self');
    
});
 

     
					return true
				}
                        
            
            
}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
     var user = firebase.auth().currentUser;
       console.log(user.email);
       sessionStorage.setItem("vmkey",user.email);
      
   } 
    else{
        var pq=document.getElementById("loadar");
    pq.style.display="none";
    window.open('signup.html','_self');
    }
});