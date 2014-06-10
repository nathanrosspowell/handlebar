$(window).bind("load", function () {
    var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }];
    //Get the HTML from the template   in the script tag
    var theTemplateScript = $("#shoe-template").html(); 
    //Compile the template
    var theTemplate = Handlebars.compile (theTemplateScript); 
    $(".shoesNav").append (theTemplate(shoesData)); 
});