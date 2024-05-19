jQuery(document).ready(function(){
	//Clicking/tapping anywhere on the document
	jQuery(document).on('click touchstart',function(e){

		//If browser supports on touch start event
		if ('ontouchstart' in document.documentElement) {

			var clicked_element = e.target;

			//Check element's parents
			var nav_parent = jQuery(clicked_element).parents('nav.hidden-xs')

			//If clicked element is in the nav, don't remove hover
			if(jQuery(nav_parent).hasClass('hidden-xs')){
			}
			else{
				removeHover();
			}
		}

	});

	//If browser supports on touch start event
	if ('ontouchstart' in document.documentElement) {
	
		//Second drop menu down - whien an a is clicked, go to that page
		jQuery('.hidden-xs .sub-menu li.menu-item-has-children .sub-menu a').on('click touchstart',function(e){

			//Checks if event was a touch event
			if(e.type == 'touchstart'){
				window.location = jQuery(this).attr('href');
			}

		});

	
		//First drop down menu - when a li is clicked
		jQuery('.hidden-xs .sub-menu li.menu-item-has-children').on('click touchstart',function(e){

			//Checks if event was a touch event
			if(e.type == 'touchstart'){

				if(jQuery(this).hasClass('hover')){
					//Act as normal - go to page
					}
				else{
					removeHover();

					jQuery(this).addClass('hover');

					jQuery(this).parents('li.menu-item-has-children').addClass('hover');

					return false;
				}
			}

		});

		//Top navigation - when an li with a drop down menu is clicked on
		jQuery('.hidden-xs li.menu-item-has-children').on('click touchstart',function(e){

			//Checks if event was a touch event
			if(e.type == 'touchstart'){

				if(jQuery(this).hasClass('hover')){
					//Act as normal - go to page
				}
				else{
					removeHover();

					jQuery(this).addClass('hover');

					return false;
				}
			}

		});

	}//End touch devices


	}); //end document ready


//Hides all submenus
function removeHover(){
	jQuery('.hidden-xs .hover').each(function(i, obj){
		jQuery(this).removeClass('hover');
	});
}//removeHover