import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,icon } from '@ant-design/icons';
import Logo from '../../image/3pllogo.png';
import {stoage_locationsRoutes} from '../../routers/index';
import {withRouter} from 'react-router-dom';


const routes=stoage_locationsRoutes.filter(r=>r.isShow);

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function Index(props) {
    return (
        <Layout>
        <Header className="header" style={{backgroundColor:'white'}}>
          <div className="logo" >
              <img src={Logo} alt='logo' style={{width:220}}/>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {routes.map(r=>{
                  return <Menu.Item key={r.path} onClick={p=>props.history.push(p.key)}>
                     
                      {r.title}
                      </Menu.Item>
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default withRouter(Index);
