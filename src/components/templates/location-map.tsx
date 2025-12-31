/**
 * News Location Map Component
 * Displays store location on an interactive Leaflet map with ROOT logo pin
 */

'use client';

import { useEffect, useState } from 'react';

interface LocationMapProps {
  title: string;
  mapImage: string;
  description: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function LocationMap({
  title,
  description,
  address,
  coordinates,
}: LocationMapProps) {
  const [mapComponents, setMapComponents] = useState<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    L: any;
  } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Import both Leaflet and react-leaflet components dynamically
    Promise.all([import('leaflet'), import('react-leaflet')]).then(
      ([leaflet, reactLeaflet]) => {
        setMapComponents({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          L: leaflet.default,
        });
        setIsLoaded(true);
      },
    );
  }, []);

  // Default to Tokyo if no coordinates provided
  const mapCenter: [number, number] = coordinates
    ? [coordinates.lat, coordinates.lng]
    : [35.6762, 139.6503];

  if (!isLoaded || !mapComponents) {
    return (
      <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500">地図を読み込んでいます...</span>
        </div>
        <div className="space-y-2">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
            {description}
          </p>
          {address && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {address}
            </p>
          )}
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, L } = mapComponents;

  // Create custom ROOT pin icon
  const createRootPinIcon = () => {
    const svgIcon = `
      <svg width="50" height="70" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 56C20 56 40 40 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 40 20 56 20 56Z" fill="#BE1E2D"/>
        <circle cx="20" cy="20" r="14" fill="white"/>
        <path d="M16 28V12H21.5C23.5 12 25 13 25 15C25 16.5 24 17.5 22.5 17.8V18H25V28H23V19H18V28H16Z" fill="#BE1E2D"/>
      </svg>
    `;

    return L.divIcon({
      html: svgIcon,
      className: 'custom-root-pin',
      iconSize: [50, 70],
      iconAnchor: [25, 70],
      popupAnchor: [0, -70],
    });
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* Interactive Leaflet Map */}
      <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden relative z-0">
        <MapContainer
          center={mapCenter}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
          className="rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapCenter} icon={createRootPinIcon()}>
            <Popup>
              <div className="text-center">
                <strong>{description}</strong>
                {address && <p className="text-sm mt-1">{address}</p>}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Location Description */}
      <div className="space-y-2">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
          {description}
        </p>
        {address && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{address}</p>
        )}
      </div>

      {/* Custom CSS for pin */}
      <style jsx global>{`
        .custom-root-pin {
          background: transparent;
          border: none;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        }
        .leaflet-container {
          z-index: 0;
        }
      `}</style>
    </div>
  );
}
