import { colors } from 'shared/config'
import { Image, Icon, linkVariants } from 'shared/ui'

import { ExpandableText } from './expandable-text'

const content = `customary lie bit protection ever test clear guide wheel abroad
          destructive mad temperature accord bank generous approve size to worth
          thin disease whole appearance yet eastern kingdom rock photograph way
          especially ability reward beauty reference turn surround wash wide
          perform enemy song especially heart veil green battle flour cry remain
          weak into bowl flatten force circle storm protection replace election
          reflection furnish none lazy near reproduction winter ornament
          afternoon toe inside film divide guide excuse soften waiter feather
          copper advance star important supper suggest chimney why trip chair
          homemade imitation branch contain solution hammer wind customary lie
          bit protection ever test clear guide wheel abroad destructive mad
          temperature accord bank generous approve size to worth thin disease
          whole appearance yet eastern kingdom rock photograph way especially
          ability reward beauty reference turn surround wash wide perform enemy
          song especially heart veil green battle flour cry remain weak into
          bowl flatten force circle storm protection replace election reflection
          furnish none lazy near reproduction winter ornament afternoon toe
          inside film divide guide excuse soften waiter feather copper advance
          star important supper suggest chimney why trip chair homemade
          imitation branch contain solution hammer wind`

export const FeedItem = () => {
  return (
    <div className="pb-10 not-last:border-b not-last:border-gray-200 not-first:pt-10">
      <div className="mb-3 flex items-center gap-3">
        <Image src="" alt="community" className="h-12 w-12 rounded-full" />
        <div className="grow">
          <p className="title-small font-medium text-gray-900">Name</p>
          <p className="body-large font-normal text-gray-500">6시간 전</p>
        </div>
        <button className="flex h-12 w-12 items-center justify-center">
          <Icon
            name="Dot"
            size="custom"
            color={colors.gray[700]}
            className="h-8 w-8 rotate-90"
          />
        </button>
      </div>

      <div className="mb-3 space-y-3">
        <div className="h-[500px] w-full rounded-xl bg-gray-100" />
        <div>
          <ExpandableText lineClamp={10} content={content} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 items-center justify-center">
            <Icon
              name="Heart"
              size="custom"
              color={colors.gray[700]}
              className="h-6 w-6"
            />
          </button>
          <button className="flex h-10 w-10 items-center justify-center">
            <Icon
              name="Comment"
              size="custom"
              color={colors.gray[700]}
              className="h-6 w-6"
            />
          </button>
          <button className="flex h-10 w-10 items-center justify-center">
            <Icon
              name="Share"
              size="custom"
              color={colors.gray[700]}
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className={linkVariants({ variant: 'secondary' })}>
            2 Likes
          </button>
          <span className="h-[3px] w-[3px] rounded-full bg-gray-500" />
          <button className={linkVariants({ variant: 'secondary' })}>
            1 Comments
          </button>
        </div>
      </div>
    </div>
  )
}
