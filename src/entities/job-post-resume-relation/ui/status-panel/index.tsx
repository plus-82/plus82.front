import { padNumber } from 'shared/lib'
import { divide, Panel } from 'shared/ui'

import { Status, StatusSummary } from '../../model/status'

type Props = {
  active: Status
  summary: StatusSummary
}

export const StatusPanel = ({ active, summary }: Props) => {
  return (
    <div className={`flex w-full ${divide({ height: 80 })}`}>
      <Panel active={active === 'total'}>
        <Panel.Label>All</Panel.Label>
        <Panel.Value>{padNumber(summary.total)}</Panel.Value>
      </Panel>
      <Panel active={active === 'submitted'}>
        <Panel.Label>Submitted</Panel.Label>
        <Panel.Value>{padNumber(summary.submitted)}</Panel.Value>
      </Panel>
      <Panel active={active === 'reviewed'}>
        <Panel.Label>Reviewed</Panel.Label>
        <Panel.Value>{padNumber(summary.reviewed)}</Panel.Value>
      </Panel>
      <Panel active={active === 'accepted'}>
        <Panel.Label>Accdepted</Panel.Label>
        <Panel.Value>{padNumber(summary.accepted)}</Panel.Value>
      </Panel>
      <Panel active={active === 'rejected'}>
        <Panel.Label>Rejected</Panel.Label>
        <Panel.Value>{padNumber(summary.rejected)}</Panel.Value>
      </Panel>
    </div>
  )
}
