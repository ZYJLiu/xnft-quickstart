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
  Iframe,
} from "react-xnft"
import { THEME } from "../utils/theme"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Stack2() {
  console.log("test")
  return (
    // <View>
    //   <Text>Test</Text>
    // </View>
    <View>
      <Test />
    </View>
  )
}

function Test() {
  const nav = useNavigation()
  const click = () => {
    console.log("click")
    nav.push("stack3")
  }

  return (
    <View>
      <View
        style={{
          textAlign: "center",
          color: THEME.colors.text,
        }}
      >
        <Text>Stack 2</Text>
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
          Next
        </Button>
      </View>
    </View>
  )
}
