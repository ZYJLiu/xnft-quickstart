import React, { useState, useEffect, useCallback } from "react"
import ReactXnft, { Iframe } from "react-xnft"

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Stack4() {
  return <Iframe src="https://xnft-iframe-test.vercel.app/"></Iframe>
}
