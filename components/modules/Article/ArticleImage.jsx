function ArticleImage({img}) {
    return (
        <div  className="clip-path-rounding-parent w-full">
        <img
          src={img}
          className="clip-path-img  h-96 w-full rounded-lg object-cover object-center"
          alt=""
        />
        <svg
          className="hidden absolute"
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    )
}

export default ArticleImage
