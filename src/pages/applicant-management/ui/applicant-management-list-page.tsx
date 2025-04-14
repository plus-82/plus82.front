'use client'

import { useState } from 'react'

import { Layout, Tabs, Table, Pagination } from 'shared/ui'

const relations = [
  {
    id: 1,
    firstName: '길동',
    lastName: '홍',
    jobPostTitle: '웹 프론트엔드 개발자',
    memo: '메모',
    submittedDate: '2024-01-01',
  },
  {
    id: 2,
    firstName: '길동',
    lastName: '홍',
    jobPostTitle: '웹 프론트엔드 개발자',
    memo: '메모',
    submittedDate: '2024-01-01',
  },
]

export const ApplicantManagementListPage = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
    // API 호출 등 페이지 변경 로직
  }

  return (
    <Layout wide>
      <h1 className="display-small mb-10 text-center font-bold text-gray-900">
        지원자 관리
      </h1>
      <Tabs.Root defaultValue="SUBMITTED" className="w-[480px]">
        <Tabs.List size="small" width="full" variant="box" className="mb-4">
          <Tabs.Trigger value="SUBMITTED">접수</Tabs.Trigger>
          <Tabs.Trigger value="REVIEWED">검토</Tabs.Trigger>
          <Tabs.Trigger value="ACCEPTED">합격</Tabs.Trigger>
          <Tabs.Trigger value="REJECTED">불합격</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div className="mb-10 h-[584px]">
        <Table.Root className="w-full">
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-[260px]">지원자</Table.Head>
              <Table.Head className="w-[380px]">공고 제목</Table.Head>
              <Table.Head className="w-[300px]">메모</Table.Head>
              <Table.Head className="w-[120px]">지원 일자</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {relations.map(relation => (
              <Table.Row key={relation.id}>
                <Table.Cell>
                  {relation.firstName} {relation.lastName}
                </Table.Cell>
                <Table.Cell>{relation.jobPostTitle}</Table.Cell>
                <Table.Cell>{relation.memo}</Table.Cell>
                <Table.Cell>{relation.submittedDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      <Pagination
        pageCount={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Layout>
  )
}
