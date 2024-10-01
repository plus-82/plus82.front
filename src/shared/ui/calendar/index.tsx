import { getYear } from 'date-fns'
import { range } from 'lodash-es'
import { SyntheticEvent, useState } from 'react'
import DatePicker, { type DatePickerProps } from 'react-datepicker'

import { CustomHeader } from 'shared/ui/calendar/header'

export type Props = Pick<
  DatePickerProps,
  | 'dateFormat'
  | 'placeholderText'
  | 'onBlur'
  | 'onFocus'
  | 'onKeyDown'
  | 'minDate'
  | 'maxDate'
  | 'name'
  | 'customInput'
  | 'excludeDates'
  | 'disabled'
  | 'readOnly'
  | 'inline'
  | 'popperPlacement'
> & {
  onChange: (
    date: string | null,
    event?: SyntheticEvent<unknown, Event>,
  ) => void
  selected?: string | Date | null
}

export const Calendar = ({}: Props) => {
  const [startDate, setStartDate] = useState(new Date())

  const years: number[] = range(
    getYear(new Date()) - 3,
    getYear(new Date()) + 3,
    1,
  )

  return (
    <DatePicker
      renderCustomHeader={props => <CustomHeader {...props} years={years} />}
      selected={startDate}
      onChange={date => date && setStartDate(date)}
    />
  )
}
