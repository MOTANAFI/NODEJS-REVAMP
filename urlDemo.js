import url from 'url'

const urlString = 'https:/www.google.com/search?q=hellow+world';

// URL Object

const urlobj = new URL(urlString)

console.log(urlobj)

// format()

console.log(url.format(urlobj))
// import.meta.url -- file URL

console.log(import.meta.url)

console.log(url.fileURLToPath(import.meta.url))
// search params
console.log(urlobj.search)

const params = new URLSearchParams(urlobj.search);
console.log(params.get('q'))
params.append('limit', '5')
params.delete('limit')
console.log(params)