export const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')
export const LETTERS_CAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
export const NUMBERS = '0123456789'.split('')
export const MATH_SYMBOLS = '+-/*=()[]{}%<>'.split('')
export const PUNCTUATION_SYMBOLS = ',.;?!`´\'"~^¨'.split('')
export const SPECIAL_SYMBOLS = '\'"!@#$%¨¬&*()-_+=§´`{[ª^~]}º|\\<,.>;:?/°'

export const ALL_SYMBOLS = [...LETTERS, ...LETTERS_CAP, ...NUMBERS, ...MATH_SYMBOLS, ...PUNCTUATION_SYMBOLS, ...SPECIAL_SYMBOLS]

export const RandomGenerator = (options) => {
  return function(){
    const symbols = options.symbols || [ALL_SYMBOLS]
    const length = options.length || 500

    //calculate symbol array weights
    let weight = 0
    const weighted_symbols = []
    let non_weighted_symbols = []
    for(let symbol of symbols){
      if(!!symbol.weight){
        weight += symbol.weight
        weighted_symbols.push(symbol)
      }else{
        weight += 1
        non_weighted_symbols = [ ...non_weighted_symbols, ...symbol ]
      }
    }

    if(!weight){
      weight = 1
    }
    console.log("started gen --------------------")
    //generate random symbols for the weighted symbols
    const weighted_generated = []
    let count_generated = 0
    for(let weighted_symbol of weighted_symbols){
      let count = Math.ceil((weighted_symbol.weight / weight) * length)
      if(count + count_generated > length){
        count -= count_generated + count - length
      }
      count_generated += count
      console.log("weighted:", count)
      while(count--){
        const index = Math.ceil(Math.random() * (weighted_symbol.symbols.length - 1))
        weighted_generated.push(weighted_symbol.symbols[index])
      }
    }

    const non_weighted_generated = []
    //generate the remaining symbols for the non weighted
    while(count_generated++ < length){
      const index = Math.ceil(Math.random() * (non_weighted_symbols.length - 1))
      non_weighted_generated.push(non_weighted_symbols[index])
    }
    
    console.log("finished gen -------------------")
    console.log("total non weighted:", non_weighted_generated.length)
    console.log("total weighted:", weighted_generated.length)

    //merge & shuffle the arrays
    const generated = [ ...non_weighted_generated, ...weighted_generated ]
    for(let i = 0; i < generated.length; ++i){
      const randomIndex = Math.ceil(Math.random() * (generated.length - 1))
      const aux = generated[i]
      generated[i] = generated[randomIndex]
      generated[randomIndex] = aux
    }

    return generated.join('')
  }
}