import { cva } from 'class-variance-authority'

export const wrapper = cva(
  'flex w-[1440px] items-center justify-between px-[7.5rem] py-3',
)

export const leftSection = cva('flex items-center gap-[7.5rem]')

export const rightSection = cva('flex items-center gap-2')

export const textButtons = cva('flex items-center')

export const divider = cva('h-5 w-px bg-gray-300')
