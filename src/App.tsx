import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Form from './Form';
import Header from "./Header";

export const App = () => (
  <ChakraProvider theme={theme}>
     <Header />
      <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
       <Form />
      </Box>
    </ChakraProvider>
)
