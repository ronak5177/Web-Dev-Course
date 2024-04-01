// import { useRouter } from 'next/router'
 
export default function Page({params}) {

  let languages = ["javascript", "java", "python", "cpp", "cs"]
  if (languages.includes(params.slug)){
      return <p>Post: {params.slug}</p>
  } else {
    return <h3>Post Not Found</h3>
  }
}