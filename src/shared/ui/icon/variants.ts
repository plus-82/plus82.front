import { cva, VariantProps } from 'class-variance-authority'

export const icon = cva('', {
  variants: {
    size: {
      small: 'h-4 w-4',
      medium: 'h-5 w-5',
      large: 'h-6 w-6',
      xLarge: 'h-9 w-9',
    },
  },
})

export type IconVariants = VariantProps<typeof icon>