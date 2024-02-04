function Articles({children}) {
    return (
        <div className="grid grid-cols-3  gap-8 md:grid-cols-1 lg:grid-cols-2">
            {children}
        </div>
    )
}

export default Articles
