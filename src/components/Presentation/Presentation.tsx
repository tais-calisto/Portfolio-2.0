import avatar from '../../assets/avatar.svg'
import { PresetationStyle } from './style'

const Presentation = () => {
  return (
    <PresetationStyle>
      <div className='first-animation'>
        <img src={avatar} />
        <p>Olá! Me chamo Taís</p>
      </div>
      <h2 className='second-animation'>
        Crio soluções com <br />
        <span>cuidado e propósito</span>
      </h2>
      <div className='background-detail'></div>
    </PresetationStyle>
  )
}

export default Presentation
