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
import { Test } from "./Test"
import { Test2 } from "./Test2"
import { Test3 } from "./Test3"
import { THEME } from "./utils/theme"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function App() {
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
    <View style={{ height: "100%", backgroundColor: "#111827" }}>
      <Tab.Navigator
        options={({ route }) => {
          return {
            tabBarIcon: ({ focused }) => {
              const color = focused
                ? THEME.colors.activeTab
                : THEME.colors.inactiveTab
              if (route.name === "test") {
                return <Text>Tab One</Text>
              } else if (route.name === "test2") {
                return <Text>Tab Two</Text>
              } else {
                return <Text>Tab Three</Text>
              }
            },
          }
        }}
      >
        <Tab.Screen
          name="test"
          disableLabel={true}
          component={() => <Test />}
        />
        <Tab.Screen
          name="test2"
          disableLabel={true}
          component={() => <Test2 />}
        />
        <Tab.Screen
          name="test3"
          disableLabel={true}
          component={() => <Test3 />}
        />
      </Tab.Navigator>
    </View>
  )
}
