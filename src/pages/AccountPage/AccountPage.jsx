import React from 'react'
import { HomeStyled, Container } from './AccountPage.styles'
import { HomeTemplate } from '../../templates'
import AccountPageData from './AccountPageData.json'
import { TitlePage, FormField } from '../../components/molecules'

export function AccountPage() {
  return (
    <HomeTemplate>
      <HomeStyled>
        <TitlePage title="Account" button="Add" />
        <main>
          <Container>
            {AccountPageData.fields.map(field => (
              <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                options={field.options}
              />
            ))}
          </Container>
        </main>
      </HomeStyled>
    </HomeTemplate>
  )
}
