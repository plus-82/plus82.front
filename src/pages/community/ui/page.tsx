import { Layout } from 'shared/ui'

import { FeedList } from './feed-list'
import { SidePanel } from './side-panel'

export const CommunityPage = () => {
  return (
    <Layout wide className="flex">
      <SidePanel />
      <div className="flex-1">
        <FeedList />
      </div>
    </Layout>
  )
}
