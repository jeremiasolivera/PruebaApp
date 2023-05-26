import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    
  } from '@chakra-ui/react'

  import React from 'react'
  
  function Acordion() {
    return (
        <Accordion defaultIndex={[0]} allowMultiple  w={500} m="auto" mt={60} mb={200}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Sobre Nosotros
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="yellow">
            Brindamos servicios en la nube para tus proyectos en linea
          </AccordionPanel>
        </AccordionItem>
      
        <AccordionItem >
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Porqué debes contratarnos?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="yellow"  >
            Contamos con una conexión 5G donde tu sevidor no tendrá problemas de conexión jamás
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  }
  
  export default Acordion
  