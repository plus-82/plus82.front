import { useTranslations } from 'next-intl'

import { fieldCss, Form } from 'shared/form'
import { Label } from 'shared/ui'

export const AcademyName = () => {
  const t = useTranslations()

  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>{t('field.academy-name.label')}</Label>
      <Form.Control name="academyName">
        <Form.TextField placeholder={t('field.academy-name.placeholder')} />
        <Form.ErrorMessage />
      </Form.Control>
    </div>
  )
}
