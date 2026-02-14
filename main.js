let credits = Number(localStorage.getItem('credits') || 0)
let key = localStorage.getItem('key') || ""
let expire = Number(localStorage.getItem('expire') || 0)

const elCredits = document.getElementById('credits')
const elKey = document.getElementById('key')
const elTimer = document.getElementById('timer')
const elMsg = document.getElementById('msg')

function update(){
  elCredits.innerText = credits
  elKey.innerText = key || '---'
}

update()

function genKey(){
  return 'POTATO-' + Math.random().toString(36).substring(2,6).toUpperCase() + '-' + Math.random().toString(36).substring(2,6).toUpperCase() + '-' + Math.random().toString(36).substring(2,6).toUpperCase()
}

function redeem(){
  if(code.value.trim() === 'POTATOHUB'){
    credits += 5
    localStorage.setItem('credits',credits)
    elMsg.innerText = 'Código canjeado +5 créditos'
    update()
  }else{
    elMsg.innerText = 'Código inválido'
  }
}

function buy(h){
  let cost = h==6?1:h==12?2:3
  if(credits < cost) return elMsg.innerText = 'Créditos insuficientes :['

  credits -= cost
  key = genKey()
  expire = Date.now() + h*3600000

  localStorage.setItem('credits',credits)
  localStorage.setItem('key',key)
  localStorage.setItem('expire',expire)

  elMsg.innerText = 'Key generada 😈'
  update()
}

setInterval(()=>{
  if(!expire) return
  let t = expire - Date.now()
  if(t<=0){
    elTimer.innerText = 'Tiempo: 00:00:00'
    key = ''
    localStorage.removeItem('key')
    return
  }
  let s = Math.floor(t/1000)
  let h = Math.floor(s/3600)
  let m = Math.floor((s%3600)/60)
  let ss = s%60
  elTimer.innerText = `Tiempo: ${h}h ${m}m ${ss}s`
},1000)
