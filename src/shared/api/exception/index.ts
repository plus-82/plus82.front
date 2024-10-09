export enum CommonResponseCode {
  SUCCESS = 'CMN-001',
  FAILED = 'CMN-002',
}

export enum AuthExceptionCode {
  TOKEN_NOT_FOUND = 'AE-001',
  EMAIL_NOT_CORRECT = 'AE-002',
  PW_NOT_CORRECT = 'AE-003',
  EXPIRED_TOKEN = 'AE-004',
  INVALID_TOKEN_TYPE = 'AE-005',
  INVALID_TOKEN = 'AE-006',
}

export type ResponseCode = CommonResponseCode | AuthExceptionCode
