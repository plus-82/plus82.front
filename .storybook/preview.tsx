import type { Preview } from '@storybook/react'
import clsx from 'clsx'
import { SpoqaHanSansNeo } from '../src/app/styles'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <div
        className={clsx(SpoqaHanSansNeo.variable, 'font-spoqa-han-sans-neo')}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
