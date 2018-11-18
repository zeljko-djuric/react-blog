import React from 'react'
import {Link} from 'react-router-dom'

 const Article = () => {
    return (

        <article className="my-90">
          <header className="text-center mb-40">
            <h3>
              <a href="blog-single.html">We updated to version 1.1</a>
            </h3>
            <div className="link-color-default fs-12">
              <a href="#">Updates</a>,
              <time>May 13, 2017</time>
            </div>
          </header>
          <Link className="blog-single.html" to="/article/some-title-slug">
            <img className="rounded" src="assets/img/blog-4.jpg" alt="..." />
          </Link>
          <div className="card-block">
            <p className="text-justify">Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
              may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
              creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
              behold. Saying above moving second a subdue likeness after also second.</p>
            <p className="text-center mt-40">
              <a className="btn btn-primary btn-round" href="blog-single.html">Read more</a>
            </p>
          </div>
        </article>
      );
 };

 export default Article;