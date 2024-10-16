import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  // State to handle dropdown toggles for each main category
  const [isUserManagementOpen, setUserManagementOpen] = useState(false);
  const [isCoinManagementOpen, setCoinManagementOpen] = useState(false);
  const [isAdminAndRoleOpen, setAdminAndRoleOpen] = useState(false);
  const [isUserWalletOpen, setUserWalletOpen] = useState(false);
  const [isDepositWithdrawalOpen, setDepositWithdrawalOpen] = useState(false);
  const [isAddonsOpen, setAddonsOpen] = useState(false);
  const [isTradeReportsOpen, setTradeReportsOpen] = useState(false);
  const [isFiatToCryptoDepositOpen, setFiatToCryptoDepositOpen] = useState(false);
  const [isCryptoToFiatWithdrawOpen, setCryptoToFiatWithdrawOpen] = useState(false);
  const [isAdminTokenOpen, setAdminTokenOpen] = useState(false);
  const [isStakingOpen, setStakingOpen] = useState(false);
  const [isFutureTradeOpen, setFutureTradeOpen] = useState(false);
  const [isGiftCardOpen, setGiftCardOpen] = useState(false);
  const [isSystemWalletOpen, setSystemWalletOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isLandingSettingsOpen, setLandingSettingsOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isFAQOpen, setFAQOpen] = useState(false);
  const [isLogsOpen, setLogsOpen] = useState(false);

  // Toggle function for dropdowns
  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "userManagement":
        setUserManagementOpen(!isUserManagementOpen);
        break;
      case "coinManagement":
        setCoinManagementOpen(!isCoinManagementOpen);
        break;
      case "adminAndRole":
        setAdminAndRoleOpen(!isAdminAndRoleOpen);
        break;
      case "userWallet":
        setUserWalletOpen(!isUserWalletOpen);
        break;
      case "depositWithdrawal":
        setDepositWithdrawalOpen(!isDepositWithdrawalOpen);
        break;
      case "addons":
        setAddonsOpen(!isAddonsOpen);
        break;
      case "tradeReports":
        setTradeReportsOpen(!isTradeReportsOpen);
        break;
      case "fiatToCryptoDeposit":
        setFiatToCryptoDepositOpen(!isFiatToCryptoDepositOpen);
        break;
      case "cryptoToFiatWithdraw":
        setCryptoToFiatWithdrawOpen(!isCryptoToFiatWithdrawOpen);
        break;
      case "adminToken":
        setAdminTokenOpen(!isAdminTokenOpen);
        break;
      case "staking":
        setStakingOpen(!isStakingOpen);
        break;
      case "futureTrade":
        setFutureTradeOpen(!isFutureTradeOpen);
        break;
      case "giftCard":
        setGiftCardOpen(!isGiftCardOpen);
        break;
      case "systemWallet":
        setSystemWalletOpen(!isSystemWalletOpen);
        break;
      case "settings":
        setSettingsOpen(!isSettingsOpen);
        break;
      case "landingSettings":
        setLandingSettingsOpen(!isLandingSettingsOpen);
        break;
      case "notification":
        setNotificationOpen(!isNotificationOpen);
        break;
      case "faq":
        setFAQOpen(!isFAQOpen);
        break;
      case "logs":
        setLogsOpen(!isLogsOpen);
        break;
      default:
        break;
    }
  };


  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      {/* LOGO */}
      {/* <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div> */}

      {/* Sidebar Menu */}
      <ul className="p-4 space-y-4">
        {/* Search Menu */}
        <li>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </li>

        <li className="flex items-center cursor-pointer">
          <span className="mr-2">📜</span> DashBoard
          <li><Link to="/main-dashboard/dashboard">User</Link></li>
        </li>

        {/* User Management */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("userManagement")}
          >
            <span className="mr-2">👤</span> User Management
            <span>{isUserManagementOpen ? "▲" : "▼"}</span>
          </button>
          {isUserManagementOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">👤</span> User
                <li><Link to="/main-dashboard/coin-management">User</Link></li>
                
              </li>
              <li className="flex items-center">
                <span className="mr-2">📄</span> 
                <li><Link to="/main-dashboard/Kyc">KYC Verification</Link></li>
              </li>
            </ul>
          )}
        </li>

        {/* Coin Management */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("coinManagement")}
          >
            <span className="mr-2">💰</span> Coin Management
            <span>{isCoinManagementOpen ? "▲" : "▼"}</span>
          </button>
          {isCoinManagementOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">🛠️</span> 
                <li><Link to="/main-dashboard/SupportNetwork">Support Network</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📡</span> 
                <li><Link to="/main-dashboard/Networks">Network</Link></li>

              </li>
              <li className="flex items-center">
                <span className="mr-2">💰</span> 
                <li><Link to="/main-dashboard/CryptoCurrency">Cryptocurrency</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💰</span> 
                <li><Link to="/main-dashboard/CoinNetwork">Coin Network</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💰</span> 
                <li><Link to="/main-dashboard/CoinPairs">Coin Pairs</Link></li>
              </li>
            </ul>
          )}
        </li>

        {/* Admin and Role */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("adminAndRole")}
          >
            <span className="mr-2">👤</span> Admin and Role
            <span>{isAdminAndRoleOpen ? "▲" : "▼"}</span>
          </button>
          {isAdminAndRoleOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">👤</span> 
                <li><Link to="/main-dashboard/Admin">Admin</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">👤</span> 
                <li><Link to="/main-dashboard/Role">Role</Link></li>
              </li>
            </ul>
          )}
        </li>

        {/* Admin Banks */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">🏦</span> 
          <li><Link to="/main-dashboard/AdminBanks">Admin Banks</Link></li>
        </li>

        {/* User Wallet */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("userWallet")}
          >
            <span className="mr-2">👛</span> User Wallet
            <span>{isUserWalletOpen ? "▲" : "▼"}</span>
          </button>
          {isUserWalletOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">👛</span> 
                <li><Link to="/main-dashboard/Walletlist">Wallet List</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">👛</span> 
                <li><Link to="/main-dashboard/WalletAddresslist">Wallet Address List</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">👛</span> 
                <li><Link to="/main-dashboard/SendWalletCoin">Send Wallet Coin</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">👛</span> 
                <li><Link to="/main-dashboard/Sendcoinhistory">Send Coin History</Link></li>
              </li>
              <li className="flex items-center">
                <span className="mr-2">👛</span> 
                <li><Link to="/main-dashboard/Swapcoinhistory">Swap Coin History</Link></li>
              </li>
            </ul>
          )}
        </li>

        {/* Deposit / Withdrawal */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("depositWithdrawal")}
          >
            <span className="mr-2">💵</span> Deposit / Withdrawal
            <span>{isDepositWithdrawalOpen ? "▲" : "▼"}</span>
          </button>
          {isDepositWithdrawalOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">💵</span> Crypto Transaction
              </li>
              <li className="flex items-center">
                <span className="mr-2">📥</span> Pending Crypto Deposit
              </li>
              <li className="flex items-center">
                <span className="mr-2">📤</span> Pending Crypto Withdrawal
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔍</span> Check Crypto Deposit
              </li>
              <li className="flex items-center">
                <span className="mr-2">💵</span> Currency Transaction
              </li>
              <li className="flex items-center">
                <span className="mr-2">📥</span> Pending Currency Deposit
              </li>
              <li className="flex items-center">
                <span className="mr-2">📤</span> Pending Currency Withdrawal
              </li>
              <li className="flex items-center">
                <span className="mr-2">📜</span> Referral History
              </li>
            </ul>
          )}
        </li>

        {/* Addons */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("addons")}
          >
            <span className="mr-2">🛠️</span> Addons
            <span>{isAddonsOpen ? "▲" : "▼"}</span>
          </button>
          {isAddonsOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">🛠️</span> Addons Lists
              </li>
              <li className="flex items-center">
                <span className="mr-2">⚙️</span> Addons Setting
              </li>
            </ul>
          )}
        </li>

        {/* Trade Reports */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("tradeReports")}
          >
            <span className="mr-2">📊</span> Trade Reports
            <span>{isTradeReportsOpen ? "▲" : "▼"}</span>
          </button>
          {isTradeReportsOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">📈</span> Buy Order History
              </li>
              <li className="flex items-center">
                <span className="mr-2">📉</span> Sell Order History
              </li>
              <li className="flex items-center">
                <span className="mr-2">📊</span> Stop Limit Order History
              </li>
              <li className="flex items-center">
                <span className="mr-2">🗂️</span> Transaction History
              </li>
              <li className="flex items-center">
                <span className="mr-2">📜</span> Referral History
              </li>
            </ul>
          )}
        </li>

        {/* Fiat to Crypto Deposit */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("fiatToCryptoDeposit")}
          >
            <span className="mr-2">💱</span> Fiat to Crypto Deposit
            <span>{isFiatToCryptoDepositOpen ? "▲" : "▼"}</span>
          </button>
          {isFiatToCryptoDepositOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">📜</span> Pending Request
              </li>
              <li className="flex items-center">
                <span className="mr-2">🏦</span> Bank List
              </li>
              <li className="flex items-center">
                <span className="mr-2">💳</span> Payment Method
              </li>
            </ul>
          )}
        </li>

        {/* Crypto to Fiat Withdraw */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">🏦</span> Crypto to Fiat Withdraw
        </li>

        {/* Admin Token */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("adminToken")}
          >
            <span className="mr-2">🔑</span> Admin Token
            <span>{isAdminTokenOpen ? "▲" : "▼"}</span>
          </button>
          {isAdminTokenOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">📄</span> Pending Token Report
              </li>
              <li className="flex items-center">
                <span className="mr-2">📤</span> Gas Sent Report
              </li>
              <li className="flex items-center">
                <span className="mr-2">📥</span> Token Received Report
              </li>
            </ul>
          )}
        </li>

        {/* Staking */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">💎</span> Staking
        </li>

        {/* Future Trade */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">🔮</span> Future Trade
        </li>

        {/* Gift Card */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">🎁</span> Gift Card
        </li>

        {/* System Wallet */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">💼</span> System Wallet
        </li>

        {/* Settings */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("settings")}
          >
            <span className="mr-2">⚙️</span> Settings
            <span>{isSettingsOpen ? "▲" : "▼"}</span>
          </button>
          {isSettingsOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">⚙️</span> General
              </li>
              <li className="flex items-center">
                <span className="mr-2">🛠️</span> Features
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎨</span> Theme Setting
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔌</span> API
              </li>
              <li className="flex items-center">
                <span className="mr-2">📝</span> KYC Setting
              </li>
              <li className="flex items-center">
                <span className="mr-2">📊</span> Google Analytics
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌍</span> Language List
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌏</span> Country List
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔒</span> Two-Factor Settings
              </li>
              <li className="flex items-center">
                <span className="mr-2">💵</span> Fiat Currency
              </li>
              <li className="flex items-center">
                <span className="mr-2">💸</span> Trade Fees
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔍</span> SEO Manager
              </li>
              <li className="flex items-center">
                <span className="mr-2">⚙️</span> Configuration
              </li>
              <li className="flex items-center">
                <span className="mr-2">🛠️</span> Other Setting
              </li>
            </ul>
          )}
        </li>

        {/* Landing Settings */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("landingSettings")}
          >
            <span className="mr-2">🏞️</span> Landing Settings
            <span>{isLandingSettingsOpen ? "▲" : "▼"}</span>
          </button>
          {isLandingSettingsOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">🏠</span> Landing Page
              </li>
              <li className="flex items-center">
                <span className="mr-2">📄</span> Custom Pages
              </li>
              <li className="flex items-center">
                <span className="mr-2">🖼️</span> Banner
              </li>
              <li className="flex items-center">
                <span className="mr-2">⭐</span> Features
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span> Social Media
              </li>
              <li className="flex items-center">
                <span className="mr-2">📢</span> Announcement
              </li>
            </ul>
          )}
        </li>

        {/* Notification */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleDropdown("notification")}
          >
            <span className="mr-2">🔔</span> Notification
            <span>{isNotificationOpen ? "▲" : "▼"}</span>
          </button>
          {isNotificationOpen && (
            <ul className="pl-4 mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2">🔔</span> Notification
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> Bulk Email
              </li>
            </ul>
          )}
        </li>

        {/* FAQ */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">❓</span> FAQ
        </li>

        {/* Logs */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">📜</span> Logs
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
