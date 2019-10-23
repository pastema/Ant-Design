import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input , Button, Icon} from 'antd';
function App() {
  return (
    <div className="App">
      <Input/>
      <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    <Icon type="step-backward" />
    </div>
  );
}

export default App;