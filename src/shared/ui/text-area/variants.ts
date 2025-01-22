import { cva } from 'class-variance-authority'

export const textarea = cva(
  'body-large resize-none rounded-[10px] border border-gray-300 p-4 text-gray-900',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
  },
)
