import React from 'react';
import { Row, Col } from 'antd';
import './login.scss';
import TitleComponent from '../../components/TitleComponent/inde';
import { ReactComponent as ReactLogo } from '../../images/logo.svg';
// const Logo = require('../../images/logo.svg');
const LoginForm = props => {
  return (
    <div className="phub__login">
      <Row className="h-100">
        <Col span={12} className="phub__login--left">
          <div className="login__card">
            <ReactLogo className="phub-logo" />
            <TitleComponent
              level={2}
              title="Welcome to"
              className=" display-2 white"
            />
            <TitleComponent
              level={1}
              title="Project HUB"
              className="display-1"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Quisque ac ipsum non ex sollicitudin pulvinar ac quis velit.</p>
          </div>
        </Col>
        <Col span={12} className="phub__login--right">
          login-right
        </Col>
      </Row>
    </div>
  )
}

export default LoginForm;
