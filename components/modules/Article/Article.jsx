import ArticleDate from "./ArticleDate";
import ArticleImage from "./ArticleImage";
import ArticleLike from "./ArticleLike";
import ArticleDescription from "./ArticleDescription";
import ArticleHeader from "./ArticleHeader";
import ArticleButton from "./ArticleButton";

function Article({ title, date, likes, description, id, img }) {
  return (
    <div className="flex flex-col items-center justify-between rounded-lg border border-zinc-300 bg-gray-50 p-4">
      <div className=" relative flex flex-col items-start justify-start gap-y-2 pb-4">
        <ArticleHeader text={title} />
        <ArticleDescription description={description} />
        <div className="flex items-center gap-x-2 ">
          <ArticleDate date={date} />
          <ArticleLike likeCount={likes} />
        </div>
        <ArticleButton id={id} />
      </div>
     <ArticleImage img={img}/>
    </div>
  );
}

export default Article;
