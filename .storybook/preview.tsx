import type { Preview } from '@storybook/react'
import clsx from 'clsx'

import { pretendard } from '../src/app/styles'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        className={clsx(
          pretendard.className,
          'font-pretendard',
          'flex',
          'justify-center',
          'items-center',
        )}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
