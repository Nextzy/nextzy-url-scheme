import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Typography, Layout } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title className="Title">my AIS</Title> 
        <div>
          <Button className="Button" size="large" type="primary" href="myais://CurrentPackage">Current Package</Button>
        </div>
        <Title className="Title">Easy App</Title> 
        <div>
          <Button className="Button" size="large" type="primary" href="neweasyapp://Home">Home</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://PrepaidIdent">PI</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://RePrepaidIdent">Re PI</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://TopUp">Top Up</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://TopUpRefund">Top Up Refund</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://VasPackage">VAS Package</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://ConvertPreToPost">Convert Pre to Post</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://NewRegister">New Register</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://MNP">MNP</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://PoolingNumber">PoolingNumber</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://SallerNews">SallerNews</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://Setting">Setting</Button><br />
          <Button className="Button" size="large" type="primary" href="neweasyapp://News?id=5d550bfce316f76eec9d02cf">News</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
