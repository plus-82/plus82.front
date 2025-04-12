import { useTranslations } from 'next-intl'
import { ChangeEvent, useState } from 'react'
import DaumPostcode, { type Address as AddressType } from 'react-daum-postcode'
import { useFormContext } from 'react-hook-form'

import { fieldCss } from 'shared/form'
import { Button, Label, Modal, TextField } from 'shared/ui'

import { useGeocoding } from '../../lib/use-geocoding'
import { convertToLocationType } from '../../lib/util'

export const Address = () => {
  const t = useTranslations()

  const { geocode } = useGeocoding()

  const [isOpen, setIsOpen] = useState(false)
  const [address, setAddress] = useState('')
  const [detailedAddress, setDetailedAddress] = useState('')

  const form = useFormContext()

  const handleButtonClick = () => {
    setIsOpen(true)
  }

  const handleCompleteSearchingCode = (data: AddressType) => {
    setAddress(data.address)
    setDetailedAddress('')

    form.setValue('detailedAddress', data.address)
    form.setValue('locationType', convertToLocationType(data.sido))

    geocode(data.address, ({ lat, lng }) => {
      form.setValue('lat', lat)
      form.setValue('lng', lng)
    })

    setIsOpen(false)
  }

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setValue('detailedAddress', `${address} ${event.target.value}`)
    setDetailedAddress(event.target.value)
  }

  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>{t('field.address.label')}</Label>
      <div className="flex gap-2">
        <TextField value={address} readOnly className="bg-gray-100" />
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <Button
            variant="lined"
            size="large"
            className="w-[120px] shrink-0"
            onClick={handleButtonClick}
          >
            주소 검색
          </Button>
          <Modal.Content className="h-[600px] w-[450px]">
            <DaumPostcode
              style={{ height: '500px' }}
              onComplete={handleCompleteSearchingCode}
            />
          </Modal.Content>
        </Modal>
      </div>
      <TextField
        value={detailedAddress}
        placeholder={t('field.address.placeholder')}
        onChange={handleAddressChange}
      />
    </div>
  )
}
