import React, {useEffect, useState} from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


import mapMakerImg from "../images/Local.svg";
import "../styles/pages/orphanages-map.css";
import api from "../services/api";

import mapIcon from "../utils/mapIcon"

interface Orphanages {
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function OrphanagesMap () {
    const [orphanages, setOrphanages] = useState<Orphanages[]>([]);

    useEffect(() => {
        api.get("orphanages").then(response => {
            setOrphanages(response.data);
        });
    }, []);
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Map"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Maceio</strong>
                    <span>Alagoas</span>
                </footer>
            </aside>
            <Map
                center={[-9.5944627,-35.9661887]}
                zoom={15}
                style={{width:"100%", height:"100%"}}
            >
                <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            icon={mapIcon} 
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}    
                        >
                            <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="FFF"/>
                                </Link>
                            </Popup>
                        </Marker>
                    );
                  })
                }
            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link> 
        </div>
    );
}

export default OrphanagesMap;