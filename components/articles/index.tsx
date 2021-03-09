import React from 'react'
import ListOfArticles from "./listOfArticles"
import MainArticle from "./mainArticle"
import { Pagination } from '@material-ui/lab';

import content from "../../content/content.json"


const searchFunction = (selectedArticles: string) => {
  if (selectedArticles === "recent") return content.main
  const selectedArticlesContent = content.main.filter((content) =>
    content.category === selectedArticles
  )
  return selectedArticlesContent
}



const paginationLogic = (newValue: number, articleListModifiedContent: any) => {
  const start = (newValue - 1) * 4
  const end = start + 4
  const newArticles = articleListModifiedContent.filter((content: any, index: number) =>
    index >= start && end > index
  )
  return newArticles
}


const howManyArticlesOnPage = (articleListModifiedContent: any) => {
  const howManyArticles = articleListModifiedContent.length
  return Math.ceil(howManyArticles / 4)
}



const Index = ({ selectedArticles }: any) => {

  const articleListContent = searchFunction(selectedArticles)
  const [, ...articleListModifiedContent] = articleListContent

  const pageCount = howManyArticlesOnPage(articleListModifiedContent)
  const [value, setValue] = React.useState(0);



  const [articles, setArticles] = React.useState(paginationLogic(1, articleListModifiedContent));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setArticles(paginationLogic(newValue, articleListModifiedContent))

  }

  return (
    <div>
      <MainArticle articleContent={articleListContent[0]} />
      <ListOfArticles pageIndex={value} articleListContent={articles} />
      <Pagination count={pageCount} page={value} color="primary" onChange={handleChange} />
    </div>
  )
}



export default Index
