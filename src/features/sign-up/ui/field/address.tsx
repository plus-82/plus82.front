import { useTranslations } from 'next-intl'

import { fieldCss } from 'shared/form'
import { Button, Label, TextField } from 'shared/ui'

export const Address = () => {
  const t = useTranslations()

  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>{t('field.address.label')}</Label>
      <div className="flex gap-2">
        <TextField readOnly className="bg-gray-100" />
        <Button variant="lined" size="large" className="w-[120px] shrink-0">
          주소 검색
        </Button>
      </div>
      <TextField readOnly className="bg-gray-100" />
      <TextField placeholder={t('field.address.placeholder')} />
    </div>
  )
}
