import { useTranslations } from 'next-intl'

import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const RepresentativeName = () => {
  const t = useTranslations()

  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>{t('field.representative-name.label')}</Label>
      <Form.Control name="representativeName">
        <Form.TextField
          placeholder={t('field.representative-name.placeholder')}
        />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
