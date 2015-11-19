
var district_boundary = new ol.layer.Tile({
	source: new ol.source.TileWMS(({
	      url: 'http://localhost:8080/geoserver/genesis/wms',
	      params: {'LAYERS': 'genesis:District_Boundary'},
	      serverType: 'geoserver',
	      crossOrigin:"Anonymous",
	    })),
		name: 'District Boundary',
		visible:false
});

var development_regions = new ol.layer.Tile({
	source: new ol.source.TileWMS(({
	      url: 'http://localhost:8080/geoserver/genesis/wms',
	      params: {'LAYERS': 'genesis:DevelopmentRegions'},
	      serverType: 'geoserver',
	      crossOrigin:"Anonymous",
	    })),
		name: 'Development Regions',
		visible:false
});

var get_district_boundary = function(){
	return district_boundary;
}

var get_development_regions = function(){
	return development_regions;
}