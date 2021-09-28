import react from "react";
import Article from './Article'
const ArticleList = ({posts}) => {
    const articles = posts.map(article => <Article key={article.id} title={article.title} date={article.date} article={article.article} preview={article.preview}/>)
    return(
        <>
        <main>
            {articles}
        </main>
        </>
    )
}

export default ArticleList;