import React from 'react';
import { Typography } from 'antd';


const { Title } = Typography;

const TitleComponent = props => (
  <Title {...props}>
    <span dangerouslySetInnerHTML={{ __html: props.title }} />
  </Title>
);

export default TitleComponent;
