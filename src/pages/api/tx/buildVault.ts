import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  Keypair,
  Account,
} from "@solana/web3.js";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { NodeWallet } from "@project-serum/common";
import {
  Fanout,
  FanoutClient,
  FanoutMembershipMintVoucher,
  FanoutMembershipVoucher,
  FanoutMint,
  MembershipModel,
} from "@glasseaters/hydra-sdk";

import { NextApiRequest, NextApiResponse } from "next";
import { NETWORK } from "@utils/endpoints";
import {
  createAssociatedTokenAccountInstruction,
  createBurnCheckedInstruction,
  createTransferCheckedInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getMint,
} from "@solana/spl-token";
import { DEFAULT_TOKEN, DEFAULT_WALLET } from "@utils/globals";

import { getOrca, OrcaFarmConfig, OrcaPoolConfig } from "@orca-so/sdk";
import Decimal from "decimal.js";

export type TxCreateData = {
  tx: string;
};

export type Input = {
  payerAddress: string;
  vaultAddresses: string[];
  sharesPerAddress: number[];
  transactionType: "sol" | "bonk";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TxCreateData>
) {
  if (req.method === "POST") {
    const {
      payerAddress,
      vaultAddresses,
      sharesPerAddress,
      transactionType = "sol",
    } = req.body as Input;

    const connection = new Connection(NETWORK);

    const payer = new PublicKey(payerAddress);
    let transaction = new Transaction();

    const fanoutSdk = new FanoutClient(
      connection,
      new NodeWallet(new Account())
    );

    const init = await fanoutSdk.initializeFanout({
      totalShares: 100,
      name: `Test${Date.now()}`,
      membershipModel: MembershipModel.Wallet,
    });
  } else {
    res.status(405).json({ tx: "" });
  }
}
