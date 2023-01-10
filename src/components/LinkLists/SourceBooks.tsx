import * as React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function PageBanner() {
  return (
    <Box>
      <Typography variant='h2'>
        <FontAwesomeIcon icon={ faBook } /> Screen of Holding
      </Typography>
      <List>
        <ListItem>
          <ListItemButton component="a" href="#source-books">
            <ListItemText primary="Player's Handbook" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}