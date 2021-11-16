import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
console.log(uuidv4())

export class Logger  {

    static _buffer = []
    static oldConsole

    constructor(freq) {
        // if window.Logger return window.Logger
        setInterval(()=> { 
            Logger._flush()
        } , freq)
        
        const console=(function(oldCons){
            Logger.oldConsole=oldCons
            return {
                debug: function(...args){
                    oldCons.log(args)
                },
                log: function(...args){
                    oldCons.log(args)
                    Logger._addToQ('log', args)
                },
                info: function (...args) {
                    oldCons.info(args)
                    Logger._addToQ('info', args)
                },
                warn: function (args) {
                    oldCons.warn(args)
                    Logger._addToQ('warn', args)
                },
                error: function (...args) {
                    oldCons.error(args)
                    Logger._addToQ('error', args)
                }
            }
        }(window.console))
        //redefine the console
        window.console = console

        console.debug('Setting up', 'new logger')
    }// cons()

    static _addToQ(type, obj) {
        Logger._buffer.push({'level': type, 'msgs': obj, guid: uuidv4()})
    }  

    static _flush() {
        console.log('logging', 'yeah')
        let data = JSON.stringify(Logger._buffer )
        fetch('https://log.cekvenich.net/api/log', {
            body: data,
            mode: 'no-cors',
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => console.debug(resp.status))
        .catch( (error) => console.debug(error))
        // clear
        Logger._buffer = []
    }//()
}
