import React, { useState, useEffect } from 'react'

const titles = ["Web Developer", "Full Stack Developer", "Mobile Developer"]
const TYPING_SPEED = 100 
const DISPLAY_DURATION = 2000 

function Header() {
  const [text, setText] = useState<string>("")
  const [index, setIndex] = useState<number>(0) 
  const [subIndex, setSubIndex] = useState<number>(0) 
  const [deleting, setDeleting] = useState<boolean>(false) 

  useEffect(() => {
    const currentTitle = titles[index]
    let timeout: number

    if (!deleting && subIndex < currentTitle.length) {
      timeout = window.setTimeout(() => {
        setText(currentTitle.substring(0, subIndex + 1))
        setSubIndex(subIndex + 1)
      }, TYPING_SPEED)
    } else if (!deleting && subIndex === currentTitle.length) {
      timeout = window.setTimeout(() => setDeleting(true), DISPLAY_DURATION)
    } else if (deleting && subIndex > 0) {
      timeout = window.setTimeout(() => {
        setText(currentTitle.substring(0, subIndex - 1))
        setSubIndex(subIndex - 1)
      }, TYPING_SPEED)
    } else if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index])

  return (
    <header style={{ textAlign: "center", margin: "2rem 0" }}>
      <h1>I am a {text}</h1>
    </header>
  )
}

export default Header