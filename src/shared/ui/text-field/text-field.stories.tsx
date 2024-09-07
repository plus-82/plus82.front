import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

const meta = {
  title: 'Component/TextField',
  component: TextField,
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether the text field has an error',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the text field should take up the full width',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the text field is read-only',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the text field is disabled',
    },
  },
  args: {
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
