import { cva } from 'class-variance-authority'

export const container = cva(
  'flex flex-col rounded-lg border border-gray-300',
  {
    variants: {
      size: {
        small: 'h-40 w-[218px] pb-4 pl-6 pr-4 pt-5',
        medium: 'h-[182px] w-[240px] pb-4 pl-6 pr-5 pt-5',
      },
    },
  },
)
