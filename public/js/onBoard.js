$(document).ready(function() {
    console.log("hello")

    var ageForm = $(".ageForm");
    var ageInput = $(".age");
    
    var surveyForm = $(".surveyForm");
    var surveyInput = $(".survey");

    
    ageForm.on("submit", function(event) {
        event.preventDefault();
        
        for (var i= 0; i < ageInput.length; i++ ) {
            if (ageInput[i].checked) {
            var userAge = {}
            userAge[ageInput[i].name] = ageInput[i].value 
            
            selectedAge(userAge);
            
            }; 
           
        };
    });
    
    function selectedAge(age){
        console.log(age)
        $.post("api/profile") 
        
        .then(function(value) {
            throw new Error('oh, no!');
        })
        .catch(function(e) {
            console.error(e.message); 
        })
    
    };



    surveyForm.on("submit", function(event) {
        event.preventDefault();
        
        var userData = {}
        for (var i= 0; i < surveyInput.length; i++ ) {
            if (surveyInput[i].checked) {
             userData[surveyInput[i].name] = surveyInput[i].value 
            
            
            }; 
           
        };
        selectedData(userData);
        
    });

    function selectedData(survey){
        console.log(survey)
        $.post("/api/sleep")  

        .then(function(value) {
            throw new Error('oh, no!');
        })
        .catch(function(e) {
            console.error(e.message); 
        })
    
    };


});
