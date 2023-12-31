import logo from "./logo.svg";
import "./App.css";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState(null);

  const [permissionStatus, setPermissionStatus] = useState(false);

  useEffect(() => {
    Geolocation.checkPermissions().then((permission) => {
      if (permission.location === "granted") {
        setPermissionStatus(true);
      }
    });

    Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        setPermissionStatus(false);
      } else {
        setCoordinates([position.coords.latitude, position.coords.longitude]);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ShowCoordinates coordinates={coordinates} permissionStatus={permissionStatus}/>
        <h1>{"" + permissionStatus}</h1>

        {!permissionStatus && (
          <>
            <button
              onClick={() => {
                Geolocation.requestPermissions();
              }}
            >
              Give location permission
            </button>
          </>
        )}
      </header>
    </div>
  );
}

function ShowCoordinates({ coordinates, permissionStatus }) {

  if (!permissionStatus) {
    return <h1>Permission not granted</h1>;
  }

  if (!coordinates) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Latitude: {coordinates[0]}</h1>
      <h1>Longitude: {coordinates[1]}</h1>
    </div>
  );
}

export default App;
