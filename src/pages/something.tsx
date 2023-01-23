import React from "react";
import { Connection, Transaction } from "@solana/web3.js";
import { NextApiRequest, NextApiResponse } from "next";
import { NETWORK } from "@utils/endpoints";
import Bundlr from "@bundlr-network/client";
import { Keypair } from "@solana/web3.js";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolanaWallet } from "@web3auth/solana-provider";

import { WebBundlr } from "@bundlr-network/client";
import BigNumber from "bignumber.js";
import { useState } from "react";

function Something() {
  const { publicKey, wallet } = useWallet();
  let fundAmount = 0.1;
  console.log("creating keypair");

  const bundlr = new Bundlr(
    "http://node1.bundlr.network",
    "solana",
    WalletModalProvider
  );

  console.log("bundlr", bundlr);
  console.log("funding bundlr node ");
  //   await bundlr.ready();
  const fundAmountParsed = new BigNumber(fundAmount).multipliedBy(
    bundlr.currencyConfig.base[1]
  );

  async function create() {
    await bundlr
      .fund(fundAmountParsed.toString())
      .then((res) => {
        console.log("Wallet Funded");
      })
      .catch((e) => {
        console.log(e);
        console.log("Error While Funding ", e.message);
      });
  }
  return (
    <div>
      <button onClick={create}>Something</button>
    </div>
  );
}

export default Something;
