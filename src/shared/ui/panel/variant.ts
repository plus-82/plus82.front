export const divide = ({ height }: { height: number }) => `
  [&>*:not(:last-child)]:after:content-[''] 
  [&>*:not(:last-child)]:after:absolute 
  [&>*:not(:last-child)]:after:right-0 
  [&>*:not(:last-child)]:after:top-1/2 
  [&>*:not(:last-child)]:after:-translate-y-1/2 
  [&>*:not(:last-child)]:after:h-[${height}px]
  [&>*:not(:last-child)]:after:w-[1px] 
  [&>*:not(:last-child)]:after:bg-gray-200
`
