import Leaflet from "leaflet";
import MapMarkerImg from "../images/Local.svg";

const mapIcon = Leaflet.icon({
    iconUrl: MapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

export default mapIcon