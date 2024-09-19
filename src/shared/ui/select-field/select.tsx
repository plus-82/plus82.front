import { PropsWithChildren, useRef } from 'react'
import type { MouseEvent, ReactNode, SelectHTMLAttributes } from 'react'

import { colors } from 'shared/config'
import { cn, ListValue, useSelect } from 'shared/lib'

import {
  Dropdown,
  DropdownItemProps,
  DropdownRootProps,
} from '../dropdown/dropdown'
import { Icon } from '../icon'

import SelectProvider, { useSelectContext } from './context'
import * as css from './variants'

export type SelectValue = ListValue

export type SelectRootProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'onBlur'
> &
  Pick<DropdownRootProps, 'displayLimit'> & {
    children?: ReactNode
    error?: boolean
    readOnly?: boolean
    placeholder?: string
    selectionLimit?: number
    displayValue?: (value: SelectValue) => SelectValue
    nullable?: boolean
    render?: (
      selected: SelectValue[],
      handleSelectedOptionClick: (
        value: SelectValue,
      ) => (event: MouseEvent) => void,
    ) => ReactNode
    onChange: (event: MouseEvent | null, updatedValues: SelectValue[]) => void
    onBlur?: () => void
  }

const DEFAULT_SELECTION_LIMIT_IN_SINGLE_SELECT = 1
const DEFAULT_SELECTION_LIMIT_IN_MULTI_SELECT = 3

const SelectRoot = ({
  name,
  multiple = false,
  selectionLimit: customSelectionLimit,
  displayLimit,
  displayValue,
  nullable = false,
  error = false,
  render,
  disabled = false,
  readOnly = false,
  placeholder: customPlaceholder,
  children,
  value,
  onChange = () => {},
  onBlur,
  className,
}: SelectRootProps) => {
  const selectRef = useRef<HTMLDivElement>(null)

  const selectionLimit = (() => {
    if (multiple)
      return customSelectionLimit || DEFAULT_SELECTION_LIMIT_IN_MULTI_SELECT

    return DEFAULT_SELECTION_LIMIT_IN_SINGLE_SELECT
  })()

  const {
    isOpen,
    isFocused,
    isSelectedValuesEmpty,
    isSelectable,
    canEditSelectedValuesInMultiSelect,
    selectedValuesForDisplay,
    selectedValuesAsString,
    contextValue,
    handleTriggerClick,
    handleTriggerKeyDown,
    handleRemoveButtonClick,
    handleSelectedValueClickInRenderProp,
  } = useSelect({
    value,
    disabled,
    readOnly,
    multiple,
    displayValue,
    nullable,
    onChange,
    selectionLimit,
    selectRef,
  })

  const dropdownId = `${name}-dropdown`

  const placeholder = (() => {
    if (readOnly) return '—'

    if (customPlaceholder) return customPlaceholder

    return null
  })()

  const isRemoveButtonVisible =
    canEditSelectedValuesInMultiSelect && !isSelectedValuesEmpty

  return (
    <div
      className={cn(
        css.wrapper({
          disabled,
          className,
        }),
      )}
      ref={selectRef}
    >
      <div
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        aria-haspopup="listbox"
        className={cn(
          css.selected({
            error,
            disabled,
            readOnly,
            isFocused,
            isSelectable,
            isRemoveButtonVisible,
          }),
        )}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        onBlur={onBlur}
      >
        {render && !readOnly
          ? render(
              selectedValuesForDisplay,
              handleSelectedValueClickInRenderProp,
            )
          : selectedValuesAsString}
        {isSelectedValuesEmpty && placeholder && (
          <span className={cn(css.placeholder({ readOnly }))}>
            {placeholder}
          </span>
        )}
        {!readOnly && (
          <Icon
            name="ChevronDown"
            color={colors.gray['700']}
            className={cn(css.arrowIcon({ isOpen }))}
          />
        )}
      </div>
      {isRemoveButtonVisible && (
        <button
          type="button"
          onClick={handleRemoveButtonClick}
          aria-label="Remove all values"
          className={cn(css.removeButton())}
        >
          <Icon name="Close" color={colors.gray['700']} />
        </button>
      )}
      {isOpen && (
        <SelectProvider value={contextValue}>
          <Dropdown id={dropdownId} role="listbox" displayLimit={displayLimit}>
            {children}
          </Dropdown>
        </SelectProvider>
      )}
    </div>
  )
}

type SelectItemProps = Pick<DropdownItemProps, 'selected'> & {
  value: SelectValue
}

const SelectItem = ({
  value,
  children,
  ...restProps
}: PropsWithChildren<SelectItemProps>) => {
  const {
    close,
    hasSelected,
    hasSelectedInMultiSelect,
    hasLimitExceeded,
    updateSelectedValues,
  } = useSelectContext()

  if (hasSelectedInMultiSelect(value)) return null

  const handleDropdownItemClick = (event: MouseEvent) => {
    const updatedSelectedValues = updateSelectedValues(event, value)
    if (hasLimitExceeded(updatedSelectedValues)) close()
  }

  return (
    <Dropdown.Item
      role="option"
      selected={hasSelected(value)}
      onClick={handleDropdownItemClick}
      {...restProps}
    >
      {children}
    </Dropdown.Item>
  )
}

export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
})
