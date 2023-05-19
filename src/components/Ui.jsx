import React from 'react'
import {useState} from "react"
import Web3 from 'web3';

import '../styles/Ui.scss' 

const Ui = () => {

    const [account, setAccount] = useState(null)
    const[address, setAddress] = useState(null)
    const [balance, setBalance] = useState(null)

    const web3 = new Web3(window.ethereum)

    const connectToWallet= async()=> {
        if(window.ethereum) {
            try{
                await window.ethereum.request({method: 'eth_requestAccounts'});

                

                const accounts = await web3.eth.getAccounts()   
                console.log('Connected to MetaMask:', accounts)
                setAccount(accounts[0])
                
                

                const userbal = await web3.eth.getBalance(accounts[0])
                
                setBalance(userbal)
                console.log(userbal)

            }catch (error){
                console.error("Metamask not connected")
            }
        }

        else{
            console.log("install metamask")
        }
    }

  


    const processPayment= async()=> {
        
            try{
               

              

                const payment= await web3.eth.sendTransaction({
                    from: '0xf34b4A56aECE1Ba6Ff15156FDB411261DE483293',
                    to: address,
                    value: web3.utils.toWei('0.1', 'ether'),
                    gas: Number(20000).toString(16),
                    gasPrice: Number(2000000000).toString(16),

                    
                  });
              

                console.log(payment)

                  
                }
            
                catch (error) {
                    console.log("error")
                }
           
    }

  
  return (
    <div>
   <h1>Connect Metamask Wallet</h1>
   <button onClick = {connectToWallet}>tap to connect</button>

   <p>Address : {account}</p>
   <p>Balance: ${balance}</p>

   <form>
        <input type='text' name= "reciever_address" placeholder='recievers address' onChange={(e) => setAddress(e.target.value)}/>
   </form>
   <button onClick={processPayment}>send payment</button>
  </div>
  )
}

export default Ui


/*  web3.eth.once('sending', function(payload) {
                    console.log("Sent")
                  });
              
                  // 'sent' event
                  web3.eth.once('sent', function(payload) {
                    console.log("Sent")
                  });
              
                  // 'transactionHash' event
                  web3.eth.once('transactionHash', function(hash) {
                    console.log("Sent")
                  });
              
                  // 'receipt' event
                  web3.eth.once('receipt', function(receipt) {
                    console.log("Sent")
                  });
              
                  // 'confirmation' event
                  web3.eth.on('confirmation', function(confNumber, receipt, latestBlockHash) {
                    console.log("Sent")
                  });
              
                  // 'error' event
                  web3.eth.on('error', function(error) {
                    console.log("error")
                  }); */