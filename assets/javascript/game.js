
var random_result;
var lost;
var win;

for (var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr("class", 'crystal');
    $(".crystals").append(crystal);
    
}