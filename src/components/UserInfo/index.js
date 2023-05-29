// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {eachlist} = props
  const {title, description, publishedDate} = eachlist
  return (
    <div>
      <div className="head">
        <h1>{title}</h1>

        <p className="para">{publishedDate}</p>
      </div>

      <p className="para">{description}</p>
      <hr />
    </div>
  )
}

export default UserInfo
