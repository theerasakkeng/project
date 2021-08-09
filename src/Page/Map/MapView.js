import React, { useState, useContext, useCallback, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet'
import { CovidContext } from '../../Provider/CovidProvider'
import DetailView from './DetailView'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'




export default function MapView(props) {
  const [covid, setCovid] = useContext(CovidContext);
  const [openData, setOpendata] = useState(null);
  const [map, setMap] = useState(null)
  const [mapCenter, setMapcenter] = useState({ center: [15, 100], zoom: 5 })


  const drawerwidth = 240
  const maxBounds = [[90, 270], [-90, -240]];
  const wDesktop = 1024;



  const MapChange = useCallback(() => {
    const { lat, lng } = map.getCenter();
    const zoom = map.getZoom();
    setMapcenter({ center: [lat, lng], zoom });
  }, [map]);


 {/* useEffect(() => {
    if (!!map) {
      map.on('move', MapChange);
      map.on('zoom', MapChange);
    }
    return () => {
      if (!!map) {
        map.off('move', MapChange);
        map.off('zoom', MapChange);
      }
    }
  }, [map, MapChange]); */}


  useEffect(() => {
    if (!!openData && !!map) {
      const { countryInfo: { lat, long } } = openData;
      let nextLatitude = lat;
      if (map.getContainer().offsetWidth < wDesktop) {
        if (lat >= 65) nextLatitude -= 0.5
        else if (lat < 65 && lat >= 50) nextLatitude -= 1;
        else if (lat < 50 && lat >= 45) nextLatitude -= 1.5;
        else nextLatitude -= 2;
      }
      map.setView([nextLatitude, long], 6);
    }
  }, [openData, map]);





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


  {/*function onClickItem(_id) {
    if (openData === null) onSelectLocation(_id);
    else if (openData.countryInfo._id !== _id) onSelectLocation(_id);
    else onDeselectLocation();
  }*/}

  //iconSetting
  const icon = new Icon({
    iconUrl: '/check.svg',
    iconSize: [25, 25]
  });

  //MarkerOption
  const markerElements = covid.map((data) => {
    const { countryInfo: { lat, long, _id },
      country
    } = data;
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
        <Tooltip direction={'top'}>
          {country}
        </Tooltip>
      </Marker>
    )
  });



  //onOpenDrawerPopup//
  let detailView = null;
  if (openData != null) {
    detailView = <DetailView location={openData} onClickClose={onDeselectLocation} />
  }


  //sortCountry
  const options = covid.map((option) => {
    const firstLetter = option.country[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const handleChange = (e, value,) => {
    const { countryInfo: { _id } } = value;
    e.preventDefault();
    if (value !== null) {
      onSelectLocation(_id);
    }
  }



  const searchView = (
    <div style={{ position: "fixed", zIndex: "9999", padding: 20 }}>
      <Autocomplete
        disableClearable
        onChange={handleChange}
        id="SearchView"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        getOptionLabel={(option) => option.country}
        style={{ width: 240, backgroundColor: "white", borderRadius: 4 }}
        renderInput={(params) => <TextField {...params} label="SearchCountry" variant="outlined" fullWidth />}
      />
    </div>
  )
  return (
    <div>
      {searchView}
      <MapContainer
        whenCreated={setMap}
        minZoom={2}
        center={mapCenter.center}
        zoomControl={false}
        maxBounds={maxBounds}
        zoom={mapCenter.zoom}
        scrollWheelZoom={true}
        style={{ width: `cal(100vw-${drawerwidth}px)`, height: "93.4vh", }}>

        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerElements}
        {detailView}
      </MapContainer>
    </div>
  )
}
