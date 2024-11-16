import { connection, idlFile, programID } from "@/constants";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { getPresalePDA, getUserInfoPDA } from "./helpers";
import * as anchor from "@project-serum/anchor";

export const getPresaleInfo = async (wallet: AnchorWallet) => {
  const provider = new anchor.AnchorProvider(connection, wallet, {});
  const program = new anchor.Program(idlFile, programID, provider);
  const [presalePDA] = await getPresalePDA();
  const userInfo = await getUserInfoPDA(wallet);

  console.log(presalePDA.toBase58(), userInfo.toBase58(), program);
  try {
    const transaction = await program.account.presaleInfo.fetch(presalePDA)
    const user = await program.account.userInfo.fetch(userInfo)
      // .rpc();
      const decimals = 9; // Example: Token with 9 decimals

// Convert to float using string manipulation
// const floatValue = parseFloat(user?.buyTokenAmount.toNumber());

// console.log("Floating Value:", floatValue);
    // console.log({user});
  } catch (error: any | unknown) {
    console.error("could not log data: ", error.message);
  }
};
