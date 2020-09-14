export function serializeAccountInfoToFormData(
  userInfoFormData,
  organizationInfoFormData
) {
  return {
    DetailsFormName: userInfoFormData.name || '',
    DetailsFormEmail: userInfoFormData.email || '',
    DetailsFormOrganization: organizationInfoFormData.name || '',
    DetailsFormOrganizationSlug: organizationInfoFormData.slug || ''
  }
}
