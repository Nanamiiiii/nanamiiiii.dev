import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Gwendolyn } from 'next/font/google'
import Link from 'next/link'

const LogoBox = styled.span`
  front-weight: bold;
  font-size: 26px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  padding: 10px;

  &:hover img {
    transform: scale(0.9, 0.9);
    transition-duration: 0.3s;
  }
`

const Gwendolyn_regular = Gwendolyn({
  subsets: ['latin'],
  weight: '400',
})

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily={Gwendolyn_regular.style.fontFamily}
          fontWeight="normal"
        >
          Nanamiiiii
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
