import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './text-area'

const meta = {
  title: 'Component/TextArea',
  component: TextArea,
  decorators: [
    Story => (
      <div className="flex w-[500px] justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: 'TextArea is a multi-line text input field.',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'The class name of the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the textarea should take up the full width',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    placeholder: 'placeholder',
    fullWidth: false,
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
