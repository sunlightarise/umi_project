import {Component} from 'react';
import {Layout, Menu, ConfigProvider, Button} from "antd";
import zhCn from 'antd/es/locale/zh_CN';
import router from "umi/router";
import MenuConfig from '../components/menuConfig';

const {Header,Content,Footer,Sider}=Layout;
const SubMenu=Menu.ItemGroup;




class BaseLayout extends Component{

  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig);
    this.setState({menuTreeNode});
  }

  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return(
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render(){

    const menuTreeNode=this.state.menuTreeNode;
    return (
      <ConfigProvider locale={zhCn}>
        <Layout style={{minHeight:'100vh',minWidth:'1522px'}}>

          {/*侧边栏  右侧菜单选项*/}
          <Sider collapsible onCollapse={this.onCollapse}>
              <div>
                {/*<img src={require("../assets/yay.jpg")} style={{padding: 0, margin: 0, height: 60, width: 200}}/>*/}
              </div>
              <Menu theme="dark" mode="inline">
                {menuTreeNode}
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















































