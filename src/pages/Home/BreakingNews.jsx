import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex mt-6">
        <button className="btn btn-primary">Breaking News</button>
      <Marquee pauseOnHover speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....
      </Marquee>
    </div>
  );
};

export default BreakingNews;
