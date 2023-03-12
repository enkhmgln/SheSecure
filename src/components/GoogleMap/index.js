import React from 'react';
import './GoogleMap.css'

const GoogleMap = () => {
  return (
    <div className='GoogleMap' >
      <iframe title='unique title'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.5139066731435!2d107.00932308154731!3d47.933936378758936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d968feb75427987%3A0x726366adc361d063!2z0KHRjdGC0LPRjdGG0LjQudC9INGN0YDSr9Kv0Lsg0LzRjdC90LTQuNC50L0g0q_QvdC00Y3RgdC90LjQuSDRgtOp0LI!5e0!3m2!1sen!2smn!4v1678595458136!5m2!1sen!2smn" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap;
