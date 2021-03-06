$(function() {

	if($('.ah-accord__link').length>0){

		$('.ah-accord__link').click(function(){
			$(this).siblings('.ah-accord__content').slideToggle(500);
			return false;
		});
	}


	if($('.ah-accord__close').length>0){

		$('.ah-accord__close').click(function(){
			$(this).parents('.ah-accord__content').slideToggle(500);
			return false;
		});
	}

 

	if($('.ah-tabsheader').length>0){

		$('.ah-tabsbox').each(function(){

			var tabContainers = $(this).children('div');
	    tabContainers.hide().filter(':first').show();
	 
	    $(this).parents('.ah-tabs').find('ul.ah-tabsheader li a').click(function(){
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $(this).parents('ul.ah-tabsheader').find('a').parent('li').removeClass('selected');
	        $(this).parent('li').addClass('selected');
	        return false;
      }).filter(':first').click();
	     
		});

  }

	if($('.ah-select1').length>0){
	 
	    $('.ah-select1').selectpicker({
		  size: 4
		});

	}

	if($('.ah-select2').length>0){
	 
	    $('.ah-select2').selectpicker({
		  size: 4
		});

	}

	if($("#slider-range-min").length>0){

	    $( "#slider-range-min" ).slider({
	      range: "min",
	      value: 100,
	      min: 1,
	      max: 100,
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.value + "%");
	      }
	    });
	    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + "%" );

    }

    if($("#slider-range-min1").length>0){

	    $( "#slider-range-min1" ).slider({
	      range: "min",
	      value: 100,
	      min: 1,
	      max: 100,
	      slide: function( event, ui ) {
	        $( "#amount1" ).val( ui.value + "%");
	      }
	    });
	    $( "#amount1" ).val( $( "#slider-range-min1" ).slider( "value" ) + "%" );

    }

	

});

