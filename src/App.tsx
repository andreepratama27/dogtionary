import React, { useEffect } from "react";
import { Box, Card, Flex, Text, Image, Heading } from "rebass";
import { ThemeProvider } from "emotion-theming";
import { AppWrapper } from "./components/atoms";
import httpClient from "./utils/httpClient";
import RandomDog from "./components/molecules/RandomDog";
const theme = {};

function App() {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await httpClient().get("/breeds/list");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Box m="0 auto" width={[1, 1, 480]}>
          <Flex flexDirection="column" py={3}>
            <Text m="0 0 16px 0">Random Dogs</Text>

            <Flex dir="row">
              {Array(3)
                .fill("")
                .map((item, key) => (
                  <RandomDog key={key} />
                ))}
            </Flex>
          </Flex>

          <Flex flexDirection="column" py={3}>
            <Text m="0 0 16px 0">Dogs Category</Text>

            <Flex dir="row" justifyContent="space-between">
              {Array(5)
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
