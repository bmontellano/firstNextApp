import ArticleList from '../components/ArticleList'
import {server} from '../config'

export default function Home({articles}) {
  return (
    <div>
      <h1 style={{"padding": "0px 10px", margin: 0}}><u>My First Next.js App</u></h1>
      <h5 style={{"width": "80%", "padding": "0px 10px", margin: 0 }}>Next.js is good for SEO,  because of server-side rendering. AKA after requested, the server sends a response page rich in pre-rendered HTML, which SEO loves.</h5>
      <ArticleList articles = {articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

/*
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
*/