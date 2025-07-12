import { Layout } from 'shared/ui'

import { FeedItem } from './feed-item'
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
