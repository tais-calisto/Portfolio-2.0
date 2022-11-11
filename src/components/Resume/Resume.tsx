import { useEffect, useRef, useState } from 'react'
import { ResumeStyle } from './style'
const Resume = () => {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const handleShow = () => {
    const elementHeight = ref.current?.clientHeight
    if (elementHeight)
      if (window.scrollY > elementHeight) {
        setShow(true)
      } else {
        setShow(false)
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleShow)
    return () => window.removeEventListener('scroll', handleShow)
  }, [])

  return (
    <ResumeStyle>
      <article ref={ref} className={show ? 'show' : undefined}>
        <h2>Sobre mim</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, repudiandae?
        </p>
      </article>
    </ResumeStyle>
  )
}

export default Resume
