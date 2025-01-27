export type Status =
  | 'total'
  | 'submitted'
  | 'reviewed'
  | 'accepted'
  | 'rejected'

export type StatusSummary = {
  [key in Status]: number
}
