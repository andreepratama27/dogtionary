import React from "react";
import { Box, Flex, Text } from "rebass";

interface IAppContainer {
  children: React.ReactNode;
}

const AppContainer: React.FC<IAppContainer> = ({ children }) => {
  return (
    <Box m="0 auto">
      <Flex
        p={3}
        color="white"
        bg="black"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="bold">Dogger</Text>
      </Flex>
      {children}
      <Box width="100%" sx={{ position: "absolute", bottom: 0 }}>
        <Flex bg="black" p={3} justifyContent="center" alignItems="center">
          <Text fontWeight="bold">Footer</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AppContainer;
