const IsDevice = (() => {
    if (typeof navigator == 'undefined') return
  
    let ua = navigator.userAgent
  
    return {
      info: ua,
  
      Android() {
        return ua.match(/Android/i)
      },
      BlackBerry() {
        return ua.match(/BlackBerry/i)
      },
      IEMobile() {
        return ua.match(/IEMobile/i)
      },
      iOS() {
        return ua.match(/iPhone|iPad|iPod/i)
      },
      OperaMini() {
        return ua.match(/Opera Mini/i)
      },
  
      any() {
        return (
          IsDevice.Android() ||
          IsDevice.BlackBerry() ||
          IsDevice.iOS() ||
          IsDevice.OperaMini() ||
          IsDevice.IEMobile()
        )
      }
    }
  })()
  
  export default IsDevice