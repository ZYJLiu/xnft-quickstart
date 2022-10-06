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
} from "react-xnft"
import { THEME } from "../utils/theme"
import { Stack1 } from "./Stack1"
import { Stack2 } from "./Stack2"
import { Stack3 } from "./Stack3"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Test() {
  return (
    <Stack.Navigator
      initialRoute={{ name: "stack1" }}
      options={({ route }) => {
        switch (route.name) {
          case "stack1":
            return {
              title: "stack1",
            }
          case "stack2":
            return { title: "stack2" }
          case "stack3":
            return { title: "stack3" }
          default:
            throw new Error("unknown route")
        }
      }}
      style={{}}
    >
      <Stack.Screen
        name="stack1"
        component={(props: any) => <Stack1 {...props} />}
      />
      <Stack.Screen
        name="stack2"
        component={(props: any) => <Stack2 {...props} />}
      />
      <Stack.Screen
        name="stack3"
        component={(props: any) => <Stack3 {...props} />}
      />
    </Stack.Navigator>
  )
}

// function Test2() {
//   const nav = useNavigation()
//   const publicKey = usePublicKey()
//   const [balance, setBalance] = useState(0)
//   const connection = new Connection("https://api.devnet.solana.com/")
//   const getBalance = useCallback(async () => {
//     const balance = await connection.getBalance(publicKey, "confirmed")
//     setBalance(parseFloat((balance / LAMPORTS_PER_SOL).toFixed(2)))
//     console.log("test")
//   }, [publicKey, balance])

//   // const estimatedRewards = useEstimatedRewards()
//   return (
//     <View>
//       <Text>SHOW</Text>
//       <View>
//         <Header balance={balance} />
//         <Text>Test2</Text>
//       </View>
//     </View>
//   )
// }

// function Header({ balance }: any) {
//   const nav = useNavigation()
//   const onClick = () => {
//     console.log("test button")
//     nav.push()
//   }
//   return (
//     <View
//       style={{
//         marginTop: "255px",
//       }}
//     >
//       <View>
//         <Text
//           style={{
//             textAlign: "center",
//             color: THEME.colors.text,
//             fontSize: "20px",
//             fontWeight: 400,
//             lineHeight: "150%",
//           }}
//         >
//           {balance}
//         </Text>
//         <Text
//           style={{
//             fontSize: "40px",
//             marginTop: "12px",
//             textAlign: "center",
//             fontWeight: 500,
//             lineHeight: "24px",
//             color: THEME.colors.text,
//           }}
//         >
//           {balance}
//         </Text>
//         <Text
//           style={{
//             marginTop: "12px",
//             color: THEME.colors.textSecondary,
//             textAlign: "center",
//           }}
//         >
//           Also Text
//         </Text>
//       </View>
//       <View
//         style={{
//           marginTop: "20px",
//           width: "268px",
//           display: "flex",
//           justifyContent: "space-between",
//           flexDirection: "row",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <Button
//           onClick={onClick}
//           style={{
//             flex: 1,
//             background: "#FFEFEB",
//             color: "#6100FF",
//             border: "1px solid #000000",
//             boxShadow: "4px 3px 0px #6100FF",
//             borderRadius: "8px",
//             width: "192px",
//             height: "40px",
//             fontWeight: 500,
//           }}
//         >
//           Button
//         </Button>
//       </View>
//     </View>
//   )
// }
