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
    

  
  return (
    <>
   <h1>Connect Metamask Wallet</h1>
   <button onClick = {connectToWallet}>tap to connect</button>

   <p>Address : {account}</p>
   <p>Balance: ${balance}</p>
  </>
  )
}

export default Ui
