jQuery(document).ready(function($){	
		
	jQuery("#closedMenu").click(function() {		
		//jQuery("#hiddenIconOnly").show("slow");
		jQuery("#closedMenu").hide("fast");
		jQuery("#layerTreeMainDiv").show("fast");		
		jQuery("#openedMenu").show("fast");
		//if($("#layerManagerMain").is(':hidden')){	
		//	jQuery("#layerManagerMain").show("fast");
		//}	
		//$('#openedMenu').css({marginTop: '-=200px'});
	});
	
	jQuery("#openedMenu").click(function() {		
		jQuery("#openedMenu").hide("fast");
		jQuery("#layerTreeMainDiv").hide("slow");
		jQuery("#closedMenu").show("fast");
		if($("#layerManagerMain").is(':hidden') == false){	
			jQuery("#layerManagerMain").hide("fast");
			
		}
		
	});
	
	jQuery("#openedMenuWithLayerSettings").click(function() {		
		jQuery("#openedMenuWithLayerSettings").hide("fast");
		jQuery("#layerTreeMainDiv").hide("slow");
		jQuery("#closedMenu").show("fast");
		if($("#layerManagerMain").is(':hidden') == false){	
			jQuery("#layerManagerMain").hide("fast");		
		}		
	});
	
	
	
	
	
	

	$(document).on('click', ".layerNameHeading", function(){
		var txts = $(this).html();
		
		
		var l = txts.length;
		var y = txts.indexOf('</span>');
		var s = txts.slice(y+7,l);
		
		if(jQuery(this).next(".content").is(':visible')){    			
			jQuery(this).next(".content").slideToggle(700);
			$(this).html('<span class="close-open"></span>'+ s);    			
		}else{    			
			jQuery(this).next(".content").slideToggle(700);
			$(this).html('<span class="open-close"></span>' + s);
		}
	});
	
	/******************* Managing Layer Clicks*********************/

	var layerName = "";
	
	$(document).on('click', 'input[type="checkbox"]', function(){
		if($(this).prop("checked") == true){
			layerName = $(this).attr('id');
			addLayerToMap(layerName);
		}else{
			layerName = $(this).attr('id');
			removeLayerFromMap(layerName);
		}		
	});
	
	
	var addLayerToMap = function(name){
		if(name == "district_boundary"){
			map.addLayer(district_boundary);
			district_boundary.setVisible(true);
		}
		
		if(name == "development_regions"){
			map.addLayer(development_regions);
			development_regions.setVisible(true);
		}
		
		if($("#layerManagerMain").is(':hidden')){
			$("#layerManagerMain").show();
			//$('#openedMenu').css({marginTop: '+=100px'});
			$("#openedMenu").hide();
			$("#openedMenuWithLayerSettings").show();
		}
	};
	
	
	
	var removeLayerFromMap = function(name){
		if(name == "district_boundary"){
			district_boundary.setVisible(false);
			map.removeLayer(district_boundary);
			
		}
		
		if(name == "development_regions"){
			development_regions.setVisible(false);
			map.removeLayer(development_regions);
			
		}
	}
	
	
	
	
	
	
	
	/***************************** road cl ***************************************/
	
	jQuery('#roadCL').bind("contextmenu",function(event){
		if($('#roadCL').is(':checked')){
			event.preventDefault();
			$(".custom-menu-slider-roadCL").finish().toggle(100).
			css({
		        top: event.pageY + 8 + "px",
		        left: event.pageX + 5 + "px"
		    });
		}
		   
	});
	// If the document is clicked somewhere
	$(document).bind("mousedown", function (e) {	
	    if (!$(e.target).parents(".custom-menu-slider-roadCL").length > 0) {
	        $(".custom-menu-slider-roadCL").hide(100);
	    }
	});
	jQuery("input[id='roadCL_LayerOpacity']").on('input change', function() {
		road_CL.setOpacity(this.value);
	});
	
	
	
	/********************** ward 1 **********************************/
	
	jQuery('#Ward1').bind("contextmenu",function(event){
		if($('#Ward1').is(':checked')){
			event.preventDefault();
			$(".custom-menu-slider-Ward1").finish().toggle(100).
			css({
		        top: event.pageY + 8 + "px",
		        left: event.pageX + 5 + "px"
		    });
		}
		   
	});
	// If the document is clicked somewhere
	$(document).bind("mousedown", function (e) {	
	    if (!$(e.target).parents(".custom-menu-slider-Ward1").length > 0) {
	        $(".custom-menu-slider-Ward1").hide(100);
	    }
	});
	jQuery("input[id='Ward1_LayerOpacity']").on('input change', function() {
		building_wgs.setOpacity(this.value);
	});
	
	
	
/********************** Districts **********************************/
	
	jQuery('#districts_boundary').bind("contextmenu",function(event){
		if($('#districts_boundary').is(':checked')){
			event.preventDefault();
			$(".custom-menu-slider-districts").finish().toggle(100).
			css({
		        top: event.pageY + 8 + "px",
		        left: event.pageX + 5 + "px"
		    });
		}
		   
	});
	// If the document is clicked somewhere
	$(document).bind("mousedown", function (e) {	
	    if (!$(e.target).parents(".custom-menu-slider-districts").length > 0) {
	        $(".custom-menu-slider-districts").hide(100);
	    }
	});
	jQuery("input[id='districts_LayerOpacity']").on('input change', function() {
		districtsBoundary.setOpacity(this.value);
	});
	
	
	
/********************** development regions **********************************/
	
	jQuery('#development_regions').bind("contextmenu",function(event){
		if($('#development_regions').is(':checked')){
			event.preventDefault();
			$(".custom-menu-slider-developmentRegions").finish().toggle(100).
			css({
		        top: event.pageY + 8 + "px",
		        left: event.pageX + 5 + "px"
		    });
		}
		   
	});
	// If the document is clicked somewhere
	$(document).bind("mousedown", function (e) {	
	    if (!$(e.target).parents(".custom-menu-slider-developmentRegions").length > 0) {
	        $(".custom-menu-slider-developmentRegions").hide(100);
	    }
	});
	jQuery("input[id='developmentRegions_LayerOpacity']").on('input change', function() {
		developmentRegions.setOpacity(this.value);
	});	
	
	
	
	
	
	
	
	
	
	
	
	
	
    /*-------------------- EXPANDABLE PANELS ----------------------*/
    var panelspeed = 500; //panel animate speed in milliseconds
    var totalpanels = 3; //total number of collapsible panels
    var defaultopenpanel = 0; //leave 0 for no panel open
    var accordian = false; //set panels to behave like an accordian, with one panel only ever open at once      

    var panelheight = new Array();
    var currentpanel = defaultopenpanel;
    var iconheight = parseInt($('.close-open').css('height'));
    var highlightopen = true;

    //Initialise collapsible panels
    function panelinit() {
            for (var i=1; i<=totalpanels; i++) {
                panelheight[i] = parseInt($('#cp-'+i).find('.expandable-panel-content').css('height'));
                $('#cp-'+i).find('.expandable-panel-content').css('margin-top', -panelheight[i]);
                if (defaultopenpanel == i) {
                    $('#cp-'+i).find('.icon-close-open').css('background-position', '0px -'+iconheight+'px');
                    $('#cp-'+i).find('.expandable-panel-content').css('margin-top', 0);
                }
            }
    }

    
    
    
    
    $('.expandable-panel-heading').click(function() {
        var obj = $(this).next();
        var objid = parseInt($(this).parent().attr('ID').substr(3,2));
        currentpanel = objid;
        if (accordian == true) {
            resetpanels();
        }

        if (parseInt(obj.css('margin-top')) <= (panelheight[objid]*-1)) {
            obj.clearQueue();
            obj.stop();
            obj.prev().find('.icon-close-open').css('background-position', '0px -'+iconheight+'px');
            obj.animate({'margin-top':0}, panelspeed);
            if (highlightopen == true) {
                //$('#cp-'+currentpanel + ' .expandable-panel-heading').addClass('header-active');
                //alert("hi");
            }
            
        } else {
            obj.clearQueue();
            obj.stop();
            obj.prev().find('.icon-close-open').css('background-position', '0px 0px');
            obj.animate({'margin-top':(panelheight[objid]*-1)}, panelspeed);
            if (highlightopen == true) {
                $('#cp-'+currentpanel + ' .expandable-panel-heading').removeClass('header-active');
            }
        }
    });

    function resetpanels() {
        for (var i=1; i<=totalpanels; i++) {
            if (currentpanel != i) {
                $('#cp-'+i).find('.icon-close-open').css('background-position', '0px 0px');
                $('#cp-'+i).find('.expandable-panel-content').animate({'margin-top':-panelheight[i]}, panelspeed);
                if (highlightopen == true) {
                    $('#cp-'+i + ' .expandable-panel-heading').removeClass('header-active');
                }
            }
        }
    }
    
   //Uncomment these lines if the expandable panels are not a fixed width and need to resize
   /* $( window ).resize(function() {
      panelinit();
    });*/

    $(window).load(function() {
        panelinit();
    }); //END LOAD
});