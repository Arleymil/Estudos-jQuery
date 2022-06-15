$(document).ready(function(){
    $(':input')
    .css('border', '3px solid red')
    
    $(':button').click(function(){
        $(':text').css('border', '3px solid blue')
        $(':password').css('border', '3px solid green')
        $(':radio').css('border', '3px solid green')
        $(':checkbox').css('border', '3px solid green')
    })
})