$(function() {
	$(".js-click").click(function(){
		if(window.matchMedia( "(min-width: 767px)" ).matches){
			$(this).siblings(".js-show").toggleClass("az-show");
		}
	});

	$(".az-header-popup__close").click(function(){
		$(this).closest(".js-show").toggleClass("az-show");
	});

	$(".az-menu__icon, .az-menu__link_close").click(function(){
		$(".az-menu__list").toggleClass("az-menu__list_on");
		return false;
	});

	$(".az-scroll").jScrollPane({
		autoReinitialise: true,
		showArrows: true,
		verticalGutter: 0
	});

	$(".az-scroll2").jScrollPane({
		autoReinitialise: true,
		showArrows: true,
		contentWidth: '0px',
		verticalGutter: 0
	}).bind('jsp-initialised', function(event, destX){
		if($(this).height() == $(this).find(".jspPane").height()-1){
			$(this).find(".jspVerticalBar").addClass("az-disabled");
		}
	});

	setTableBody();
    $(window).resize(setTableBody);

    $(".az-table__bottom").jScrollPane({
		autoReinitialise: true,
		showArrows: true,
	}).bind('jsp-scroll-x', function(event, destX){
		$(this).siblings(".az-table__top").css({ left: $(this).find(".jspPane").css("left")});
	});

	$(".js-forgot-pass").click(function(){
		$(this).parents(".az-popup").slideUp(0);
		$(".js-forgot-pass-popup").slideDown(0);
	});

	$(".js-close-popup").click(function(){
		$(this).parents(".az-popup").slideUp(0);
		$(".js-enter-popup").slideDown(0);
	});

	// $(".az-table__bottom2").jScrollPane({
	// 	autoReinitialise: true,
	// 	showArrows: true,
	// }).bind('jsp-scroll-x', function(event, destX){
	// 	$(".az-table__top2").css({ left: $(".az-table__bottom2 .jspPane").css("left")});
	// });

	var check_enabled = function(){
		var bool = false;
		$(".js-button-on-off").each(function(){
			if($(this).is(':checked')){
				bool = true;
			}
		});
		if(bool){
			$(".js-button-on-off-out").removeClass("az-button__disabled");
		} else {
			$(".js-button-on-off-out").addClass("az-button__disabled");
		}
	}

	var check_disabled = function(){
		var bool = -1;
		$(".js-check-out").each(function(){
			if($(this).is(':checked')){
				bool = 1;
			}
		});
		$(".js-check-out").each(function(){
			if(!$(this).is(':checked') && bool == 1){
				bool = 0;
			}
		});
		if(bool == 1){
			$(".js-checkbox").prop("checked", true);
		} else if(bool == -1){
			$(".js-checkbox").prop("checked", false);
		}
	}

	check_enabled();

	$(".js-checkbox").change(function(){
		$(".js-check-out").prop("checked", $(this).is(':checked'));
	});

	$(".js-check-out").change(function(){
		check_disabled();
	});

	$(".js-button-on-off").change(function(){
		check_enabled($(this));
	});

	$(".js-subtable").click(function(){
		$(this).toggleClass("az-plus__minus");
		$(this).parents(".az-table__row").find(".js-subtable-out").slideToggle(300);
		return false;
	});

	$(".az-button__disabled").click(function(){
		return false;
	});

	$(".az-table-filter").click(function(){
		$(this).siblings(".az-table-filter__popup").toggleClass("az-table-filter__popup_show");
		return false;
	});

	$(".az-basket-popup__close").click(function(){
		$(this).parents(".az-table-filter__popup").removeClass("az-table-filter__popup_show");
		return false;
	});

	if($('.datepicker').length>0){
		(function($){
			$.fn.datepicker.dates['ru'] = {
				days: ["??????????????????????", "??????????????????????", "??????????????", "??????????", "??????????????", "??????????????", "??????????????"],
				daysShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
				daysMin: ["????", "????", "????", "????", "????", "????", "????"],
				months: ["????????????", "??????????????", "????????", "????????????", "??????", "????????", "????????", "????????????", "????????????????", "??????????????", "????????????", "??????????????"],
				monthsShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????"],
				today: "??????????????",
				clear: "????????????????",
				format: "dd.mm.yyyy",
				weekStart: 1,
		    monthsTitle: '????????????'
			};
		}(jQuery));

	
		$('.datepicker').datepicker({
		    // startDate: '-3d',
		    language: 'ru',
		    leftArrow: '<span>asd</span>',
		    rightArrow: '<span>dsa</span>'
		});
	}

	$(".js-switch-on-off input[type=checkbox]").each(function(){
		if(!$(this).is(':checked')){
			$(this).closest(".js-switch-on-off").siblings(".js-switch-on-off-out").find("input").attr("disabled", "disabled");
		} else {
			$(this).closest(".js-switch-on-off").siblings(".js-switch-on-off-out").find("input").removeAttr("disabled");
		}
	});

	$(".js-switch-on-off input[type=checkbox]").change(function(){
		if(!$(this).is(':checked')){
			$(this).closest(".js-switch-on-off").siblings(".js-switch-on-off-out").find("input").attr("disabled", "disabled");
		} else {
			$(this).closest(".js-switch-on-off").siblings(".js-switch-on-off-out").find("input").removeAttr("disabled");
		}
	});

	$(".az-search__input").keyup(function(){
		if($(this).val() == ""){
			$(this).siblings(".az-search__clear").removeClass("az-search__clear_show");
		} else {
			$(this).siblings(".az-search__clear").addClass("az-search__clear_show");
		}
	});

	$(".az-search__clear").click(function(){
		$(this).siblings(".az-search__input").val("");
		$(this).removeClass("az-search__clear_show");
		return false;
	});

	// if($('.ah-tabsheader2').length>0){

	// 	var tabContainers = $('.ah-tabsbox > div');
	//     tabContainers.hide().filter(':first').show();
	 
	//     $('ul.ah-tabsheader2 li a').click(function(){
	//         tabContainers.hide();
	//         tabContainers.filter(this.hash).show();
	//         $('ul.ah-tabsheader a').parent('li').removeClass('selected');
	//         $(this).parent('li').addClass('selected');
	//         return false;
	//         }).filter(':first').click();
	     
 //    }

});

function setTableBody()
{
    $(".az-table__bottom").each(function(){
    	$(this).height($(this).parents(".az-table").height());
    });

    // $(".az-table__bottom2").each(function(){
    // 	$(this).height($(this).parents(".az-table").height());
    // });
}