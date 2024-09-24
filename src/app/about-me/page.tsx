// src/app/page.tsx

import { Container, Typography  } from "@mui/material"


export const metadata = { title: "Home" }

export default function About(){
  return(
      
    <Container>
        <Typography>About me!</Typography>
        <li>I know how to cook pumpkin pie</li>
        <li>I like to mow the lawn</li>
        <li>And i know how to cook pumpkin pie</li>
        <img src="https://media.tenor.com/EFDwfjT2GuQAAAAM/spinning-cat.gif"></img>
        <img src="https://media.tenor.com/4mELKBE0omgAAAAM/cat-spin.gif"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIde_0Ka9U5DVLrH9vfIjigMAT6AxRt_ejg&s"></img>
    </Container>
    
)
}