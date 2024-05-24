import { getQuoteData } from "./fetch_quote"

export function refreshQuotes(e,elementQuotes) {
  const btn = document.querySelector(e)
  btn.addEventListener("click", () => {
    getQuoteData(elementQuotes)
  })
}
