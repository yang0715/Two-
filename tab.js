$(function(){
	$('#box>div').eq(0).addClass('on')
    $('li').on('click',function(){
    	$('#box>div').removeClass('on')
        $('#box>div').eq($(this).index()).addClass('on')
    })    
})