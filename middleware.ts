import { stackMiddlewares } from 'shared/config/middleware/stack-middleware'
import { withAuth } from 'shared/config/middleware/with-auth'
import { withBusinessAuth } from 'shared/config/middleware/with-business-auth'

const middlewares = [withBusinessAuth, withAuth]
export default stackMiddlewares(middlewares)

export const config = {
  matcher: [
    '/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)',
  ],
}
