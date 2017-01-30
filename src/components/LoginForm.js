import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginFrom extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="your@email.com"
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text: text })}
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginFrom;
