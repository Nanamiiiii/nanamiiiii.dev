import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  front-weight: bold;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 45px;
  line-height: 35px;
  padding: 10px;

  &:hover img {
    
  }
`

const Logo = () => {
  const initialLogo = `/images/logo_${useColorModeValue("light", "dark")}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={initialLogo} width={35} height={28} alt="logo" />
          <Text 
            color={useColorModeValue('gray.800', 'whiteAlpha.900')} 
            fontFamily='M PLUS Rounded 1c' 
            fontWeight='thin' 
            ml={4}
          >
            Nanamiiiii - Akihiro Saiki
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo