import {
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function DayNight() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
              <Button onClick={toggleColorMode} mt={'1%'} mb={'1%'} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
    </>
  );
}