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
  useNavigation,
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

export function Stack3() {
  console.log("test")
  const nav = useNavigation()
  const click = () => {
    console.log("click")
    nav.push("stack1")
  }
  return (
    <View>
      <Test />
    </View>
  )
}

function Test() {
  const nav = useNavigation()
  const click = () => {
    console.log("click")
    nav.push("stack1")
  }

  return (
    <View
      style={{
        textAlign: "center",
        color: THEME.colors.text,
      }}
    >
      <Text>Stack 3</Text>
      <Button
        style={{
          flex: 1,
          background: "#FFEFEB",
          color: "#6100FF",
          border: "1px solid #000000",
          boxShadow: "4px 3px 0px #6100FF",
          borderRadius: "8px",
          width: "40px",
          height: "40px",
          fontWeight: 500,
          margin: "10px",
        }}
        onClick={() => click()}
      >
        Test
      </Button>
    </View>
  )
}
