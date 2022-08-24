const { TeamSpeak, QueryProtocol } = require('ts3-nodejs-library');

TeamSpeak.connect({
    host: "ts3.spreyo.tk",
    protocol: QueryProtocol.RAW,
    serverport: 9987,
    username: "serveradmin",
    password: "15231306",
    nickname: "NodeJS Bot"
}).then(async teamspeak =>{ 
    while (true){
        const clients = await teamspeak.clientList({ clientType: 0})
        clients.forEach(client =>{
            console.log("sending hello message to ", client.nickname)
            client.message('Hello');
        })
        
    }
}).catch(e=>{
    console.log('error');
    console.error(e)
})

