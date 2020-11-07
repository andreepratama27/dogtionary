import React, { useEffect, useState } from "react";
import { Card, Image } from "rebass";
import httpClient from "../../../utils/httpClient";

type DogType = {
  message: string;
};

const RandomDog = () => {
  const [dog, setDog] = useState<DogType>();

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await httpClient().get("/breeds/image/random");
        setDog(response);
      } catch (err) {}
    };

    fetchDog();
  }, []);

  return (
    <Card width={1 / 2} m="0 16px 0 0">
      <Image
        width="360px"
        height="240px"
        src={dog?.message}
        sx={{ borderRadius: 8 }}
      />
    </Card>
  );
};

export default RandomDog;
