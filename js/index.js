$(".header-kg").click(function(){
	$(".nav").toggle(500);
})
	var heighest    =    0;
	$(".ensure1").each(function(){
	    if($(this).height() > heighest){
	        heighest = $(this).height();
	    }
	})
	$(".ensure1").each(function(){
	    $(this).css('height', heighest);
	})