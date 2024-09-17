import { Stack } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <div>
      <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card'
       sx={ bodyPart === item ? { borderTop: '4px solid #51b2ffs', backgroundColor: 'white', borderBottomLeftRadius: '20px', width: '270px', height: '280px', cursor: 'pointer', gap: '47px'} : {background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '280px', cursor: 'pointer', gap: '47px'}}>
        <img src={Icon} alt="" style={{width: '40px', height: '40px'}} />
      </Stack>
    </div>
  )
}

export default BodyPart