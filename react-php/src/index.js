import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios, { post } from 'axios';
import './myStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormFile from 'react-bootstrap/FormFile'
import Nav from 'react-bootstrap/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function useEventListener(eventName, handler, element = document) {
  const savedHandler = React.useRef()

  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

function AnimatedCursor({
  color = '220, 90, 90',
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7
}) {
  const cursorOuterRef = React.useRef()
  const cursorInnerRef = React.useRef()
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  const [coords, setCoords] = React.useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = React.useState(true)
  const [isActive, setIsActive] = React.useState(false)
  const [isActiveClickable, setIsActiveClickable] = React.useState(false)
  let endX = React.useRef(0)
  let endY = React.useRef(0)

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
    cursorInnerRef.current.style.top = clientY + 'px'
    cursorInnerRef.current.style.left = clientX + 'px'
    endX.current = clientX
    endY.current = clientY
  }, [])

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8
        coords.y += (endY.current - coords.y) / 8
        cursorOuterRef.current.style.top = coords.y + 'px'
        cursorOuterRef.current.style.left = coords.x + 'px'
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [requestRef] // eslint-disable-line
  )

  React.useEffect(() => requestRef.current = requestAnimationFrame(animateOuterCursor), [animateOuterCursor])

  const onMouseDown  = React.useCallback(() => setIsActive(true), [])
  const onMouseUp    = React.useCallback(() => setIsActive(false), [])
  const onMouseEnter = React.useCallback(() => setIsVisible(true), [])
  const onMouseLeave = React.useCallback(() => setIsVisible(false), [])

  useEventListener('mousemove', onMouseMove, document)
  useEventListener('mousedown', onMouseDown, document)
  useEventListener('mouseup', onMouseUp, document)
  useEventListener('mouseenter', onMouseEnter, document)
  useEventListener('mouseleave', onMouseLeave, document)

  React.useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`
      cursorOuterRef.current.style.transform = `scale(${outerScale})`
    } else {
      cursorInnerRef.current.style.transform = 'scale(1)'
      cursorOuterRef.current.style.transform = 'scale(1)'
    }
  }, [innerScale, outerScale, isActive])

  React.useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
    }
  }, [innerScale, outerScale, isActiveClickable])

  React.useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1
      cursorOuterRef.current.style.opacity = 1
    } else {
      cursorInnerRef.current.style.opacity = 0
      cursorOuterRef.current.style.opacity = 0
    }
  }, [isVisible])

  React.useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    )
    clickables.forEach((el) => {
      el.style.cursor = 'none'

      el.addEventListener('mouseover', () => {
        setIsActive(true)
      })
      el.addEventListener('click', () => {
        setIsActive(true)
        setIsActiveClickable(false)
      })
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true)
      })
      el.addEventListener('mouseup', () => {
        setIsActive(true)
      })
      el.addEventListener('mouseout', () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setIsActive(true)
        })
        el.removeEventListener('click', () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true)
        })
        el.removeEventListener('mouseup', () => {
          setIsActive(true)
        })
        el.removeEventListener('mouseout', () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
    }
  }, [isActive])

  const styles = {
    cursor: {
      zIndex: 999,
      position: 'fixed',
      opacity: 1,
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    },
    cursorInner: {
      position: 'fixed',
      borderRadius: '50%',
      width: innerSize,
      height: innerSize,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, 1)`,
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out'
    },
    cursorOuter: {
      position: 'fixed',
      borderRadius: '50%',
      pointerEvents: 'none',
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    }
  }

  return (
    <React.Fragment>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </React.Fragment>
  )
}


class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      values:null,
      formattedArray:[]
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      this.setState({values: JSON.stringify(response.data).slice(1, -1)});
      this.setState({formattedArray: this.state.values.split(",")})
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
    toast("File Uploaded!");
  }

  fileUpload(file){
    const url = 'http://127.0.0.1:5000/uploader';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url, formData, config)
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Aerovate Testing</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#leaderboard">
                Leaderboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AnimatedCursor/>
        <Form onSubmit={this.onFormSubmit}>
          <br/>
          <h1 className='primary'>File Upload</h1>
          <hr/>
          <p>
            <Form.File 
              type="file"
              onChange={this.onChange}
              id="custom-file-translate-scss"
              label="Select a file"
              lang="en"
              custom
              data-browse="Button text"
            />
            <Button variant="outline-primary" type="submit">Upload</Button>
          </p>
          
          <br/>
          <h4>Values</h4>
          <ul>{this.state.formattedArray.map((value) => <li>{value}</li>)}</ul>
          <ToastContainer />
        </Form>
      </>
   )
  }
}

ReactDOM.render(<FileUpload />, document.getElementById('root'));