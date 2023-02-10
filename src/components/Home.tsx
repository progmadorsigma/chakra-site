import { Box, Flex, Text, Icon, Button, Avatar, Spacer, HStack } from '@chakra-ui/react'
import { CgFileDocument } from 'react-icons/cg'
import { HiOutlineTrendingUp } from "react-icons/hi"
import { RiContactsBookUploadLine} from "react-icons/ri"
import { HiOutlineMail} from "react-icons/hi"
import { BiBell} from "react-icons/bi"
import { ChevronDownIcon} from "@chakra-ui/icons"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import Grafico from './Grafico'
import Grafic from './Grafic'
import Example from './Example'
function Home() {
    
    return(
    <Flex gap={'10px'} p={'3'}   as={'b'} fontFamily={'Roboto, sans-serif'}  h={'900px'} w={'1300px'} bg={'#E0E0E0'}> 
        <Flex>
        <Text style={{ fontFamily: '' }} fontSize={'4xl'}>
            Overview
        </Text>
        </Flex>
        <Flex ml={'-120'} mt={'20'} ><Box paddingTop={'10px'}  pl={'10px'} borderRadius={'15px'} bg={'white'} h={'200px'} w={'300px'} fontSize={'xl'}>
        Document 
        <Flex ml={'220px'} mt={'-20px'}> 
        <Box paddingTop={'10px'} pl={'10px'} borderRadius={'50px'}  h={'50px'} w={'50px'} bg={'#E0ECF8'}>
            <Icon color={'#2E98BB'} boxSize={7} as={CgFileDocument}/>
        </Box>
        </Flex>
        <Text fontSize={'3xl'}>
            146.000
        </Text>
        <Flex alignContent={'center'} ml={'10px'} mt={'40px'}>
        <Text color={'#4FB96C'}> 
        <Icon color={'#4FB96C'} as={HiOutlineTrendingUp}/> 
            17%</Text>
        </Flex>
        <Flex ml={'75px'} mt={'-30px'}>
        <Text color={'#BABCBB'}>
            Since last week
        </Text>
        </Flex>
        </Box>
        </Flex>

          <Box ml={'10px'} mt={'80px'} paddingTop={'10px'}  pl={'10px'} borderRadius={'15px'} bg={'white'} h={'200px'} w={'300px'} fontSize={'xl'}>
            Contact 
        <Flex ml={'220px'} mt={'-20px'}> 
        <Box paddingTop={'10px'} pl={'10px'} borderRadius={'50px'}  h={'50px'} w={'50px'} bg={'#E0ECF8'}><Icon color={'#2E98BB'} boxSize={7} as={RiContactsBookUploadLine}/>
        </Box>
        </Flex>
        <Text fontSize={'3xl'}>1400</Text>
        <Flex alignContent={'center'} ml={'10px'} mt={'40px'}>
        <Text color={'#4FB96C'}> <Icon color={'#4FB96C'} as={HiOutlineTrendingUp}/>
             17%
        </Text>
        </Flex>
        <Flex ml={'75px'} mt={'-30px'}><Text color={'#BABCBB'}>
            Since last week
        </Text>
        </Flex>
          </Box>
         
         <Flex ml={'-10px'}>
         <Box ml={'20px'} mt={'80px'} paddingTop={'10px'}  pl={'10px'} borderRadius={'15px'} bg={'white'} h={'200px'} w={'300px'} fontSize={'xl'}>
             Email 
        <Flex ml={'220px'} mt={'-20px'}> 
        <Box paddingTop={'10px'} pl={'10px'} borderRadius={'50px'}  h={'50px'} w={'50px'} bg={'#E0ECF8'}>
        <Icon color={'#2E98BB'} boxSize={7} as={HiOutlineMail}/>
        </Box>
        </Flex>
        <Text fontSize={'3xl'}>
            1400
        </Text>
        <Flex alignContent={'center'} ml={'10px'} mt={'40px'}>
        <Text color={'#4FB96C'}> <Icon color={'#4FB96C'} as={HiOutlineTrendingUp}/>
            17%
        </Text>
        </Flex>
        <Flex ml={'75px'} mt={'-30px'}>
        <Text color={'#BABCBB'}>
            Since last week
        </Text>
        </Flex>
          </Box>
        </Flex>
        <Flex>
         <Box  mt={'300px'} bg={'white'} h={'250px'} w={'420px'} ml={'-950px'} borderRadius={'10px'}>
        <Text ml={'10px'} mt={'10px'}  fontSize={'2xl'}>
            Recent Marketing
        </Text> 
        <Flex ml={'10px'} mt={'20px'}>
        <Icon boxSize={6}  color={'#4FB96C'} as={HiOutlineTrendingUp}/>
        </Flex>
        <Text fontSize={'2xl'} ml={'40px'} mt={'-8'} color={'#4FB96C'}>
            17%
            </Text>
        <Flex ml={'95px'} mt={''}>
            <Grafic/>
        </Flex>
          </Box>
        </Flex>

        <Flex>
          <Box ml={'-505px'}  mt={'300px'} bg={'white'} h={'250px'} w={'485px'}  borderRadius={'10px'}>
         <Text ml={'10px'} mt={'10px'}  fontSize={'2xl'}>
            Recent Marketing
        </Text>
        <Flex ml={'10px'} mt={'20px'}>
            <Icon boxSize={6}  color={'#4FB96C'} as={HiOutlineTrendingUp}/>
        </Flex>
        <Text fontSize={'2xl'} ml={'40px'} mt={'-8'} color={'#4FB96C'}>
            17%
        </Text>
        <Flex ml={'60px'} mt={'-50px'}>
            <Grafico/>
        </Flex>
            </Box>
        </Flex> 

        <Flex mt={'15px'} gap={'30px'} ml={'-65px'}   >
          <Popover>
            <PopoverTrigger>
              <Icon  boxSize={7} as={BiBell}/>
           </PopoverTrigger>
          </Popover>
          <Flex gap={'15px'}  mt={'-10px'}>
          <Avatar name='Dan Abrahmov' src='https://pbs.twimg.com/profile_images/1438899576518365185/Hg5q7xEF_400x400.jpg' />
          <Menu >
              <MenuButton pl={'1px'} bg={'#E0E0E0'}  as={Button} rightIcon={<ChevronDownIcon color={'#A3A8A8'} boxSize={6} />}>
             Administrator
          </MenuButton >
             <MenuList>
               <MenuItem>Esse ulisses é foda</MenuItem>
               <MenuItem>Br professor</MenuItem>
            </MenuList>
              
            </Menu>
          </Flex>
          
             <Box  borderRadius={'10px'} mt={'65px'} ml={'-230px'}    bg={'white'} h={'670px'} width={'300px'} >
                <Text fontSize={'xl'} ml={'10px'} p={'4'}>
                    Popular Product
                </Text>
                <Box mt={'10px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
                <Text ml={'90px'} mt={'-48px'}>
                    Gadget Converter<br/>
                <Text fontSize={'1xs'} color={'#A8A8A8'}>$250</Text> 
                </Text>
                
                <Box mt={'20px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
             
                 
                  <Text ml={'90px'} mt={'-48px'}>
                    Lens Camera<br/>
                    <Text fontSize={'1xs'} color={'#A8A8A8'}>$50</Text>
                  </Text>

                   
                <Box mt={'20px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
             
                 
                  <Text ml={'90px'} mt={'-48px'}>
                    Airpods<br/>
                    <Text fontSize={'1xs'} color={'#A8A8A8'}>$100</Text>
                  </Text>

                  <Box mt={'20px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
             
                 
                  <Text ml={'90px'} mt={'-48px'}>
                    Macbook<br/>
                    <Text fontSize={'1xs'} color={'#A8A8A8'}>$999</Text>
                  </Text>

                  <Text fontSize={'xl'} ml={'10px'} p={'4'}>
                    Chat
                </Text>

                <Box mt={'10px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
                <Text ml={'90px'} mt={'-48px'}>
                    Debra Young<br/>
                <Text fontSize={'1xs'} color={'#A8A8A8'}>How's my product?</Text> 
                </Text>
                
                <Box mt={'20px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
             
                 
                  <Text ml={'90px'} mt={'-48px'}>
                    Dorothy Collins<br/>
                    <Text fontSize={'1xs'} color={'#A8A8A8'}>How was the meeting</Text>
                  </Text>

                   
                <Box mt={'20px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
             
                 
                  <Text ml={'90px'} mt={'-48px'}>
                    Chris Jordan<br/>
                    <Text fontSize={'1xs'} color={'#A8A8A8'}>How employee performance</Text>
                  </Text>

                  <Box mt={'20px'}  ml={'20px'} bg={'#031737'} h={'50px'} w={'50px'} borderRadius={'100'} >
                </Box>
             
                 
                  <Text ml={'90px'} mt={'-48px'}>
                    Denise Murphy<br/>
                    <Text fontSize={'1xs'} color={'#A8A8A8'}>How was the meet</Text>
                  </Text>


                </Box>

               
            

            
         <Box  mt={'550px'} bg={'white'} h={'300px'} w={'940px'} ml={'-1295px'} borderRadius={'10px'}>
        <Flex>
        
        <HStack mt={'10px'} spacing='700px'>
        <Text ml={'20px'} mt={'25px'}  fontSize={'20px'}>Document</Text> 
        <Menu>
             <MenuButton bg={'#EFF1F3'} borderRadius={'12px'} h={'35px'} w={'120px'} as={Button} rightIcon={<ChevronDownIcon/>}>
             Weekly
            </MenuButton>
          </Menu>
          </HStack>
      
        </Flex>
        <Text fontSize={'13px'} color={'#999C9B'} ml={'20px'} >Document tracking information</Text>

        <HStack ml={'20px'} spacing={'155px'}>
          <Text fontSize={'xl'}>Name</Text>
          <Text fontSize={'xl'}>File</Text>
          <Text fontSize={'xl'}>Category</Text>
          <Text fontSize={'xl'}>Author</Text>
          <Text fontSize={'xl'} color={'#898989'}>Status</Text>
        </HStack>

        <HStack mt={'20px'} ml={'20px'} spacing={'110px'}>
          <Text fontSize={'x'}>Annual Report</Text>
          <Text fontSize={'x'}>PDF</Text>
          <Text fontSize={'x'} pl={'55px'}>Property</Text>
          <Text fontSize={'x'} pl={'55px'}>Diana Matthews</Text>
          <Button borderRadius={'10px'} h={'35px'} w={'80px'} bg='#D4EADC' color={'#5DAC78'}>Send</Button>
          
        </HStack>

        <HStack mt={'20px'} ml={'20px'} spacing={'107px'}>
          <Text fontSize={'x'}>Business Plan</Text>
          <Text fontSize={'x'} pl={'5px'}>WORD</Text>
          <Text fontSize={'x'} pl={'40px'}>Criptocurrency</Text>
          <Text fontSize={'x'} pl={'25px'}>Philip James</Text>
          <Flex pl={'17px'}>
          <Button borderRadius={'10px'} h={'35px'} w={'80px'} bg='#D4EADC' color={'#5DAC78'}>Send</Button>
          </Flex>
        </HStack>

        <HStack mt={'20px'} ml={'20px'} spacing={'107px'}>
          <Text fontSize={'x'}>Marketing Tool</Text>
          <Text fontSize={'x'}>PDF</Text>
          <Text fontSize={'x'} pl={'55px'}>Conten Creator</Text>
          <Text fontSize={'x'} pl={'20px'}>Amanda Ross</Text>
          <Flex pl={'15px'}>
          <Button borderRadius={'10px'} h={'35px'} w={'80px'} bg='#FDD6CB' color={'#DB9071'}>Pending</Button>
          </Flex>
        </HStack>
         
         


        
          </Box>
        

            

        </Flex>

    </Flex>
    )

}

export default Home