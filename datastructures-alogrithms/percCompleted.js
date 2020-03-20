/*
#################################################################################
################ TOTAL DATA-STRUCTURES & ALGORITHMS % COMPLETION ################
#################################################################################
*/

completion = [
    {name: 'Basic JS',          a: 110, q: 110},
    {name: 'ES6',               a: 31,  q: 31},
    {name: 'REGEX',             a: 33,  q: 33},
    {name: 'Debugging',         a: 12,  q: 12},
    {name: 'Data Struc',        a: 20,  q: 20},
    {name: 'Bsc Algo Scripts',  a: 16,  q: 16},
    {name: 'OOP',               a: 18,  q: 26},
    {name: 'FP',                a: 15,   q: 24},
    {name: 'Int Algo Scripts',  a: 3,   q: 21},
]

// Total Cumulative Data Structures & Algorithms completion
function ttlQandAs(data) {
    let totalQ = data.map(item => {
        return item.q
    })
    let totalA = data.map(item => {
        return item.a
    })
    
    const reducer = (cv, acc) => cv + acc    
    let cumQs = totalQ.reduce(reducer)
    let cumAs = totalA.reduce(reducer)

    return `${((cumAs/cumQs)*100).toFixed()}%`
}

console.log(ttlQandAs(completion))

// Total Data Structures & Algorithms sub-sections completion
function subSection(title, ans, quest) {
    return { title, 'Perc': `${((ans/quest)*100).toFixed()}%` }
}

let results = completion.map(item => {
    return subSection(item.name, item.a, item.q)
})

console.log(results)