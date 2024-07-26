import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Carddata from './Carddata';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: "black",
    color: "#45a29e"
    
  },
}));
const styleMenu = {
    fontSize: "40px",
     color: "#66fcf1"
}
export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge  badgeContent={0} color="dark">
       <LocalMallRoundedIcon style={styleMenu}/>
      </StyledBadge>
    </IconButton>
  );
}
