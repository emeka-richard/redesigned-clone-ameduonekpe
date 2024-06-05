import React, { useEffect, useRef } from "react";
import styles from "./maphere.module.css"
import H from "@here/maps-api-for-javascript";



function getMarkerIcon(color1: string) {
  const svgMarker = `<svg width="30" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <!-- Shadow -->
    <defs>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> 
        <feOffset dx="2" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/> 
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <!-- Pin -->
    <path fill="${color1}" stroke="none" d="M 15,40
      Q 7.5,20 0,0
      Q 15,20 30,0
      Z"/>
    <path fill="${color1}" stroke="none" d="M 15,40
      Q 10,30 5,25
      Q 15,20 25,25
      Q 20,30 15,40
      Z"/>
  </svg>`;

  return new H.map.Icon(svgMarker, {
    anchor: {
      x: 15,
      y: 40
    },
  });
}

// type MapType = H.map.layer.ITileLayer.Options;

type DefaultLayersType = {
  vector: {
    normal: {
      map: H.map.layer.BaseTileLayer;
      // map: H.service.MapType;
    };
  };
};

interface MapHereProps {
  apikey: string;
}


const MapHere: React.FC<MapHereProps> = ({ apikey }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<H.Map | null>(null);
  // const platform = useRef<H.service.Platform | null>(null);
  const behavior = useRef<H.mapevents.Behavior | null>(null);
  const uiRef = useRef<H.ui.UI | null>(null);
  const defaultLayerRef1 = useRef<DefaultLayersType | null>(null)
  const defaulRef2 = useRef({})

  useEffect(()=>{
    console.log(defaultLayerRef1.current)
    console.log(defaulRef2.current)
    // console.log("Omo:", typeof defaulRef)
  }, [defaultLayerRef1])

  useEffect(() => {
    const position = { lat: 9.0242288408216, lng: 7.482642766574311 }; // Create an H.geo.Point object
    // Check if the map object has already been created
    if (!map.current && mapRef.current) {
      // Create a platform object with the API key and useCIT option
      const platform = new H.service.Platform({
        apikey,
      });
      // Obtain the default map types from the platform object:
      const defaultLayers = platform.createDefaultLayers(512,  320) as DefaultLayersType
      // H.map.Object.Type.ANY
      // H.map.Object.Type
      //  H.Map.EngineType.HARP
      // H.map.layer.Layer
      //  .TileLayer
      // as H.service.Platform.DefaultLayersOptions
      // as H.map.Object H.service.Platform.DefaultLayersOptions Object
      // ({ppi:250})
      // ({
      //   pois: true,
      // })

      defaultLayerRef1.current = defaultLayers
      // defaulRef2.current = {...defaulRef1.current?.vector}
      // Create a new map instance with the Tile layer, center and zoom level
      // Instantiate (and display) a map:
      
      const newMap = new H.Map(
        mapRef.current,
        defaultLayerRef1.current.vector.normal.map,
        {
          pixelRatio: 2,
          zoom: 17,
          center: position,
        }
      );

      // setDefaul(defaultLayers)
      // console.log(defaul)
      newMap.addObject(
        new H.map.Marker(position, {
          icon: getMarkerIcon("red"),
          data: {},
        })
      );
      
      // Add panning and zooming behavior to the map
      behavior.current = new H.mapevents.Behavior(
        new H.mapevents.MapEvents(newMap)
      );
      // const ui = H.ui.UI.createDefault(newMap, defaultLayers);
      uiRef.current = H.ui.UI.createDefault(newMap, defaultLayers);
      map.current = newMap;
    }
  }, [apikey]);


  // Return a div element to hold the map
  return (
    <section id="map" className={styles.maphere_wrapper}>
        <h4 className={styles.maphere_wrapper_h4}>Head Office Location</h4>
        <div tabIndex={0} aria-label="Head Office Map Location" className={styles.maphere} style={{ width: "100%", height: "500px" }} ref={mapRef} />
    </section>
) 
};

export default MapHere;
