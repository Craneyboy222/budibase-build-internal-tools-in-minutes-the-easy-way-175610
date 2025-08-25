import { useState, useEffect } from 'react';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

function useGeolocation(): GeolocationState {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(state => ({ ...state, error: 'Geolocation is not supported' }));
      return;
    }

    const success = (position: GeolocationPosition) => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const error = () => {
      setState(state => ({ ...state, error: 'Unable to retrieve your location' }));
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return state;
}

export default useGeolocation;