export default function BlogPostPage({params}){
    return <main>
        <h1>Block post</h1>
        <p>{params.slug}</p>
    </main>
}