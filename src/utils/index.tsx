import { useState, useEffect } from "react"
import ReactXnft, { usePublicKey, useConnection } from "react-xnft"
import { PublicKey, Connection } from "@solana/web3.js"
import { Program } from "@project-serum/anchor"
import { IDL, MovieReview } from "./movie_review"

ReactXnft.events.on("connect", () => {})

export function programClient(): Program<MovieReview> {
  return new Program<MovieReview>(IDL, PID, window.xnft)
}

const PID = new PublicKey("BouTUP7a3MZLtXqMAm1NrkJSKwAjmid8abqiNjUyBJSr")
