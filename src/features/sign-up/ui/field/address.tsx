import { fieldCss } from 'shared/form'
import { Button, Label, TextField } from 'shared/ui'

export const Address = () => {
  return (
    <div className={fieldCss.fieldWrapper()}>
      <Label required>학원 주소</Label>
      <div className="flex gap-2">
        <TextField readOnly className="bg-gray-100" />
        <Button variant="lined" size="large" className="w-[120px] shrink-0">
          주소 검색
        </Button>
      </div>
      <TextField readOnly className="bg-gray-100" />
      <TextField placeholder="상세 주소를 입력해 주세요" />
    </div>
  )
}
