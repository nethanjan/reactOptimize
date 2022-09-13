import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`

export const LeftColumn = styled.div`
  background: #95b5b1;
  flex: 1;
`

export const RightColumn = styled.div`
  min-height: 100%;
  flex-grow: 9;
  margin-left: 20px;
`

export const TopContent = styled.div`
  display: flex;
`

export const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`
