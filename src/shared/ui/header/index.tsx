import { cn } from 'shared/lib'
import { Button, Tabs } from 'shared/ui'

import Logo from './assets/Logo.svg'
import * as css from './variants'

export const Header = () => {
  return (
    <header className={cn(css.wrapper())}>
      <div className={cn(css.leftSection())}>
        <Logo />
        <Tabs>
          <Tabs.Trigger value="one">Job board</Tabs.Trigger>
          <Tabs.Trigger value="two">Job board</Tabs.Trigger>
        </Tabs>
      </div>
      <div className={cn(css.rightSection())}>
        <div className={cn(css.textButtons())}>
          <Button variant="text" size="small">
            Sign In
          </Button>
          <div className={cn(css.divider())} />
          <Button variant="text" size="small">
            Sign Up
          </Button>
        </div>
        <Button variant="lined" size="small">
          Academy
        </Button>
        <Button variant="lined" size="small">
          Language
        </Button>
      </div>
    </header>
  )
}
