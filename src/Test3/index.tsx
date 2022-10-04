import {
  AccountInfo,
  Connection,
  LAMPORTS_PER_SOL,
  ParsedAccountData,
  PublicKey,
} from "@solana/web3.js"
import { StakeProgram } from "@solana/web3.js"
import React, { useState, useEffect, useCallback } from "react"
import ReactXnft, {
  Text,
  View,
  useConnection,
  usePublicKey,
  Loading,
  Button,
  Stack,
  Tab,
} from "react-xnft"
import { THEME } from "../utils/theme"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Test3() {
  const publicKey = usePublicKey()
  const connection = new Connection("https://api.devnet.solana.com/")
  const [balance, setBalance] = useState(0)

  const getBalance = useCallback(async () => {
    const balance = await connection.getBalance(publicKey, "confirmed")
    setBalance(parseFloat((balance / LAMPORTS_PER_SOL).toFixed(2)))
    console.log("test")
  }, [publicKey, balance])

  const airdrop = useCallback(async () => {
    console.log("test")
    const signature = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL
    )
    await connection.confirmTransaction(signature, "confirmed")

    getBalance()
  }, [publicKey])

  useEffect(() => {
    if (publicKey) {
      console.log("useStakeAccounts : publicKey", publicKey.toString())
    }
    getBalance()
  }, [publicKey])

  return (
    <View
      style={{
        textAlign: "center",
        color: THEME.colors.text,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: THEME.colors.text,
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "150%",
          margin: "12px",
        }}
      >
        Tab Two
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: THEME.colors.text,
          fontSize: "15px",
          fontWeight: 100,
          lineHeight: "150%",
          margin: "12px",
        }}
      >
        Balance is {balance}
      </Text>
      <Button
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "15px",
          fontWeight: 100,
          lineHeight: "150%",
          margin: "12px",
        }}
        onClick={() => airdrop()}
      >
        Airdrop
      </Button>
    </View>
  )
}
