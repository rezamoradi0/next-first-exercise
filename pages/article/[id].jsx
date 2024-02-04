import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
function ArticlePage({ article }) {
  const router = useRouter();
  if (!article || article == null) {
    ("404");
  }
  return (
    <article className="flex min-h-screen w-full p-8 bg-white">
      <div className="flex w-3/5 flex-col items-start justify-start">
        <div className="flex w-full justify-between">
          <p className="text-xl font-extrabold capitalize text-orange-600">
            {article.category}
          </p>
          <button
            className="mx-10 rounded-lg border  border-gray-400 px-6 py-2"
            onClick={() => {
              router.back();
            }}
          >
            {" "}
            Back
          </button>
        </div>
        <div className="mt-20 w-full px-16">
          <p className="my-5 text-xs text-gray-500">
            Writer : {article.writer}
          </p>
          <p className="my-5 text-3xl font-bold text-red-600">
            {article.title}
          </p>
          <div className="leading-8 text-gray-900">{article.text}</div>
        </div>
      </div>{" "}
      <img
        className="block w-2/5  max-h-[90vh] rounded-lg object-cover object-center"
        src={article.img}
        alt={article.title}
      />
    </article>
  );
}

export default ArticlePage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const dbPath = path.join(process.cwd(), "db", "data.json");
  const dataBuffer = fs.readFileSync(dbPath);
  const data = JSON.parse(dataBuffer);
  const articleData  =data.articlesData.filter((article) => String(article.id) == id)[0];
  console.log(articleData);
  return {
    props: {
      article:articleData
    },
    revalidate: 10,
  };
}
