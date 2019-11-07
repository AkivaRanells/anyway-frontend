import React from "react";
import { Map, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import styles from "./Map.module.css";
import { features } from "./yehud_monoson.json";
//features[0].geometry.coordinates as [[[number, number]]];
/* This code is needed to properly load the images in the Leaflet CSS */
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

interface Props {
  newsFlashesMarkers: any[];
  leafletRef: React.Ref<any>;
}

const TempAnywayMap = (props: Props) => {
  const position = [32.0461, 34.8516] as [number, number];
  const latlngs = [[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]] as [[number, number],[number, number],[number,number]] ;
  return (
    <div className={styles.mapContainer}>
      <Map
        style={{ height: "100vh" }}
        center={position}
        zoom={12}
        maxZoom={30}
        preferCanvas={true}
        zoomControl={true}
        ref={props.leafletRef}
      >

        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
        
        <ReactLeafletGoogleLayer
          googleMapsLoaderConf={{
            KEY: "AIzaSyDUIWsBLkvIUwzLHMHos9qFebyJ63hEG2M",
            VERSION: "3.37"
          }}
        />
        <Polygon color='red' positions={latlngs}/>
      </Map>
    </div>
  );
};

const AnywayMap = React.forwardRef((props: any, ref) => (
  <TempAnywayMap leafletRef={ref} {...props} />
));

export default AnywayMap;
