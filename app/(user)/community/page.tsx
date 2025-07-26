import { isNil } from 'lodash-es'

import { getNullableTeacherSession } from 'entities/auth'
import { CommunityPage } from 'pages/community'

const Page = async () => {
  const session = await getNullableTeacherSession()

  const isPublic = isNil(session)

  return <CommunityPage isPublic={isPublic} />
}

export default Page
