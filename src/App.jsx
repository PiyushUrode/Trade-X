import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'; 
import Homepage from './assets/Homepage'; 
import Exchange from './Component/Exchange';
import Market from './Component/Market';
import Login from './Component/Login';
import Signup from './Component/Signup';

import CoinManagement from './Dashboard/Contentpages/CoinManagement';
import UserManagement from './Dashboard/Contentpages/UserManagement';
import MainDashboard from './Dashboard/MainDashboard'; // Import MainDashboard layout
import Dashboard from './Dashboard/Contentpages/Dashboard';
import Kyc from './Dashboard/Contentpages/UserManagement/Kyc.jsx'

// coin-management
import SupportNetwork from "./Dashboard/Contentpages/Coinmanagement/SupportedNetwork.jsx"
import Networks from "./Dashboard/Contentpages/Coinmanagement/Network.jsx"
import CryptoCurrency from "./Dashboard/Contentpages/Coinmanagement/Cryptocurrency.jsx"
import CoinNetwork from "./Dashboard/Contentpages/Coinmanagement/CoinNetwork.jsx"
import CoinPairs from "./Dashboard/Contentpages/Coinmanagement/CoinPairs.jsx"
import Admin  from './Dashboard/Contentpages/Adminandrole/Admix.jsx';
import Role from './Dashboard/Contentpages/Adminandrole/Role.jsx';
import AdminBanks from './Dashboard/Contentpages/AdminBanks.jsx';
import Walletlist from "./Dashboard/Contentpages/UserWallet/Walletlist.jsx"
import WalletAddresslist from './Dashboard/Contentpages/UserWallet/WalletAddresslist.jsx';
import SendWalletCoin from './Dashboard/Contentpages/UserWallet/SendWalletCoin.jsx';
import Sendcoinhistory from './Dashboard/Contentpages/UserWallet/Sendcoinhistory.jsx';
import Swapcoinhistory from './Dashboard/Contentpages/UserWallet/Swapcoinhistory.jsx';


//  Admin and Role

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/market" element={<Market />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MainDashboard with nested routes */}
        <Route path="/main-dashboard" element={<MainDashboard />}>
          <Route path="dashboard" element={<Dashboard />} /> {/* Relative path */}
          <Route path="coin-management" element={<CoinManagement />} /> {/* Relative path */}
          <Route path="kyc" element={<Kyc />} /> {/* Relative path */}
          
          <Route path="user-management" element={<UserManagement />} /> 

          {/* COIN MANAGEMENT */}
          <Route path="SupportNetwork" element={<SupportNetwork />} /> 
          <Route path="Networks" element={<Networks />} /> 
          <Route path="CryptoCurrency" element={<CryptoCurrency />} /> 
          <Route path="CoinNetwork" element={<CoinNetwork />} /> 
          <Route path="CoinPairs" element={<CoinPairs />} /> 

          {/* ADMIN AND ROLE */}
          <Route path="Admin" element={<Admin />} /> 
          <Route path="Role" element={<Role />} /> 


          {/* Admin Banks */}
          <Route path="AdminBanks" element={<AdminBanks />} /> 

          {/* User Wallet */}
          <Route path="Walletlist" element={<Walletlist/>} /> 
          <Route path="WalletAddresslist" element={<WalletAddresslist />} /> 
          <Route path="SendWalletCoin" element={<SendWalletCoin />} /> 
          <Route path="Sendcoinhistory" element={<Sendcoinhistory/>} /> 
          <Route path="Swapcoinhistory" element={<Swapcoinhistory/>} /> 
       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
