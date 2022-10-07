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
  useNavigation,
  TextField,
  Image,
  List,
  ListItem,
  ScrollBar,
  LocalStorage,
  Iframe,
} from "react-xnft"
import { Program, Idl } from "@project-serum/anchor"
import { THEME } from "../utils/theme"
import { programClient } from "../utils"
import * as anchor from "@project-serum/anchor"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Stack1() {
  console.log("test")
  return (
    <View>
      <Test />
    </View>
  )
}

function Test() {
  const program = programClient()
  const nav = useNavigation()
  const click = () => {
    console.log("click")
    nav.push("stack2")
  }

  const test = async () => {
    const counter = anchor.web3.Keypair.generate()

    const [movieReviewPda] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("title3"), window.xnft.publicKey.toBuffer()],
      program.programId
    )

    const tx = await program.methods
      .addMovieReview("title3", "description", 5)
      .accounts({
        // movieReview: movieReviewPda,
        initializer: window.xnft.publicKey,
        // systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([])
      .transaction()

    const signature = await window.xnft.send(tx)
    console.log(signature)
    // console.log(tx)
    console.log("click")
    console.log(window.xnft.publicKey.toBase58())
    console.log(program)
  }

  return (
    <View
      style={{
        textAlign: "center",
        color: THEME.colors.text,
      }}
    >
      <Text>Stack 1</Text>

      <Button
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "15px",
          fontWeight: 100,
          lineHeight: "150%",
          margin: "12px",
        }}
        onClick={() => click()}
      >
        Test
      </Button>
      <Button
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "15px",
          fontWeight: 100,
          lineHeight: "150%",
          margin: "12px",
        }}
        onClick={() => test()}
      >
        Send
      </Button>
    </View>
  )
}
