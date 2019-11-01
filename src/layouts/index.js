// import styles from './index.css';
//
// function BasicLayout(props) {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//       {props.children}
//     </div>
//   );
// }
//
// export default BasicLayout;

import React,{Component} from 'react';
import BaseLayout from './BaseLayout';
import Login from '../pages/login/Login';
import { Row,Col } from 'antd';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import NavLeft from '../components/NavLeft'
import styles from '../style/common.less'
//全局路由
//如何把pages下的子路由渲染到全局路由上

class BasicLayout extends Component{

  // componentDidUpdate(prevProps){
  //   if(this.props.location!==prevProps.location){
  //     window.scroll(0,0)
  //   }
  //
  // }

  render(){
    // console.log("path==",this.props.location.pathname)
    //   //  if(this.props.location.pathname!=='/login'){
    //   //     return  <Login/>
    //   //  }else{
    //   //      return <BaseLayout {...this.props}>{this.props.children}</BaseLayout>
    //   // }
    // return <BaseLayout {...this.props}>{this.props.children}</BaseLayout>
    return (
      <Row className={styles.container}>
        <Col span="4" className={styles.nav_left}>
          <NavLeft/>
        </Col>
        <Col span="20" className={styles.main}>
          <Header/>
          <Row className={styles.content}>
            {/* <Home/> */}
            {this.props.children}
          </Row>
          <Footer/>
        </Col>
      </Row>
    );
  }
}

export default BasicLayout;
































