import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import { spawn } from 'child_process';

@WebSocketGateway()
export class IoGateway {
  @WebSocketServer()
  server: Server;
  
  rfid;
  constructor(){
    try{
      if(process.env.TEST){
        setInterval(()=>{
          this.server.emit('rfid','0466220a3b5c80');
        },5000);
      }else{

        this.rfid = spawn('python', ['../MFRC522-python/Read.py', 'hex', 'cont']);
        this.rfid.stdout.on('data',(data)=>{
          let b:string = data.toString();
          let hexes = b.match(/.{1,2}/g)
          hexes = hexes.reverse();
          const out = hexes.join(':');
          console.log(out)
          try{
            this.server.emit('rfid', out)
          }catch(err){
            console.log(err)
            if(err) console.log("Sorry, some hardware error occurred");
          }
        });
        
      }
    }
    catch(e){
      console.log('b')
      throw e;
    }
  }
}
