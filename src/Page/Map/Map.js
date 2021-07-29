import React, { useState, useContext, useCallback } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, LayersControl, Tooltip, ZoomControl} from 'react-leaflet'
import { Icon } from 'leaflet'
import { CovidContext } from '../../Provider/CovidProvider'
import DetailView from './DetailView'


export default function Map() {
  const [covid, setCovid] = useContext(CovidContext);
  const [openData, setOpendata] = useState(null);
  const [mapCenter, setMapcenter] = useState([13.736717, 100.523186])

  const maxBounds = [[90, 270], [-90, -240]];

  const onSelectLocation = useCallback((_id) => {
    const location = covid.find(_location => _location.countryInfo._id === _id);
    if (location === undefined) {
      setOpendata(null);
      return;
    }
    setOpendata(location);
  }, [covid]);

  const onDeselectLocation = useCallback(() => {
    setOpendata(null);
  }, []);

  function onClickItem(_id) {
    if (openData === null) onSelectLocation(_id);
    else if (openData.countryInfo._id !== _id) onSelectLocation(_id);
    else onDeselectLocation();

  }


  const icon = new Icon({
    iconUrl: '/check.svg',
    iconSize: [25, 25]
  });

  const drawerwidth = 240

  const markerElements = covid.map((data) => {
    const { countryInfo: { lat, long, _id },
      country
    } = data
    return (
      <Marker
        position={[lat, long]}
        icon={icon}
        key={country}
        eventHandlers={{
          click: () => {
            onSelectLocation(_id);
          }
        }}>
        <Tooltip>
          {country}
        </Tooltip>
      </Marker>
    )
  });

  let detailView = null;
  if (openData != null) {
    detailView = <DetailView location={openData} onClickClose={onDeselectLocation} />
  }

  return (
    <MapContainer
      minZoom={2}
      center={mapCenter}
      zoomControl={false}
      maxBounds={maxBounds}
      zoom={5}
      scrollWheelZoom={true}
      style={{ width: `cal(100vw-${drawerwidth}px)`, height: "93.4vh" }}>
      <ZoomControl position="bottomleft" />
      <LayersControl position="topleft">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        {markerElements}
        {detailView}
      </LayersControl>
    </MapContainer>
  )
}
