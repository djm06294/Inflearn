
function showLogMessage1(msg) {
    console.log('-------------------------')
    console.log(`로그메시지는 : ${msg}`)
    console.log('-------------------------')
}

function showLogMessage2(msg) {
    console.log('*************************')
    console.log(`로그메시지는 : ${msg}`)
    console.log('*************************')
}

const precious_val = 78

module.exports.showLogMessage1=showLogMessage1
module.exports.showLogMessage2=showLogMessage2
module.exports.pval = precious_val

