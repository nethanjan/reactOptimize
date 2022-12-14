import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { GetProductsAction } from '../../actions/GetProducts'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Content from '../../components/pageContent/Content'
import ContentTitle from '../../components/pageContent/ContentTitle'
import Sidebar from '../../components/sidebar/Sidebar'
import { Article } from '../../interfaces/models/Article'
import { RootReducer } from '../../interfaces/reducers/RootReducer'

import PageTemplate from '../templates/PageTemplate'
import { PageContainer, LeftColumn, RightColumn, TopContent, PageContent } from './Styles'

const ProductList = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loadingContent, setLoading] = useState(true)
  const productsData = useSelector((state: RootReducer) => state.products)
  const searchValue = useSelector((state: RootReducer) => state.search.title)

  useEffect(() => {
    GetProductsAction()
  }, [])

  useEffect(() => {
    if (!productsData.loading) {
      setLoading(false)
    }
  }, [productsData.loading])

  useEffect(() => {
    if (productsData.name !== '') {
      setArticles(productsData.categoryArticles)
    }
  }, [productsData.name, productsData.categoryArticles])

  useEffect(() => {
    if (searchValue !== '') {
      const searchedProducts = productsData.categoryArticles.filter(
        (p: Article) => p.name.toLowerCase().indexOf(searchValue) > -1,
      )
      setArticles(searchedProducts)
    } else {
      setArticles(productsData.categoryArticles)
    }
  }, [searchValue, productsData.categoryArticles])

  let articleCount = productsData.articleCount
  if (searchValue !== '') articleCount = articles.length

  return (
    <PageTemplate>
      <LeftColumn>
        <Sidebar categories={productsData.childrenCategories} />
      </LeftColumn>
      <PageContainer>
        <Header />
        <RightColumn>
          {productsData.name ? (
            <>
              <TopContent>
                <ContentTitle
                  title={productsData.name}
                  count={articleCount}
                  loading={loadingContent}
                />
              </TopContent>
              <PageContent>
                <Content content={articles} />
              </PageContent>
            </>
          ) : (
            <TopContent>
              <ContentTitle title={'Loading...'} loading={loadingContent}></ContentTitle>
            </TopContent>
          )}
        </RightColumn>
        <Footer />
      </PageContainer>
    </PageTemplate>
  )
}

export default ProductList
