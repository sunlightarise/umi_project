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

//全局样式表

class BasicLayout extends Component{
  render(){
    console.log("path==",this.props.location.pathname)
      if(this.props.location.pathname!=='/login'){
         return  <Login/>
      }else{
        return <BaseLayout {...this.props}>{this.props.children}</BaseLayout>
      }
  }
}

export default BasicLayout;
































