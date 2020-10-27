import React from "react";
import { Box, Card, Flex, Text, Image, Heading } from "rebass";
import { ThemeProvider } from "emotion-theming";
import { AppWrapper } from "./components/atoms";
// import preset from "@rebass/preset";
const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Box m="0 auto" width={[1, 1, 480]}>
          <Flex flexDirection="column" py={3}>
            <Text m="0 0 16px 0">Random Dogs</Text>

            <Flex dir="row">
              <Card width={1 / 2} m="0 16px 0 0">
                <Image
                  src="https://placehold.it/300x300"
                  sx={{ borderRadius: 8 }}
                />
              </Card>
              <Card width={1 / 2} m="0 16px 0 0">
                <Image
                  src="https://placehold.it/300x300"
                  sx={{ borderRadius: 8 }}
                />
              </Card>
            </Flex>
          </Flex>

          <Flex flexDirection="column" py={3}>
            <Text m="0 0 16px 0">Dogs Category</Text>

            <Flex dir="row" justifyContent="space-between">
              {Array(4)
                .fill("")
                .map((v) => (
                  <Card width={140} height={140} m="0 16px 0 0">
                    <Image
                      src="https://placehold.it/300x300"
                      sx={{ borderRadius: 8 }}
                    />
                  </Card>
                ))}
            </Flex>
          </Flex>
        </Box>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
