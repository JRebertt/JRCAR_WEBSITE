//Card Function

$(".lermais-btn").on('click',function(){
    $(this).parent().toggleClass("aparecer")
    
    //ShortHand If-else Statement
    var replaceText = $(this).parent().hasClass("aparecer") ? "Ler Menos" : "Ler Mais";
    $(this).text(replaceText);
});