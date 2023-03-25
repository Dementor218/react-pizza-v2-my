import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="102" cy="116" r="75" />
    <rect x="9" y="222" rx="0" ry="0" width="198" height="20" />
    <rect x="87" y="232" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
);

export default MyLoader;
