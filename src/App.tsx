import React, { useEffect, useState } from 'react';
import './App.scss';
// import { useTranslation } from 'react-i18next';
import LoginForm from './pages/LoginForm';
import GetRegister from './pages/GetRegister';
import CreateForm from './pages/CreateForm';
import { Anchor, Col, Row } from 'antd';
import './pages/pages.scss';

function App() {
  // const { t } = useTranslation();
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div className="App">
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            className="pages__container pages__part-one"
          >
            <LoginForm />
          </div>
          <div id="part-2" className="pages__container pages__part-two">
            <CreateForm />
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            <GetRegister />
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              { key: 'part-1', href: '#part-1', title: 'Part 1' },
              { key: 'part-2', href: '#part-2', title: 'Create Form' },
              { key: 'part-3', href: '#part-3', title: 'Part 3' },
            ]}
          />
        </Col>
      </Row>
      {/* <LoginForm />
        <GetRegister />
        <CreateForm /> */}
    </div>
  );
}

export default App;
