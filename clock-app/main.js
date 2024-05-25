import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './myStyle.css'
import { getQuoteData } from './fetch_quote.js'
import { refreshQuotes } from './refreshQuotes.js'

document.querySelector('#app').innerHTML = `
  <div class="mainDiv text-white flex flex-col justify-between items-stretch">
    <div class="quoteDiv flex p-4 gap-2 justify-between">
      <span class="quote">    
      </span>
      <button class="refreshQuotes self-start py-2" >
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fill-rule="nonzero" opacity=".5"/></svg>
      </button
    </div>
    </div>
    <div class="localTimeDiv p-4">
      <div class="greetingDiv flex gap-4 items-center">
        <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z" fill="#FFF" fill-rule="nonzero"/></svg>
        <h3>GOOD EVENING</h3>
      </div>
      <div class="timeDiv my-6 flex gap-2 items-baseline">
        <h1 class="text-8xl font-bold inline-block">23:14</h1>
        <span>BST</span>
      </div>
      <div class="locationDiv font-bold tracking-widest">
        <span>IN LONDON, UK</span>
      </div>
      <button class="moreBTN">
        <span>MORE</span>
        <span class="spanSvgBTN">
          <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#FFF" stroke-width="2" fill="none" d="m1 1 6 6 6-6"/>
          </svg>
        </span>
      </button>
      <button class="lessBTN">
        <span>LESS</span>
        <span class="spanSvgBTN">
          <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#FFF" stroke-width="2" fill="none" d="M1 8l6-6 6 6"/>
          </svg>
        </span>
      </button>
    </div>
    <div class="additionInfoDiv bg-black h-3/4 py-10 px-4 grid grid-cols-2 gap-2 items-center">
      <span class="text-sm">CURRENT TIMEZONE</span>
      <span class="justify-self-end font-bold text-2xl">Europe/London</span>
      <span class="text-sm">DAY OF THE YEAR</span>
      <span class="justify-self-end font-bold text-2xl">295</span>
      <span class="text-sm">DAY OF THE WEEK</span>
      <span class="justify-self-end font-bold text-2xl">5</span>
      <span class="text-sm">WEEK NUMBER</span>
      <span class="justify-self-end font-bold text-2xl">42</span>
    </div>
  </div>
`
getQuoteData(document.querySelector(".quote"))
refreshQuotes(".refreshQuotes",document.querySelector(".quote"))