$(document).ready(function () {
    

});


// On signup Button Click
$('#btnIdSignup').click(function(event) {
    event.preventDefault();
    document.getElementById("btnIdSignup").disabled = true;
    //validations
    if($.trim($('#txtIdUserActualName').val()) == ''){
        alert("Name is Required");
        document.getElementById("btnIdSignup").disabled = false;
        return false;
    }
    if($.trim($('#txtIdPassword').val()) == ''){
        alert("Password is Required");
        document.getElementById("btnIdSignup").disabled = false;
        return false;
    }
    
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test($.trim($('#txtIdEmail').val()))){
        //
    }else{
        alert("Enter Valid Email Address");
        document.getElementById("btnIdSignup").disabled = false;
        return false;
    }
    
       
    // Build Signup Data array
    var arrSignupData = {
        'strActualName': $.trim($('#txtIdUserActualName').val()),
        'strEmail' :  $.trim($('#txtIdEmail').val()),
        'strPassword' : $.trim($('#txtIdPassword').val())
}
    var jsnSignupData = JSON.stringify(arrSignupData);
    console.log(jsnSignupData)
    $.ajax({
        type: 'POST',
        url: 'signup',
        dataType: 'json',
        data: {'jsnSignupData' : jsnSignupData,
               'csrfmiddlewaretoken' : csrftoken,
        },
        success: function (data) {
            if(data.strStatus=='ERROR') {
                alert(data.strMessage);
                
            }
            else if(data.strStatus=='SUCCESS') {
                alert(data.strMessage);
                window.open('login');              
            }
        }
});

document.getElementById("btnIdSignup").disabled = false;
    
})



// Sites injection control
var csrftoken = getCookie('csrftoken');
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}