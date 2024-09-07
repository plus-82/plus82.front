import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta = {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'tonal', 'lined', 'text'],
      description: 'The variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
