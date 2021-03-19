var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.766000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rancho_2 = new ol.format.GeoJSON();
var features_Rancho_2 = format_Rancho_2.readFeatures(json_Rancho_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rancho_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rancho_2.addFeatures(features_Rancho_2);
var lyr_Rancho_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rancho_2, 
                style: style_Rancho_2,
                interactive: true,
                title: '<img src="styles/legend/Rancho_2.png" /> Rancho'
            });
var format_Dvisiones_3 = new ol.format.GeoJSON();
var features_Dvisiones_3 = format_Dvisiones_3.readFeatures(json_Dvisiones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dvisiones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dvisiones_3.addFeatures(features_Dvisiones_3);
var lyr_Dvisiones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dvisiones_3, 
                style: style_Dvisiones_3,
                interactive: true,
                title: '<img src="styles/legend/Dvisiones_3.png" /> Dvisiones'
            });
var format_Vecinos_4 = new ol.format.GeoJSON();
var features_Vecinos_4 = format_Vecinos_4.readFeatures(json_Vecinos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vecinos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vecinos_4.addFeatures(features_Vecinos_4);
var lyr_Vecinos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vecinos_4, 
                style: style_Vecinos_4,
                interactive: true,
                title: '<img src="styles/legend/Vecinos_4.png" /> Vecinos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Rancho_2.setVisible(true);lyr_Dvisiones_3.setVisible(true);lyr_Vecinos_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_Rancho_2,lyr_Dvisiones_3,lyr_Vecinos_4];
lyr_Rancho_2.set('fieldAliases', {'id': 'id', });
lyr_Dvisiones_3.set('fieldAliases', {'id': 'id', 'nombres': 'nombres', });
lyr_Vecinos_4.set('fieldAliases', {'id': 'id', 'vecinos': 'vecinos', });
lyr_Rancho_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Dvisiones_3.set('fieldImages', {'id': 'TextEdit', 'nombres': 'TextEdit', });
lyr_Vecinos_4.set('fieldImages', {'id': 'TextEdit', 'vecinos': 'TextEdit', });
lyr_Rancho_2.set('fieldLabels', {'id': 'inline label', });
lyr_Dvisiones_3.set('fieldLabels', {'id': 'no label', 'nombres': 'no label', });
lyr_Vecinos_4.set('fieldLabels', {'id': 'no label', 'vecinos': 'no label', });
lyr_Vecinos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});