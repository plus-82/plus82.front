import Image from 'next/image'

import { Country } from '../model/country'

export const CountryWithFlag = ({ countryCode, countryNameEn }: Country) => {
  return (
    <div className="flex gap-2">
      <Image
        src={`/flags/${countryCode.toLowerCase()}.svg`}
        alt="kr"
        width={24}
        height={24}
      />
      <span>{countryNameEn}</span>
    </div>
  )
}
