import Link from "next/link";
import { useRouter } from "next/router";

function Tag({ text, url }) {
  const router=useRouter(); 
  const slug=router.query?.slug?.length>0?router.query.slug[0]:"all";
  
  return (
    <Link
      href={url}
      className={`${slug==text.toLowerCase()?"shadow-slate-500 shadow-md":""} rounded-lg border-2 border-zinc-400 bg-gray-50 px-4 py-2`}
    >
      {text}
    </Link>
  );
}

export default Tag;
