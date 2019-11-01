import {Component} from 'react';
import router from 'umi/router';
import styles from './Login.css';
import {Checkbox,Alert,Button,Form,Input,Icon} from 'antd';

const FormItem=Form.Item;

@Form.create()
class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      isLogging:false
    }
  }

  handleSubmit=()=>{

  }

  render(){

    const {getFieldDecorator}=this.props.form;
    const {isLoading}=this.state;

    return(
     <Form onSubmit={this.handleSubmit} className={styles.login_form}>
       <FormItem>
         {getFieldDecorator('username',{
           rules:[{required:true,message:'请输入姓名'}],
         })(
           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}  />} placeholder="Username" />
         )}
       </FormItem>
       <FormItem>
         {getFieldDecorator('password',{
           rules:[{required:true,message:'请输入密码'}],
         })(
           <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}  />} type="password" placeholder="Password" />
         )}
       </FormItem>
       <FormItem>
         {getFieldDecorator('remember',{
           valuePropName:'checked',
           initialValue:true,
         })(
           <Checkbox>Remember me</Checkbox>
         )}
         <a className={styles.login_form_forgot} href="">Forgot password</a>
         <Button type="primary" htmlType="submit" className={styles.login_form_button}
                 loading={isLoading ? true : false}>
           {isLoading ? 'Loging' : 'Login'}
         </Button>
         Or <a href="">register now!</a>
       </FormItem>
     </Form>
    )
  }

}

export default Login;













