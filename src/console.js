import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

export function ask(question, noFormat = false) {
    const formattedQuestion = noFormat ? `> ` : `\n${question}\n\n> `

    return new Promise((resolve) => {
        rl.question(formattedQuestion, (answer) => resolve(answer))
    })
}

export function print(text = "") {
    console.log(text)
}

export function println(text = "") {
    console.log(`\n${text}\n`)
}

export function close() {
    rl.close()
}

process.on("SIGINT", () => {
    println("Goodbye!")
    close()
    process.exit(0)
})
