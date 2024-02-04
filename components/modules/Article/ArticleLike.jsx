function ArticleLike({ likeCount }) {
  return (
    <div className=" flex items-center gap-x-1 rounded-lg bg-gray-200 px-2 py-1 text-xs">
      <i className="fa-solid fa-heart"></i>
      <span>{likeCount} k</span>
    </div>
  );
}

export default ArticleLike;
