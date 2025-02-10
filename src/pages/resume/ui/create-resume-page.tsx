'use client'

import { ChangeEvent, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { CountrySelect } from 'entities/country'
import { colors } from 'shared/config'
import { fieldCss, Form } from 'shared/form'
import { Heading, Layout, Image, Icon, Label, Button } from 'shared/ui'

export const CreateResumePage = () => {
  const form = useForm()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      form.setValue('image', file)
    }
  }

  const studentTypeOptions = [
    'forKindergarten',
    'forElementary',
    'forMiddleSchool',
    'forHighSchool',
    'forAdult',
  ]

  return (
    <Form {...form} className="relative">
      <Layout wide>
        <input
          name="title"
          type="text"
          placeholder="Please enter your resume title"
          className="display-small before:display-small mb-10 w-full text-gray-900 before:text-gray-500 before:content-[attr(data-placeholder)] empty:before:inline-block not-empty:before:hidden"
        />
        <section className="mb-10">
          <Heading size="small" underline={false}>
            <span className="title-small text-error">*</span>Personal
            Introduction
          </Heading>
          <Form.TextArea
            name="personalIntroduction"
            placeholder="Please write a brief self-introduction in 5 lines or less"
            className="h-[152px]"
            fullWidth
          />
        </section>
        <section>
          <Heading size="small" className="mb-8">
            Personal Information
          </Heading>
          <div className="flex gap-24">
            <button className="relative h-fit">
              <Image
                src=""
                alt=""
                className="h-[110px] w-[110px] rounded-full"
                fallback={
                  <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-gray-300">
                    <Icon
                      name="User"
                      size="custom"
                      className="h-[100px] w-[100px]"
                      color={colors.gray[700]}
                    />
                  </div>
                }
              />
              <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
                <Icon name="Plus" size="large" color={colors.gray[700]} />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </button>
            <div className="flex-grow gap-8">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'not-last:mb-8',
                  })}
                >
                  <Label required>First Name</Label>
                  <Form.Control name="firstName">
                    <Form.TextField
                      placeholder="Enter your first name"
                      fullWidth
                    />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
                <div className={fieldCss.fieldWrapper({ className: 'mb-8' })}>
                  <Label required>Last Name</Label>
                  <Form.Control name="lastName">
                    <Form.TextField
                      placeholder="Enter your last name"
                      fullWidth
                    />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
              </div>

              <div
                className={fieldCss.fieldWrapper({
                  className: 'not-last:mb-8',
                })}
              >
                <Label required>Email</Label>
                <Form.Control name="email">
                  <Form.TextField placeholder="example@email.com" fullWidth />
                  <Form.ErrorMessage />
                </Form.Control>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'not-last:mb-8',
                  })}
                >
                  <Label required>Nationality</Label>
                  <Form.Control name="countryId">
                    <CountrySelect />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
                <div className={fieldCss.fieldWrapper({ className: 'mb-8' })}>
                  <Label required>Current Country of Residence</Label>
                  <Form.Control name="residenceCountryId">
                    <CountrySelect placeholder="Choose your current country of residence" />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'not-last:mb-8',
                  })}
                >
                  <Label required>Degree</Label>
                  <Form.Control name="degree">
                    <Form.TextField placeholder="Enter your degree" fullWidth />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
                <div className={fieldCss.fieldWrapper({ className: 'mb-8' })}>
                  <Label>Major</Label>
                  <Form.Control name="major">
                    <Form.TextField placeholder="Enter your major" fullWidth />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'mb-8',
                  })}
                >
                  <Label required>Birth</Label>
                  <Form.Control name="birthDate">
                    <Form.DatePicker
                      placeholder="Choose your birth"
                      fullWidth
                    />
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'mb-8',
                  })}
                >
                  <Label required>Gender</Label>
                  <Form.Control name="genderType">
                    <Form.RadioGroup className={fieldCss.radioFieldWrapper()}>
                      <Form.Radio label="Female" value="FEMALE" />
                      <Form.Radio label="Male" value="MALE" />
                    </Form.RadioGroup>
                  </Form.Control>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'mb-8',
                  })}
                >
                  <Label required>Do you have a Visa?</Label>
                  <Form.Control name="hasVisa">
                    <Form.RadioGroup className={fieldCss.radioFieldWrapper()}>
                      <Form.Radio label="Yes" value="YES" />
                      <Form.Radio label="No" value="NO" />
                    </Form.RadioGroup>
                  </Form.Control>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={fieldCss.fieldWrapper({
                    className: 'mb-8',
                  })}
                >
                  <Label required>Visa Type</Label>
                  <Form.Control name="visaType">
                    <Form.Select placeholder="Choose your visa type">
                      <Form.SelectItem value="VISA">Visa</Form.SelectItem>
                      <Form.SelectItem value="GREEN_CARD">
                        Green Card
                      </Form.SelectItem>
                      <Form.SelectItem value="CITIZENSHIP">
                        Citizenship
                      </Form.SelectItem>
                    </Form.Select>
                    <Form.ErrorMessage />
                  </Form.Control>
                </div>
              </div>

              <div
                className={fieldCss.fieldWrapper({
                  className: 'not-last:mb-8',
                })}
              >
                <Label required>Student Type</Label>
                <div className="flex gap-[30px]">
                  <Form.CheckboxGroup
                    name="studentType"
                    options={studentTypeOptions}
                  >
                    <Form.Checkbox
                      label="Kindergarten"
                      value="forKindergarten"
                    />
                    <Form.Checkbox label="Elementary" value="forElementary" />
                    <Form.Checkbox
                      label="Middle School"
                      value="forMiddleSchool"
                    />
                    <Form.Checkbox label="High School" value="forHighSchool" />
                    <Form.Checkbox label="Adult" value="forAdult" />
                  </Form.CheckboxGroup>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <footer className="sticky bottom-0 left-0 h-24 w-full border-t border-gray-300 bg-white">
        <div className="mx-auto h-fit w-fit">
          <div className="mx-[40px] my-6 flex w-[1060px] place-items-center justify-end gap-10">
            <Form.CheckboxGroup name="isRepresentative" options={['true']}>
              <Form.Checkbox
                label="Selected as a representative resume"
                value="true"
              />
            </Form.CheckboxGroup>
            <Button size="large" className="w-[180px]">
              Register
            </Button>
          </div>
        </div>
      </footer>
    </Form>
  )
}
