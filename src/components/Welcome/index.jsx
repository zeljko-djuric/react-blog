import React from 'react';
import Article from './../Article'
import Banner from './../Banner'

const Welcome = () => {
    return (
        <div> 
          <Banner
            backgroundImage="url(assets/img/bg-gift.jpg)"
            title="Latest Blog Post"
            subTitle="Read and get updated on how we progress. "
          />

        <main className="main-content bg-gray">
        <div className="row">
        <div class="col-12 col-lg-6 offset-lg-3">
        <Article/>
        <hr/>
        <Article/>
        <hr/>
        <Article/>
        </div>
        </div>

        </main>  
        </div>
    );
}


export default Welcome;