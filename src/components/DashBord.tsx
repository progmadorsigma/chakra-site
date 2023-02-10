import { Heading } from '@chakra-ui/react'
import React from 'react'
import Home from './Home'
import Sidebar from './Sidebar'
import {Box, Flex} from '@chakra-ui/react'
import Grafico from './Grafico'
function DashBord() {

      return (
            <Flex>
            <Sidebar/>
            <Home/>
            </Flex>
      )
      

}

export default DashBord