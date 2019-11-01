import React from 'react';
import {Menu} from 'antd';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import MenuConfig from '../menuConfig';
import styles from './index.less'
const SubMenu=Menu.SubMenu;
class NavLeft extends React.Component{
  state={
    currentKey:''
  }

  //菜单点击
  handleClick=({item,key})=>{
    if(key==this.state.currentKey){
      return false;
    }

    const {dispatch}=this.props;
    dispatch({
      type:'',
      payload:''
    });
    this.setState({
      currentKey:key
    })
  }

  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  //菜单渲染
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return(
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  homeHandleClick = () => {
    const { dispatch } = this.props;
    //dispatch(switchMenu('首页'));
    alert("点击home了")
    this.setState({
      currentKey: ""
    });
  };

  render(){
    return (
      <div>
        <NavLink to="/home" onClick={this.homeHandleClick}>
          <div className={styles.logo}>
            <img src="../../assets/logo-ant.svg" alt=""/>
            <h1>React开源项目</h1>
          </div>
        </NavLink>
        <Menu
           onClick={this.handleClick}
           theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
export default connect()(NavLeft);


























