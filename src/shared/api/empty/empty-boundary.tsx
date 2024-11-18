import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
} from 'react'

type EmptyState = {
  isEmpty: boolean
  setIsEmpty: (empty: boolean) => void
}

export const EmptyContext = createContext<EmptyState | null>(null)

type Props = {
  fallback?: ReactNode
}

export const EmptyBoundary = ({
  fallback,
  children,
}: PropsWithChildren<Props>) => {
  const [isEmpty, setIsEmpty] = useState(false)

  const value = useMemo(() => ({ isEmpty, setIsEmpty }), [isEmpty])

  return (
    <EmptyContext.Provider value={value}>
      {isEmpty ? fallback : children}
    </EmptyContext.Provider>
  )
}
