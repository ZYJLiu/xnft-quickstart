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
  const click2 = () => {
    console.log("click")
    nav.push("stack4")
  }

  const title = "title6"

  const test = async () => {
    const counter = anchor.web3.Keypair.generate()

    const [movieReviewPda] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(title), window.xnft.publicKey.toBuffer()],
      program.programId
    )

    const tx = await program.methods
      .addMovieReview(title, "description", 5)
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
      <View>
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
          Next
        </Button>
        {/* <Button
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
        </Button> */}
        <Button
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "15px",
            fontWeight: 100,
            lineHeight: "150%",
            margin: "12px",
          }}
          onClick={() => click2()}
        >
          Iframe
        </Button>
      </View>
      {/* <View
        style={{
          textAlign: "left",
          color: THEME.colors.text,
        }}
      >
        <Iframe src="https://token-creation-frontend-rjb6uimw2-zyjliu.vercel.app/"></Iframe>
      </View> */}
      {/* <Test2 /> */}
    </View>
  )
}

function Test2() {
  const program = programClient()
  const [movies, setMovies] = useState<any | null>(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [result, setResult] = useState<any | null>(null)

  useEffect(() => {
    if (movies && search == "") {
      const filtered = movies.slice((page - 1) * 3, page * 3)
      console.log(filtered)
      setResult(filtered)
      console.log(filtered)
    }
  }, [page, movies, search])

  useEffect(() => {
    const fetchAccounts = async () => {
      if (program) {
        const accounts = (await program.account.movieAccountState.all()) ?? []

        const sort = [...accounts].sort((a, b) =>
          a.account.title > b.account.title ? 1 : -1
        )
        setMovies(sort)
        console.log(accounts)
      }
    }
    fetchAccounts()
  }, [])

  return (
    <View
      style={{
        textAlign: "center",
        color: THEME.colors.text,
      }}
    >
      {/* {movies && (
        <View>
          {movies.map((r) => {
            return (
              <View>
                <ListItem>{r.account.title}</ListItem>
              </View>
            )
          })}
        </View>
      )} */}
      <View
        style={{
          textAlign: "left",
          color: THEME.colors.text,
        }}
      >
        <Iframe src="https://token-creation-frontend-rjb6uimw2-zyjliu.vercel.app/" />
      </View>
    </View>
  )
}
