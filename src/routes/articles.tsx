import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout'
import { Article } from '@/components/article'
import Constants from './../configs/constants'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'


function ArticlesPage() {
  // State to store the fetched articles
  const [articles, setArticles] = useState([])
  // State to manage loading state
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchArticles()
      } catch (error) {
        console.error('Error fetching articles:', error)
        // Handle error, show error message, etc.
        throw error // Re-throw the error so it's caught by the calling function
      }
    }

    fetchData()
  }, [])

  const fetchArticles = async () => {
    fetch(`${Constants.BASE_URL}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // Add any additional headers if required
      }
    })
      .then(async response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        // Update articles state with fetched data
        setArticles(data)
        // Update loading state to false
        setLoading(false)
        return response.json()
      })
      .then(data => {
        // Handle successful response data here
      })
      .catch(error => {
        console.error('Error:', error)
        // Handle errors here
      })
  }

  return (
    <Layout>
      <Grid container spacing={1} justifyContent="space-evenly">
        {loading ? (
          <p>Loading...</p>
        ) : (

          articles.map((article, index) => (
            <Article
              key={article.id}
              title={article.name}
              imageUrl={article.media_id}
              content={article.content}
            >
              {/* Render article content here */}
              <p>{article.content}</p>
            </Article>
          ))
        )}
      </Grid>
    </Layout>
  )
}

export default ArticlesPage
