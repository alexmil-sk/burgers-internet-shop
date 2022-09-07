import React from "react"
import ContentLoader from "react-content-loader"

const SceletonLoaderPizzaBlock: React.FC = (props) => (
  <ContentLoader
    speed={4}
    width={300}
    height={520}
    viewBox="0 0 250 520"
    backgroundColor="#dbdbdb"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="268" rx="16" ry="16" width="250" height="25" />
    <rect x="0" y="309" rx="26" ry="26" width="250" height="87" />
    <rect x="85" y="410" rx="4" ry="4" width="80" height="27" />
    <circle cx="201" cy="458" r="25" />
    <circle cx="125" cy="105" r="90" />
    <rect x="0" y="237" rx="0" ry="0" width="250" height="6" />
    <rect x="33" y="464" rx="18" ry="18" width="180" height="46" />
  </ContentLoader>
)

export default SceletonLoaderPizzaBlock;
