

console.log("Hello Nodejs")

function sayHello(name) {
    console.log('Hello '+name+'!!')
}

sayHello('JooYoung')

const v = 10

if(v>5) {
    console.log("it's big number")
} else {
    console.log("it's not big number")
}

// // 3초에 한번씩 출력
// setInterval(() => {
//     console.log("3cho")
// }, 3000)

// // 3초후에 한번 출력
// setTimeout(() => {
//     console.log("3cho")
// }, 3000)

// module이라는 것! node js가 사용되는 이유!!
// logger 불러오기
const logger = require('./logger')

logger.showLogMessage1('모듈 테스트중')
logger.showLogMessage2('모듈 테스트중')
console.log(`The precious value... ${logger.pval}!!!`)
