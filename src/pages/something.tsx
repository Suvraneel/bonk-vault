import React from "react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

function something() {
  const gatewayUrls = {
    // Here we set the gateway URLs for this scheme, and we include a backup in case the first one fails
    "example://": ["https://gateway.pinata.cloud/ipfs/"],
  };
  const dataToUpload = "Hello World!";

  const storage = new ThirdwebStorage({ gatewayUrls });

  const metadata = {
    name: "NFT #1",
    description: "This is my first NFT",
    // Here we add a file into the image property of our metadata
    image: "./404.tsx",
    properties: [
      {
        name: "coolness",
        value: "very cool",
      },
    ],
  };

  const mint = async () => {
    const uri = await storage.upload(metadata);
    console.log(uri);
  };

  return (
    <div>
      <button onClick={mint}>Mint</button>
    </div>
  );
}

export default something;
