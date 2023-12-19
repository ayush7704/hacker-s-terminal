
        function bgrain() {
            let words = Array.from(document.querySelectorAll('.words h1'))
            let aToz = 'abcdefghijklmnopqrstuvwzyz';
            let abcd = aToz.split('')

            for (let x = 0; x <= words.length; x++) {
                let randomText = Math.floor(Math.random() * 26)
                let randomDelay = (Math.random() * 2).toFixed(2)
                try {
                    words[x].innerText = abcd[randomText]
                    words[x].style.animation = `fall 1.5s ${randomDelay}s linear infinite`
                    console.log(randomDelay)
                }
                catch (e) { console.log(e) }
            }
        }
        bgrain()

        let printingLines = Array.from(document.querySelectorAll('.layer h3'))
        let linesTextArr = ['initializing hacking', 'Reading you files', 'password file detected', 'sending all passwords and personal files to server', 'cleaning up']

        async function printfunction() {
            let spans = '<span>.</span><span>.</span><span>.</span>'
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    printingLines[0].innerHTML = linesTextArr[0];
                    //  added dots dots here 
                    printingLines[0].innerHTML += spans

                    Array.from(printingLines[0].children).forEach(element => {
                        element.classList.add('dots')
                        // gave them classes
                    });
                    resolve('initiliazed...')
                }, 500)
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    printingLines[0].innerHTML += ' !'
                    printingLines[1].innerText = linesTextArr[1];
                    Array.from(document.querySelectorAll('.layer h3 span')).forEach((span) => {
                        span.style.display = 'none'
                    })
                    printingLines[1].innerHTML += spans
                    Array.from(printingLines[1].children).forEach(element => {
                        element.classList.add('dots')
                    });
                    resolve('reading files...')
                }, 2000)
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    printingLines[1].innerHTML += ' !'
                    printingLines[2].innerText = linesTextArr[2];

                    Array.from(document.querySelectorAll('.layer h3 span')).forEach((span) => {
                        span.style.display = 'none'
                    })
                    printingLines[2].innerHTML += spans
                    Array.from(printingLines[2].children).forEach(element => {
                        element.classList.add('dots')
                    });

                    resolve('password detected...')
                }, 1500)
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    printingLines[2].innerHTML += ' !'
                    printingLines[3].innerText = linesTextArr[3];

                    Array.from(document.querySelectorAll('.layer h3 span')).forEach((span) => {
                        span.style.display = 'none'
                    })
                    printingLines[3].innerHTML += spans
                    Array.from(printingLines[3].children).forEach(element => {
                        element.classList.add('dots')
                    });
                    resolve('sending password...')
                }, 2000)
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    printingLines[3].innerHTML += ' !'
                    printingLines[4].innerText = linesTextArr[4];

                    Array.from(document.querySelectorAll('.layer h3 span')).forEach((span) => {
                        span.style.display = 'none'
                    })
                    printingLines[4].innerHTML += spans
                    Array.from(printingLines[4].children).forEach(element => {
                        element.classList.add('dots')
                    });
                    resolve('cleaning up...')
                }, 4000)
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    Array.from(document.querySelectorAll('.layer h3 span')).forEach((span) => {
                        span.style.display = 'none'
                    })
                    printingLines[4].innerHTML += ' !'
                    resolve('cleaned!')
                }, 2000)
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.querySelector('.container').style.cssText = "height: 100%; transition: scale 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0s; scale: 0; border-radius:50%;"
                    resolve('finishing...')
                }, 500)
            })

        }
        printfunction()