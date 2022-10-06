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
} from "react-xnft"
import { THEME } from "../utils/theme"

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
  const nav = useNavigation()
  const click = () => {
    console.log("click")
    nav.push("stack2")
    test()
  }

  const test = async () => {
    const value = await LocalStorage.get("key")
    console.log("test", value)
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

      <View>
        <Image
          src={
            "https://arweave.net/62iRXUfqdXH3okfcSKfWdm9Ml39T61m4DmeAHB7yDQs"
          }
          style={{
            borderRadius: "50px",
            width: "300px",
            margin: "12px",
          }}
        />
      </View>

      <View>
        <TextField
          style={{
            width: "200px",
            margin: "12px",
          }}
        ></TextField>
      </View>
      <View>
        {/* <List
          style={{
            display: "column",
            justifyContent: "center",
            width: "30%",
            padding: "12px",
          }}
        > */}
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>

        {/* </List> */}
        <Loading />
      </View>
    </View>
  )
}
