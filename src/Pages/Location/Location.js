import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './Location.css';
const Location = () => {
    return (
        <div className='container'>
            <MapContainer className='input-map my-map' center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[51.505, -0.09]} />
            </MapContainer>
        </div>
    );
};

export default Location;