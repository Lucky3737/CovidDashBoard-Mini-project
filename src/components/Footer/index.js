import {VscGithubAlt} from 'react-icons/vsc'

import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer">
      <h1>COVID19INDIA</h1>
      <p>we stand with everyone fighting on the front lines</p>
      <div>
        <VscGithubAlt />
        <FiInstagram />
        <FaTwitter />
      </div>
    </div>
  )
}
