import React from 'react'
import { HomeStyled, Container } from './AccountPage.styles'
import { HomeTemplate } from '../../templates'
import AccountPageData from './AccountPageData.json'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Button } from '../../components/atoms'
import { FormField, TitleContainer } from '../../components/molecules'
import { serializeAccountInfoToFormData } from './helper'

export function AccountPage() {
  const { userInfo, organizationInfo } = useSelector(state => {
    return {
      userInfo: state.users.userInfo || false,
      organizationInfo: state.users.organizationInfo || false
    }
  })

  const accountInfo = serializeAccountInfoToFormData(userInfo, organizationInfo)

  const { handleSubmit, register, setValue } = useForm()

  setValue('DetailsFormName', accountInfo.DetailsFormName)
  setValue('DetailsFormEmail', accountInfo.DetailsFormEmail)
  setValue('DetailsFormOrganization', accountInfo.DetailsFormOrganization)
  setValue(
    'DetailsFormOrganizationSlug',
    accountInfo.DetailsFormOrganizationSlug
  )

  function onSubmit(data) {
    console.log('onSubmit', data)
  }

  return (
    <HomeTemplate>
      <HomeStyled>
        <TitleContainer>
          <h3>{AccountPageData.title}</h3>
          <Button onClick={handleSubmit(onSubmit)}>
            {AccountPageData.buttonAdd}
          </Button>
        </TitleContainer>
        <main>
          <Container>
            {AccountPageData.fields.map(field => (
              <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                options={field.options}
                register={register}
              />
            ))}
          </Container>
        </main>
      </HomeStyled>
    </HomeTemplate>
  )
}
