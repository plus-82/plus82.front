import { DatePicker, Heading, Label, Radio, Select, TextField } from 'shared/ui'

import * as commonCss from '../../style/variants'

import * as css from './variants'

export const PersonalInformation = () => {
  return (
    <div className="mb-10">
      <Heading as="h3" size="medium" className="mb-6">
        Personal information
      </Heading>
      <div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Full Name</Label>
          <div>
            <TextField placeholder="Enter your name" />
          </div>
        </div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Nationality</Label>
          <div>
            <Select onChange={() => {}} placeholder="Choose your nationality">
              <Select.Item value="Korea">Korea</Select.Item>
            </Select>
          </div>
        </div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Gender</Label>
          <div className={css.radioFieldWrapper()}>
            <Radio label="Female" value="Female" checked={true} />
            <Radio label="Male" value="Male" />
          </div>
        </div>
        <div className={commonCss.fieldWrapper()}>
          <Label required>Birth</Label>
          <div>
            <DatePicker onChange={() => {}} placeholder="Choose your birth" />
          </div>
        </div>
      </div>
    </div>
  )
}
