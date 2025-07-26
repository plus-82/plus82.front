'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { colors } from 'shared/config'
import { Slot } from 'shared/lib'
import { Icon, TextField } from 'shared/ui'

export const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const params = search ? `?search=${search}` : ''
      router.push(`/community${params}`)
    }
  }

  return (
    <TextField
      value={search}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="mx-auto mb-10 w-[530px]"
      placeholder="Try searching with keywords you’re interested in"
    >
      <Slot name="left">
        <Icon name="Search" size="large" color={colors.gray[700]} />
      </Slot>
    </TextField>
  )
}
