import { CgFileDocument } from 'react-icons/cg'
import { TbLayoutDashboard } from 'react-icons/tb'
import { RiContactsBookUploadLine } from 'react-icons/ri'
import { CgToolbox } from 'react-icons/cg'
import { TiArrowSync} from 'react-icons/ti'
import { BsChat} from 'react-icons/bs'
import { IoIosFolderOpen} from 'react-icons/io'
import { HiOutlineMail} from 'react-icons/hi'
import { TbArrowsRightLeft} from 'react-icons/tb'
import { VscGear} from 'react-icons/vsc'

import { Box, Flex, Heading, Text, Icon, Divider} from '@chakra-ui/react'
function Sidebar() {
  return (

    <Flex fontFamily={'Roboto, sans-serif'} bg={'#031737'} h={'900px'} w={'300px'} >
      <Box ml={'10px'} padding={'4'} color={'#799BC9'} as='aside' >
        <Heading  style={{ fontFamily: '' }} pt={'30px'} pl={'20px'} color={'#F4845C'} ml={'20px'}>CRM.io</Heading>
        <Flex bg={'#3964AE'} h={'55px'} w={'250px'} borderRadius={'10px'} mt={'30'} alignItems={'center'} paddingBottom={'20px'} justifyContent={'center'} gap={'10px'} pt={'20px'} color={'#EBFDFF'}>
          <Icon boxSize={9} as={TbLayoutDashboard} /><Text style={{ fontFamily: 'paul' }} as={'b'} fontSize={'xl'}> Dashbord</Text>
        </Flex>
        
        
          <Flex mt={'5px'} padding={'4'}><Text  fontSize={'xl'} color={'#244E74'}>Managment</Text></Flex>
        
        

          <Flex mb={'7px'} ml={'15px'}  alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}>  <Icon  boxSize={5} as={CgFileDocument}/><Text>Document</Text></Flex>
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon boxSize={5} as={RiContactsBookUploadLine}/> <Text> Contact</Text></Flex>
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon  boxSize={5} as={CgToolbox}/> <Text>Prospect</Text></Flex>
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon  boxSize={5} as={TiArrowSync}/><Text>Workflow</Text></Flex>

          <Divider borderColor={'#31598A'} colorScheme='red'  marginTop={'10px'}  ml={'15px'} orientation='horizontal' width={'200px'} />
        
        
        <Flex   padding={'4'}><Text fontSize={'xl'} color={'#244E74'}>Connection</Text> </Flex>
        
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon  boxSize={5} as={BsChat}/><Text>Chat Integration</Text></Flex>
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon  boxSize={5} as={IoIosFolderOpen}/><Text>Marketing automation</Text></Flex>
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon  boxSize={5} as={HiOutlineMail}/><Text> Email integration</Text></Flex>
      
          <Divider  borderColor={'#31598A'} marginTop={'10px'} color={'#0B2A51'} ml={'15px'} orientation='horizontal' width={'200px'}/>
        
        <Flex p={'4'}> <Text fontSize={'xl'}  color={'#244E74'}>Customer</Text></Flex>
        
          <Flex  mb={'7px'} ml={'15px'} alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}>  <Icon  boxSize={5} as={TbArrowsRightLeft}/><Text>Trasaction</Text></Flex> 
          <Flex  mb={'7px'} ml={'15px'}  alignItems={'center'} paddingBottom={'10px'}  gap={'10px'}> <Icon  boxSize={5} as={VscGear}/> <Text>Maintenance</Text></Flex>
        

      </Box>

    </Flex>
  )
}

export default Sidebar