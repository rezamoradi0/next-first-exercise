import fs from "fs";
import path from "path";

import Article from "@/components/modules/Article/Article";
import Articles from "@/components/modules/Article/Articles";
import SelectMenu from "@/components/modules/Article/SelectMenu";
import Header from "@/components/modules/Header";
import SelectOptions from "@/components/modules/SelectOptions";
import { useRouter } from "next/router";

const menuItems = [
  { text: "All", value: "all", url: "/" },
  { text: "Design", value: "design", url: "/design" },
  { text: "Tech", value: "tech", url: "/tech" },
  { text: "Ai", value: "ai", url: "/ai" },
];
const selectOptionItems = [
  { text: "Most Liked", value: "most-liked", url: "like" },
  { text: "Newest", value: "newest", url: "new" },
  { text: "Most View", value: "view", url: "view" },
];

export default function Blog({ articlesData }) {
  const router=useRouter();
  
  const selectOptionCallBack=(value)=>{
    router.replace({
      query: { ...router.query, order: value },
   });

  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-24`}
    >
      <Header
        text={"blog"}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
        aspernatur? Fuga explicabo `}
      />
      <div className="flex w-full flex-col gap-y-8">
        <div className="flex items-center justify-between">
          <SelectMenu items={menuItems} />

          <SelectOptions
            items={selectOptionItems}
            name="order-menu"
            callback={selectOptionCallBack}
          />
        </div>
        <Articles>
          {articlesData.map((article,i) => {
            return (
              <Article 
              key={i}
                title={article.title}
                date={article.date}
                likes={article.likes}
                description={article.description}
                id={article.id}
                img={article.img}
              />
            );
          })}
        </Articles>
      </div>
    </main>
  );
}
export async function getServerSideProps(context) {
  const theSlug = context.query.slug?context.query.slug[0]:"all";
  const theQuery=context.query.order||"all";

  const dbPath = path.join(process.cwd(), "db", "data.json");
  const dataBuffer = fs.readFileSync(dbPath);
  const data = JSON.parse(dataBuffer);

  const articlesData = data.articlesData;
  let newList = [];


  switch (theSlug) {
    case "all":
      {
        newList = articlesData;
      }
      break;
    case "design":
      {
        newList = [...articlesData.filter((article)=> article.category==="design")];
      }
      break;
    case "tech":
      {
        newList = [...articlesData.filter((article)=> article.category==="tech")];
      }
      break;
    case "ai":
      {
        newList = [...articlesData.filter((article)=> article.category==="ai")];
      }
      break;
    default:
      {
        newList = articlesData;
      }
      break;
  }

  
    switch (theQuery) {
      case "most-liked":{
        newList=newList.sort((a,b)=>{
          return b.likes-a.likes;
        })}
        break;
        case "view":
          newList=newList.sort((a,b)=>{
            return  a.views-b.views;
          })
          break;
          case "newest":{
            newList=newList.sort((a,b)=>{
              const date1 = new Date(a.dateText);
              const date2 = new Date(b.dateText);
   
            return  date2.getTime() - date1.getTime();
            })}
            break;
      default:
        break;
    }
    console.log(newList);
  return {
    props: {
      articlesData: newList,
    },
  };
}
