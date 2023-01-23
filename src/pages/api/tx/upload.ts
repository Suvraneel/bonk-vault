import { Connection, Transaction } from "@solana/web3.js";
import { NextApiRequest, NextApiResponse } from "next";
import { NETWORK } from "@utils/endpoints";
import Bundlr from "@bundlr-network/client";
import { Keypair } from "@solana/web3.js";

import { useWallet } from "@solana/wallet-adapter-react";

import { WebBundlr } from "@bundlr-network/client";
import BigNumber from "bignumber.js";
import { useState } from "react";

// use bundlr to upload file to arweave and return the url

export async function uploadFile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
}
