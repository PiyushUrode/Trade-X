import React from 'react';
import CoinManagement from './Contentpages/CoinManagement';
import UserManagement from './Contentpages/UserManagement';



const MainContent = () => {
  return (
    <div className="main-content" style={{ width: '70%', float: 'left', padding: '20px' }}>
<CoinManagement/>
<UserManagement/>
 </div>
  );
};  

export default MainContent;
