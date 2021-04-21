import React from "react";
import "./App.css";
import { Card, Button } from "antd";
import { ChromeMessage } from "./chrome/msg";
import { MsgType } from "./types/msg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card title="Auto Group" style={{ width: 400 }}>
          <Button type="primary" block onClick={this.onePressGroup}>
            一键 Group
          </Button>
        </Card>
      </div>
    );
  }

  onePressGroup() {
    ChromeMessage.send({
      type: MsgType.AUTO_GROUP,
      payload: 123,
    });
  }
}

export default App;
