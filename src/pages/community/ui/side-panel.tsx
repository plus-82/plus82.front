import { Button } from 'shared/ui'

export const SidePanel = () => {
  return (
    <div className="sticky top-10 h-fit w-[270px] shrink-0 space-y-4 rounded-xl border border-gray-300 p-5">
      <p className="body-large text-center font-medium text-gray-900">
        Sign in for Plus 82
        <br />
        and enjoy more features
      </p>
      <div className="space-y-2">
        <Button variant="primary" size="large" fullWidth>
          Sign In
        </Button>
      </div>
    </div>
  )
}
