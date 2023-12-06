import React from "react";
import arrowRight from "../images/arrow-right.png";
import "../css/blog.css";
import laptop1 from "../images/laptop1.png";
import laptop2 from "../images/laptop2.png";

const Blog = () => {
  return (
    <div className="container blog-container" id="blog">
      <div className="blog">
        <h2>Recent Blogs</h2>
        <button className="blog-button">
          View All <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="blog-display">
        <div class="cardz">
          <img src={laptop1} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="blog-card-title">
              <h5>Albert Flores</h5>
              <span>Development * Sep 17, 2023</span>
            </div>
            <p class="blog-card-text">
              NetSpring, the Modern Cloud Data Analytics Stack
            </p>
            <button class="blog-button">
              Read More <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>

        <div class="cardz">
          <img src={laptop2} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="blog-card-title">
              <h5>Albert Flores</h5>
              <span>Development * Sep 17, 2023</span>
            </div>
            <p class="blog-card-text">
              The Difference Between UX/Ul Design & Development
            </p>
            <button class="blog-button">
              Read More <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
