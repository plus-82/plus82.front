import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

const meta = {
  title: 'Component/Header',
  component: Header,
  decorators: [
    Story => (
      <div style={{ width: '1440px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
