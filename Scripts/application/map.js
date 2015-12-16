var LocationMap = LocationMap || {};

$(document).ready(function () {
    'use strict';
    var autocomplete;
    var map;
    var geocoder;
    var marker;
    var latlng = new google.maps.LatLng(38.9071923, -77.03687070000001);

    function initialize() {
        geocoder = new google.maps.Geocoder();

        var myOptions = {
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: false,
            panControl: false,
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);
        var image = {
            url: 'Content/img/marker.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        marker = new google.maps.Marker
        (
        {
            position: latlng,
            map: map,
            title: 'Marker',
            draggable: true,
            icon: image
        }
        );
        google.maps.event.addListener(marker, 'dragend', dragend);
        map.setZoom(17);// Why 17? Because it looks good.
        LocationMap.map = map;

        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }

    function dragend(event) {
        var latlng1 = marker.getPosition();
        geocoder.geocode({ 'location': latlng1 }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    map.setZoom(17);
                    marker.setPosition(latlng1);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
            map.setCenter(latlng1);
        });
    }

    function place_changed() {
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert('Autocomplete returned place contains no geometry');
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
        }

        //marker.setIcon(/** {google.maps.Icon} */({
        //    url: place.icon,
        //    size: new google.maps.Size(71, 71),
        //    origin: new google.maps.Point(0, 0),
        //    anchor: new google.maps.Point(17, 34),
        //    scaledSize: new google.maps.Size(35, 35)
        //}));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    }

    window.onload = initialize;
    $('#geoFind').on('click', function () {
        var address = findInput.val();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(17);
                marker.setPosition(results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
});