
import './App.css';
import {useState, useEffect} from 'react';
import { ethers } from "ethers";

function App() {
  //DeployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const[account, setAccount] = useState();

  useEffect(() => {
    async function load() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider)
      const a = await provider.listAccounts();

      const balance = await provider.getBalance(a[0].address)
      console.log(balance)
      const accounts = await provider.getBlockNumber();
    
      setAccount(a[0].address);
    }
    load();
    }, []);

  //render function
    return(
        <div>
          Your acc: {account}
        </div>
    )  


}

export default App;
