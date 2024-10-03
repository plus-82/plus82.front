import { cva, VariantProps } from 'class-variance-authority'

export const outerWrapper = cva('', {
  variants: {
    wide: {
      true: 'h-full w-full',
      false: 'flex h-full w-full justify-center',
    },
  },
})

export const innerWrapper = cva('', {
  variants: {
    wide: {
      true: '',
      false: 'm-[50px] w-[360px]',
    },
  },
})

export type LayoutVariants = VariantProps<typeof outerWrapper>
