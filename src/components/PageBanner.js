import * as React from 'react'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDAndD } from '@fortawesome/free-brands-svg-icons'

export default function PageBanner() {
  return (
    <Typography variant='h1'>
      <FontAwesomeIcon icon={ faDAndD} /> Screen of Holding
    </Typography>
  )
}