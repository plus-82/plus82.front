'use client'

import { format } from 'date-fns'
import { useState } from 'react'

import { convertStudentTypeToArray } from 'entities/job-post'
import { Resume } from 'entities/resume'
import { cn } from 'shared/lib'
import { Layout, Pagination, Table, Tabs } from 'shared/ui'

enum TabValue {
  SHOW_RESUME = 'SHOW_RESUME',
  SHOW_HISTORY = 'SHOW_HISTORY',
}

const resumes: Resume[] = [
  {
    id: 1,
    firstName: 'First Name 1',
    lastName: 'Last Name 1',
    genderType: 'MALE',
    birthDate: '2000-01-01',
    hasVisa: true,
    visaType: 'E2',
    forKindergarten: true,
    forElementary: false,
    forMiddleSchool: false,
    forHighSchool: false,
    forAdult: false,
    countryNameEn: 'Country Name En 1',
  } as Resume,
]

export const FindTeacherPage = () => {
  const [tab, setTab] = useState(TabValue.SHOW_RESUME)

  const handleTabChange = (value: string) => {
    setTab(value as TabValue)
  }

  const handleItemClick = (id: number) => () => {
    console.log(id)
  }

  const hasNoResume = false

  const totalPages = 1
  const currentPage = 1

  const handlePageChange = ({ selected }: { selected: number }) => {
    console.log(selected)
  }

  return (
    <Layout wide>
      <div className="w-[784px]">
        <Tabs.Root
          defaultValue={TabValue.SHOW_RESUME}
          onValueChange={handleTabChange}
        >
          <Tabs.List
            size="small"
            width="full"
            variant="box"
            className="mb-4 w-[240px]"
          >
            <Tabs.Trigger value={TabValue.SHOW_RESUME}>
              이력서 보기
            </Tabs.Trigger>
            <Tabs.Trigger value={TabValue.SHOW_HISTORY}>히스토리</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={tab} className="w-full">
            <div className="mb-10 h-[584px]">
              <Table.Root className="w-full">
                <Table.Header>
                  <Table.Row className={cn(hasNoResume && 'border-none')}>
                    <Table.Head className="w-[150px]">이름</Table.Head>
                    <Table.Head className="w-[80px]">성별</Table.Head>
                    <Table.Head className="w-[120px]">생년월일</Table.Head>
                    <Table.Head className="w-[140px]">국적</Table.Head>
                    <Table.Head className="w-[120px]">비자</Table.Head>
                    <Table.Head className="w-[120px]">대상 학생</Table.Head>
                  </Table.Row>
                </Table.Header>
                {(() => {
                  if (hasNoResume) {
                    return null
                  }

                  return (
                    <Table.Body>
                      {resumes.map(resume => (
                        <Table.Row
                          key={resume.id}
                          onClick={handleItemClick(resume.id!)}
                          className={cn('min-h-[54px] cursor-pointer')}
                        >
                          <Table.Cell>
                            {resume.firstName} {resume.lastName}
                          </Table.Cell>
                          <Table.Cell>
                            {resume.genderType === 'MALE' ? '남성' : '여성'}
                          </Table.Cell>
                          <Table.Cell>
                            {format(resume.birthDate, 'yyyy.MM.dd')}
                          </Table.Cell>
                          <Table.Cell>{resume.countryNameEn}</Table.Cell>
                          <Table.Cell>
                            {resume.hasVisa ? resume.visaType : '비자 없음'}
                          </Table.Cell>
                          <Table.Cell>
                            {(() => {
                              const studentType = convertStudentTypeToArray({
                                forKindergarten: resume.forKindergarten,
                                forElementary: resume.forElementary,
                                forMiddleSchool: resume.forMiddleSchool,
                                forHighSchool: resume.forHighSchool,
                                forAdult: resume.forAdult,
                                locale: 'ko',
                              })

                              const hasMultipleStudentType =
                                studentType.length > 1
                              const hasAllStudentType = studentType.length === 5

                              if (hasAllStudentType) {
                                return '모두'
                              }

                              if (hasMultipleStudentType) {
                                return `${studentType[0]} 외 ${studentType.length - 1}`
                              }

                              return studentType[0]
                            })()}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  )
                })()}
              </Table.Root>
              {hasNoResume && (
                <p className="title-large mt-20 text-center font-medium text-gray-700">
                  조건에 맞는 선생님이 없어요
                </p>
              )}
            </div>
          </Tabs.Content>
        </Tabs.Root>
        <Pagination
          pageCount={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  )
}
