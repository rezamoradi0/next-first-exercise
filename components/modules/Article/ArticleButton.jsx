import Link from "next/link";

function ArticleButton({ text = "Read Article", id }) {
  return (
    <Link   href={"/article/"+String(id)} className="absolute z-10 bottom-0 flex h-16 w-1/2 translate-y-full items-center justify-between rounded-lg border-2 border-zinc-600 bg-white px-5 py-1 ">
<span>{text}</span>
      <i className="fa-solid fa-right-long "></i>
    </Link>
  );
}

export default ArticleButton;
