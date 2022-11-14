// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageList} = props
  const {thumbnailUrl, thumbnailAltText} = imageList

  return (
    <li className="thumbnail">
      <img src={thumbnailUrl} alt={thumbnailAltText} className="imgSize" />
    </li>
  )
}
export default ThumbnailItem
