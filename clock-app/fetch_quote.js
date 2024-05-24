

export async function getQuoteData(element) {
  const quote_api = "https://api.quotable.io/random"
  const res = await fetch(quote_api)
  const data = await res.json()
  const { content , author } = data
  element.innerHTML = `
  <p class="quotes">"${content}"</p>
  <h4 class="author mt-2">${author}</h4>  
  `
}
