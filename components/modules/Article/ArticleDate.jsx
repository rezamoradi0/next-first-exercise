function ArticleDate({date}) {
    return (
        <div className="bg-gray-200 text-xs py-1 px-2 rounded-lg flex items-center gap-x-1">
                <i className="fa-light fa-calendar-days"></i>
            <span>{date}</span>
       
        </div>
    )
}

export default ArticleDate;
