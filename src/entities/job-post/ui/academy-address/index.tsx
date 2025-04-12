'use client'

import { AdvancedMarker, Map } from '@vis.gl/react-google-maps'
import React from 'react'

const Pin = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.893 33.201C16.893 33.201 6 24.027 6 15C6 11.8174 7.26428 8.76516 9.51472 6.51472C11.7652 4.26428 14.8174 3 18 3C21.1826 3 24.2348 4.26428 26.4853 6.51472C28.7357 8.76516 30 11.8174 30 15C30 24.027 19.107 33.201 19.107 33.201C18.501 33.759 17.5035 33.753 16.893 33.201ZM18 20.25C18.6894 20.25 19.3721 20.1142 20.0091 19.8504C20.646 19.5865 21.2248 19.1998 21.7123 18.7123C22.1998 18.2248 22.5865 17.646 22.8504 17.0091C23.1142 16.3721 23.25 15.6894 23.25 15C23.25 14.3106 23.1142 13.6279 22.8504 12.9909C22.5865 12.354 22.1998 11.7752 21.7123 11.2877C21.2248 10.8002 20.646 10.4135 20.0091 10.1496C19.3721 9.8858 18.6894 9.75 18 9.75C16.6076 9.75 15.2723 10.3031 14.2877 11.2877C13.3031 12.2723 12.75 13.6076 12.75 15C12.75 16.3924 13.3031 17.7277 14.2877 18.7123C15.2723 19.6969 16.6076 20.25 18 20.25Z"
        fill="#3068E0"
      />
    </svg>
  )
}

type Props = {
  address: string
  lat: number
  lng: number
}

const AcademyAddress = ({ address, lat, lng }: Props) => {
  return (
    <div className="overflow-hidden rounded-[10px] border border-gray-300">
      <Map
        mapId="academy-address-map"
        defaultZoom={15}
        defaultCenter={{ lat, lng }}
        className="h-[232px] w-full"
      >
        <AdvancedMarker key={address} position={{ lat, lng }}>
          <Pin />
        </AdvancedMarker>
      </Map>
      <div className="title-small h-12 w-full bg-white p-3 font-normal text-gray-900">
        {address ?? '-'}
      </div>
    </div>
  )
}

export default React.memo(AcademyAddress)
