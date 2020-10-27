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
    </Box>
  );
};

export default AppContainer;
