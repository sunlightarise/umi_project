import React from 'react';
import {Row,Col} from 'antd'
import styles from './index.less'
import {connect} from "dva";

class Header extends React.Component{

  state={
    userName:'张三'
  }

  componentWillMount(){

  }

  render(){
    const {menuName,menuType}=this.props;

    return (
      <div className={styles.header}>
        <Row className={styles.header_top}>
            {
              menuType?
                <Col span="6" className={styles.logo}>
                  <img src="../../assets/logo-ant.svg" alt=""/>
                  <span>React 开源项目</span>
                </Col>:''
            }
            <Col span={menuType?18:24}>
              <span>欢迎,{this.state.userName}</span>
              <a href="#">退出</a>
            </Col>
        </Row>
        {
          menuType?'':
            <Row className={styles.breadcrumb}>
              <Col span={4} className={styles.breadcrumb_title}>
                {menuName||"首页"}
              </Col>
              <Col span={20} className={styles.weather}>
                <span className={styles.date}>时间</span>
                <span className={styles.weather_img}>天气图片</span>
                <span className={styles.weather_detail}>具体信息</span>
              </Col>
            </Row>
        }
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    menuName:state.menuTreeNode
  }
}

export default connect(mapStateToProps)(Header);




































