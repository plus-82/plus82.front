import { Layout } from 'shared/ui'

import { FeedItem } from './feed-item'
import { SidePanel } from './side-panel'

export const CommunityPage = () => {
  return (
    <Layout wide className="flex">
      <SidePanel />
      <div className="flex-1">
        <div className="mx-auto w-[530px]">
          <FeedItem />
          <FeedItem />
        </div>
      </div>
    </Layout>
  )
}
