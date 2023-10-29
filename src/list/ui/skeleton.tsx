import ContentLoader from "react-content-loader"

const Skeleton = () => (  //props
<ContentLoader 
    speed={2}
    width={280}
    height={516}
    viewBox="0 0 280 516"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="0" rx="0" ry="0" width="280" height="516" />
  </ContentLoader>
)

export default Skeleton

