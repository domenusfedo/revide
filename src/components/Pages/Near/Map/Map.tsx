import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore: Unreachable code error
import * as tt from '@tomtom-international/web-sdk-maps'

import {
    MapHolder,
} from './Map.elements'

const Map = () => {
    const mapElement = useRef<any>();
    const [map, mapSet] = useState({})

    const [longitude, longitudeSet] = useState(-0.112869);
    const [latitude, latitudeSet] = useState(51.504);


    useEffect(() => {
        let map = tt.map({
            key: 'RGF2IoAuGcNyj6yMrmzPeYKheCP5AgDc',
            container: mapElement.current,
            center: [longitude, latitude],
            stylesVisibility: {
               
            },
            zoom: 14
        });
        // @ts-ignore: Unreachable code error
       

        mapSet(map)
    }, [])

    //RGF2IoAuGcNyj6yMrmzPeYKheCP5AgDc

    return (
        <MapHolder>
            <div style={{height: '100%', filter: 'grayScale(1)'}} ref={mapElement}>
            </div >
        </MapHolder>
    );
};

export default Map;