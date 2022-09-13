import React from 'react'

import { Container } from './Styles'

interface Props {
  children: React.ReactNode
}

const PageTemplate = (prop: Props) => {
  return <Container>{prop.children}</Container>
}

export default PageTemplate
