import { useColorMode, useColorModeValue, Switch } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <MoonIcon />
    
      <Switch
        aria-label="Toggle theme"
        isChecked={useColorModeValue(false, true)}
        colorScheme='purple'
        onChange={toggleColorMode}
        p={2}
      />
    </>
  )
}

export default ThemeToggleButton