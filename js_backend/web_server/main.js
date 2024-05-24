const express = require('express') // npm install express --save로 받음
const app = express()

app.listen(3000, ()=> {
    console.log('3000번 포트에 귀를 대고 듣기 시작함.')
}) 
// 이 컴퓨터에 서버가 만들어지고 동작함. 
// api reference 찾아보면서 코드 짜렴 /////// 중요
// 첫 arg는 port num. 안써주면 사용되지 않는 임의의 포트 선택.
// callback 함수 : 서버에 요청이 들어왔을 때 대답하는 친구


// /pages 경로로 들어오는 요청은 로컬 폴더 하의 pages에 가서 찾아봐라
app.use('/scripts', express.static(__dirname + '/scripts'))


// 요청 처리하는 루틴 추가하기
// HTTP 명령어 중 GET 명령어 처리하기
// 괄호 안의 것은 요청받은 Destination
// app.get('/', (req, res)=> {
//     console.log('root 요청 들어옴')
//     // console.log(req)
//     // res.send('루트에 대한 요청')
//     res.sendfile(__dirname + '/pages/index.html')
// })

app.get('/about', (req, res)=> {
    console.log('about 요청 들어옴!!')
    // res.send('about에 대한 요청')
    res.sendfile(__dirname + '/pages/about.html')
})

app.get('/working', (req, res)=> {
    console.log('working 요청 들어옴!!')
    // res.send('about에 대한 요청')
    res.sendfile(__dirname + '/pages/working.html')
})

// HTTP 명령어 중 POST 명령어 처리하기
// app.post()


// ========================================================= //
// nodemon (js파일이 저장될때마다 알아서 renew해주는 프로그램) 설치함
// npm install -g nodemon (-g는 global, 모든 js파일에 적용)
// npm install nodemon --save-dev (지역설치, npm script를 통해 사용 가능?)
// 오류해결: https://caiomsouza.medium.com/fix-for-powershell-script-not-digitally-signed-69f0ed518715



// ========================================================== //
// http response status code 개념
// http는 html파일을 주고받는 규약(protocol)
// 여기서 사용하는 response status code..! 알면 이해가 되는 부분이 있음
// web server가 Brower에게 보내는 response status code(나의 상태를 보내는 숫자 코드, 너의 요청에 대한 결과)


app.get('/', (req, res)=> {
    res.sendStatus(200) // 200 == okay. 잘 처리 가능.
})