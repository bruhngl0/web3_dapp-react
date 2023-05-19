import React from 'react'
import {useState} from "react"
import Web3 from 'web3';


const Ui = () => {

    const [account, setAccount] = useState(null)
    const [address, setAddress] = useState(null)
    const [balance, setBalance] = useState(null)



    const connectToWallet= async()=> {
        if(window.ethereum) {
            try{
                await window.ethereum.request({method: 'eth_requestAccounts'});

                const web3 = new Web3(window.ethereum); //insatnce

                const accounts = await web3.eth.getAccounts()   
                console.log('Connected to MetaMask:', accounts)
                setAccount(accounts[0])

                const userbal = await web3.eth.getBalance(accounts[0])
                console.log(userbal)
                setBalance(userbal)
            }catch (error){
                console.error("Metamask not connected")
            }
        }

        else{
            console.log("install metamask")
        }
    }


    const processPayment= async()=> {
        if(window.ethereum) {
            try{
                await window.ethereum.request({method: 'eth_requestAccounts'});

                const web3 = new Web3(window.ethereum); //insatnce

                const payment= await web3.eth.sendTransaction({
                    from: '0xf34b4A56aECE1Ba6Ff15156FDB411261DE483293',
                    data: '0x8a6bdbb867fe904c4b397dce1e6d2c943da385c9',
                    value: web3.utils.toWei('0.1', 'ether'),
                    gas: Number(20000).toString(16),
                    gasPrice: Number(2000000000).toString(16),

                    
                  });

                    


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
              

                console.log(payment)

                  







                }
            
                catch (error) {
                    console.log("error")
                }
            }
        else{
            console.log("install metamask")
        }
    }


    

     
    

  
  return (
    <>
   <h1>Connect Metamask Wallet</h1>
   <button onClick = {connectToWallet}>tap to connect</button>

   <p>Address : {account}</p>
   <p>Balance: ${balance}</p>

   <form>
        <input type='text' placeholder='recievers address'/>
   </form>
   <button onClick={processPayment}>send payment</button>
  </>
  )
}

export default Ui
