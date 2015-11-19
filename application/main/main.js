//var baseLayerOSM = getBaseLayerOSM();
//var baseLayerGeryBoundary = getBaseLayerGeryBoundary();
//var drawingLayer = getdrawingLayer();
//var road_CL = getRoadCL();
//var building_wgs = getBuildingWGS();
//var districtsBoundary = getDistricts();
//var developmentRegions = getDevelopmentRegions();

var district_boundary = get_district_boundary();
var development_regions = get_development_regions();




var centerpos = [84.2, 28.2];
var newpos = ol.proj.transform(centerpos,'EPSG:4326','EPSG:900913');
var maxExtent = [80.05844110726194,26.34796712822462,88.2015218371264,30.44742963310623];

var minZoom = 6;
var maxZoom = 22;

var panZoom = new ol.control.PanZoom({
  imgPath: './application/controls/blackslider/resources/zoombar_black',
  minZoom: minZoom,
  maxZoom: maxZoom,
  slider: true
});


var baseLayerOSM = new ol.layer.Tile({
	//extent: ol.proj.transformExtent([80.05844110726194,26.34796712822462,88.2015218371264,30.44742963310623], 'EPSG:4326', 'EPSG:3857'),
	source: new ol.source.MapQuest({
		layer: 'osm'
	}),
	isBaseLayer:true	
});




var map = new ol.Map({
	  layers: [baseLayerOSM],
	  target: 'map',
	  controls: ol.control.defaults({zoom: false}).extend([panZoom]),
	  view: new ol.View({
	    extent:ol.proj.transformExtent(maxExtent, 'EPSG:4326', 'EPSG:900913'),
		projection : 'EPSG:900913', // OSM projection
	    center : newpos,
	    minZoom:7,
	    zoom: 7
	  })
	});


