const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];

function initValidation(theForm) {
    $(':input').change(function(event){
        if(!this.checkValidity()) {
            $(this).addClass("notValidated")
        } else {
            $(this).removeClass("notValidated")
        }
    });

    $("#myform").submit(function(event) {
        $form = $("#myform");
        formEl=$form.get(0);
    
        event.preventDefault(); 
        event.stopPropagation(); 
        event.stopImmediatePropagation(); 

        validateForm();

        let check = $(".notValidated").length;
        if (check === 0) {
            submitForm(formEl)
        }
    });
}

function validateForm() {
    validateState();
    validateChecks();
    validateName();
    validateAddress();
    validatePhone();
    validateEmail();
}

function validateState() {
    var st = $("#state").val().toUpperCase();
    $("#state").val(st)
    if (stateAbbreviations.indexOf(st) < 0) {
        $("#state").addClass("notValidated");
    } else {
        $("#state").removeClass("notValidated");
    };
};

function validateChecks() {
    let num = $("input:checked")
    if ($("input:checked").length < 1) {
        $(".source").addClass("notValidated");
    } else {
        $(".source").removeClass("notValidated");
    }
};

function validateName() {
    if (/[a-zA-Z]+/.test($("#fName").val())) {
        $("#fName").removeClass("notValidated");
    } else {
        $("#fName").addClass("notValidated");
    }
    if (/[a-zA-Z]+/.test($("#lName").val())) {
        $("#lName").removeClass("notValidated");
    } else {
        $("#lName").addClass("notValidated");
    }
}
function validateAddress() {
    if (/\S+/.test($("#address").val())) {
        $("#address").removeClass("notValidated");
    } else {
        $("#address").addClass("notValidated");
    }
    if (/[a-zA-Z]+/.test($("#city").val())) {
        $("#city").removeClass("notValidated");
    } else {
        $("#city").addClass("notValidated");
    }
    if (/[0-9]{5}/.test($("#zip").val())) {
        $("#zip").removeClass("notValidated");
    } else {
        $("#zip").addClass("notValidated");
    }
}
function validatePhone() {
    if (/[0-9]{10}/.test($("#phone").val())) {
        $("#phone").removeClass("notValidated");
    } else {
        $("#phone").addClass("notValidated");
    }
}
function validateEmail() {
    if (/\S+@/.test($("#email").val())) {
        $("#email").removeClass("notValidated");
    } else {
        $("#email").addClass("notValidated");
    }
}