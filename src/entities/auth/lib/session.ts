import { redirect } from 'next/navigation'

import {
  getTeacherSession as _getTeacherSession,
  updateTeacherSession,
} from 'auth'

const getTeacherSession = async () => {
  const session = await _getTeacherSession()

  if (!session) {
    redirect('/sign-in')
  }

  return session
}

export {
  getTeacherSession,
  _getTeacherSession as getNullableTeacherSession,
  updateTeacherSession,
}
