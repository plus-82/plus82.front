import { Button, Label, Link, TextField } from 'shared/ui'

import * as css from './variants'

export const SignInPage = () => {
  return (
    <div className={css.layout()}>
      <h1 className={css.heading()}>Login</h1>
      <form>
        <div className={css.fields()}>
          <div className={css.field()}>
            <Label>Email</Label>
            <TextField placeholder="Please enter your email" />
          </div>
          <div className={css.field()}>
            <Label>Password</Label>
            <TextField
              type="password"
              placeholder="Please enter your password"
            />
          </div>
        </div>
        <div className={css.buttonGroup()}>
          <Button size="large" fullWidth>
            Sign In
          </Button>
          <Link href="/" variant="tertiary">
            Password forgot
          </Link>
        </div>
      </form>
      <div className={css.footer()}>
        <p>Not a member yet?</p>
        <Link href="/">Create an account</Link>
      </div>
    </div>
  )
}
