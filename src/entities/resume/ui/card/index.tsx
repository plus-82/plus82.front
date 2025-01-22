import { PropsWithChildren } from 'react'

import { colors } from 'shared/config'
import { cn } from 'shared/lib'
import { Chip, Icon } from 'shared/ui'

import * as css from './variants'

type Props = {
  size?: 'small' | 'medium'
  className?: string
}

const CardRoot = ({
  size = 'small',
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn(css.container({ size }), className)}>{children}</div>
  )
}

const FileBadge = () => {
  return (
    <Chip size="small" variant="lined">
      <Chip.Label>+82 Created</Chip.Label>
    </Chip>
  )
}

const RepresentativeBadge = () => {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
      <Icon name="StarFill" size="small" color={colors.blue[800]} />
    </div>
  )
}

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="mb-2 flex h-[30px] items-center justify-between">
      {children}
    </div>
  )
}

const Title = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-grow">
      <h4 className="title-small line-clamp-2 break-all text-gray-900">
        {children}
      </h4>
    </div>
  )
}

const Footer = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center justify-between">{children}</div>
}

export const Card = Object.assign(CardRoot, {
  Header,
  Title,
  Footer,
  FileBadge,
  RepresentativeBadge,
})
