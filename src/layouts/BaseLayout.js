import {Component} from 'react';
import {Layout,Menu,ConfigProvider} from "antd";
import zhCn from 'antd/es/locale/zh_CN';
const {Header,Content,Footer,Sider}=Layout;

class BaseLayout extends Component{


  render(){
    return (
      <ConfigProvider locale={zhCn}>
        <Layout style={{minHeight:'100vh',minWidth:'1522px'}}>


          {/*侧边栏  右侧菜单选项*/}
          <Sider collapsible onCollapse={this.onCollapse}>
              <div>
                {/*<img src={require("../assets/yay.jpg")} style={{padding: 0, margin: 0, height: 60, width: 200}}/>*/}
              </div>
              <Menu theme="dark" mode="inline">
                {}
              </Menu>
          </Sider>

          {/*右侧*/}
          <Layout>
            {/*标题部分*/}
              <Header style={{backgroundColor: '#fff'}}>
                <span>消息通知部分</span>
              </Header>
            {/*内容区域*/}
            <Layout style={{ padding: '24px 24px 0 24px' }}>
              <Content style={{ margin: '0 0px', backgroundColor: '#fff', padding: '10px' }}>
                {"就是这么厉害"}
              </Content>
              <Footer style={{ textAlign: 'center' }}>react开源项目</Footer>
            </Layout>
          </Layout>

        </Layout>
      </ConfigProvider>
    )
  }
}

export default BaseLayout;















































