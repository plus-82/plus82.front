'use client'

import { MouseEvent } from 'react'

import { Card, Resume } from 'entities/resume'
import { colors } from 'shared/config'
import { useDropdown } from 'shared/lib'
import { Dropdown, Icon } from 'shared/ui'

type Props = {
  resume: Resume
}

export const ResumeCard = ({ resume }: Props) => {
  const { isOpen, toggleIsOpen } = useDropdown()

  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    toggleIsOpen()
  }

  return (
    <Card size="medium">
      <Card.Header>
        {resume.hasFile && <Card.FileBadge />}
        {resume.isRepresentative && <Card.RepresentativeBadge />}
      </Card.Header>
      <Card.Title>{resume.title}</Card.Title>
      <Card.Footer>
        <p className="body-medium text-gray-700">2024.09.30</p>
        <button type="button" className="relative" onClick={handleMenuClick}>
          <Icon name="Dot" size="medium" color={colors.gray[700]} />
          {isOpen && (
            <Dropdown className="w-[210px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <Dropdown.Item>Download</Dropdown.Item>
              <Dropdown.Item>Copy</Dropdown.Item>
              <Dropdown.Item className="text-error">Delete</Dropdown.Item>
            </Dropdown>
          )}
        </button>
      </Card.Footer>
    </Card>
  )
}
