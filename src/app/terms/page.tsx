// src/app/page.tsx

import { Container, Typography, Accordion, AccordionSummary, AccordionDetails  } from "@mui/material"

export const metadata = { title: "Home" }

export default function About(){
  return(
      
    <Container>
        <Typography>Terms AND Conditions (pay attention peopel!!!!!)</Typography>
        <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <Typography>The TERMS!!</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <li>No stinky cats</li>
                    <li>No RULEZZ!!1!1!</li>
                    <li>Only cool ppl😎</li>
                    <li>
                        <img src="https://media0.giphy.com/media/11c7UUfN4eoHF6/200w.gif?cid=6c09b952lyvv8ooe0q8qz23ps7xizu5ws2clg1lgqpkbu1g1&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>
                    </li>
                </AccordionDetails>
        </Accordion>
    </Container>
    
)
}