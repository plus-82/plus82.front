import { PropsWithChildren } from 'react'

import { cn, passPropsToChildren } from 'shared/lib'

export { divide } from './variant'

type PanelProps = PropsWithChildren<{
  className?: string
  active?: boolean
}>

const PanelRoot = ({ active = false, className, children }: PanelProps) => {
  return (
    <button
      className={cn(
        'relative flex h-[110px] min-w-32 flex-grow flex-col items-center justify-center gap-3',
        className,
      )}
    >
      {passPropsToChildren(children, { active })}
    </button>
  )
}

const Label = ({ active, children }: PanelProps) => {
  return (
    <div
      data-active={active}
      className="body-large text-gray-700 data-active:text-blue-800"
    >
      {children}
    </div>
  )
}

const Value = ({ active, children }: PanelProps) => {
  return (
    <div
      data-active={active}
      className="title-medium font-bold text-gray-900 data-active:text-blue-800"
    >
      {children}
    </div>
  )
}

export const Panel = Object.assign(PanelRoot, {
  Label,
  Value,
})
