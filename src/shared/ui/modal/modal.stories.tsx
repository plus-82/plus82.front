import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './modal'

const meta = {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    componentSubtitle:
      'Modal is a component that provides a modal to display content.',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to display in the modal',
    },
  },
  args: {
    children: 'Modal',
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
