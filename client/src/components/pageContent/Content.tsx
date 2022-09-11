import React from 'react'
import Currency from '../../helpers/Curreny'
import { Article } from '../../interfaces/models/Article'
import { ArticleCard, CardImage, CardContent, CardButton, ButtonWrapper, Title } from './Styles'

interface Props {
  content?: Article[]
}

function Content(props: Props) {
  return (
    <>
      {props.content?.map((article: Article, index: number) => {
        return (
          <ArticleCard key={index}>
            <CardImage src={article.images[0].path} alt={article.name} />
            <CardContent>
              <Title>{article.name}</Title>
              {article.variantName && <p>{article.variantName}</p>}
              {article.prices.regular.value && (
                <p>
                  {Currency(article.prices.currency)}
                  {article.prices.regular.value}
                </p>
              )}
              <ButtonWrapper>
                <CardButton>Add to cart</CardButton>
              </ButtonWrapper>
            </CardContent>
          </ArticleCard>
        )
      })}
    </>
  )
}

export default Content
