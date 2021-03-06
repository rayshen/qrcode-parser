import qrcodeParser from '../src'

const imageUrl = 'https://i.loli.net/2018/03/27/5aba1f615633c.png'

qrcodeParser(imageUrl).then(res => {
  document.getElementById('content').innerText = res.data
})

const fileElement = document.getElementById('file')
fileElement.addEventListener('change', () => {
  const file = fileElement.files[0]
  qrcodeParser(file).then(res => {
    document.getElementById('content').innerText = res.data
  })
}, false)
