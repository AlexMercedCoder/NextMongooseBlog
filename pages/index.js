import { getBlogs } from '../utils/actions'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home({blogs}) {
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <div>
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
        </div>
      ))}
      <Link href="/new"><button>New Blog</button></Link>

    </div>
  )
}


export async function getServerSideProps(ctx){
  const blogs = JSON.parse(JSON.stringify(await getBlogs()))

  return {
    props: {
      blogs
    }
  }
}