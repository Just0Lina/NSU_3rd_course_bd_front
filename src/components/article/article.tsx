import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Constants from '@/configs/constants'

// Styled component for the article container with borders
const ArticleContainer = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    width: 430px;
    margin: 20px;
`

const Margin = styled.div`
    margin-top: 30px;
`

// Styled component for the article image with default image
const ArticleImage = styled.img`
    width: 100%;
    height: 300px;
`

// Styled component for the article title
const ArticleTitle = styled.h2`
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`

// Styled component for the article content
const ArticleContent = styled.p`
    font-size: 1rem;
    margin-top: 10px;
    color: #333;
    text-align: center;
    height: 50px;
    overflow-y: scroll;
`
const Article = ({ title, content, imageUrl }) => {
  const [fetchedImageUrl, setFetchedImageUrl] = useState(null)

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const mediaResponse = await fetch(`${Constants.BASE_URL}/media/${imageUrl}`)
        console.log(' imageUrlData:', mediaResponse)

        const mediaData = await mediaResponse.blob()
        console.log(' imageUrlData:', mediaResponse)

        imageUrl = URL.createObjectURL(mediaData)
        setFetchedImageUrl(imageUrl)
        console.log('Fetched imageUrlData:', imageUrl)

      } catch (error) {
        console.error('Error fetching media:', error)
      }
    }

    if (typeof imageUrl === 'number') {
      fetchImageUrl()
    }
  }, [imageUrl]) // Run the effect whenever imageUrl changes or when component mounts

  return (
    <Margin>
      <ArticleContainer>
        <div style={{ height: '80px' }}> {/* Wrapper for the header elements */}
          <ArticleTitle>{title}</ArticleTitle>
        </div>
        {imageUrl ? (
          <ArticleImage src={fetchedImageUrl} alt={title} />
        ) : (
          <ArticleImage src="https://www.intl-spectrum.com/articles/r75/ArticleDefault.jpg?x=80x56"
                        alt="Default Image" />
        )}
        <ArticleContent>{content}</ArticleContent>
      </ArticleContainer>
    </Margin>
  )
}

function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}


export default Article
