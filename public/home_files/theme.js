//Shows and hides menu
jQuery('#show_xs_nav').click(function(){

	var menu_container = jQuery(this).attr('href');

	jQuery(menu_container).addClass('in_view');

	jQuery('#nav_overlay').fadeIn(300);

	return false;
});

//Shows and hides menu
jQuery('#hide_xs_nav').click(function(){

	var menu_container = jQuery(this).attr('href');

	jQuery(menu_container).removeClass('in_view');

	jQuery('#nav_overlay').fadeOut(300);
		
	return false;
});

//If overlay is visible and clicked/tapped on, hide menu and overlay
jQuery('#nav_overlay').click(function(){

	jQuery('#hide_xs_nav').trigger('click');

});

jQuery(document).ready(function(){

});



