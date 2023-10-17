import ContentLoader from "react-content-loader"

const Skeleton = () => (  //props
  <ContentLoader
  className="pizza-block" 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <circle cx="135" cy="134" r="125" /> 
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" /> 
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="411" rx="15" ry="15" width="90" height="30" /> 
    <rect x="149" y="407" rx="15" ry="15" width="120" height="40" />
  </ContentLoader>
)

export default Skeleton

