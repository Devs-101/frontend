import React from 'react'
import { MainTemplate } from '../../templates'
import { EventInfoStyled, Container } from './EventInfoPage.styles'
import EventInfoPageData from './EventInfoPageData.json'
import { TitlePage, FormField } from '../../components/molecules'

export function EventInfoPage() {
  return (
    <MainTemplate>
      <EventInfoStyled>
        <TitlePage
          title={EventInfoPageData.title}
          button={EventInfoPageData.button}
        />
        <Container>
          {EventInfoPageData.fields.map(field => (
            <FormField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              options={field.options}
            />
          ))}
        </Container>
      </EventInfoStyled>
    </MainTemplate>
  )
}
