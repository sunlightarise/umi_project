import React,{Component} from 'react';
import {connect} from 'dva';
import {Button,Col,Form,Input,Row,Panel,Grid} from 'antd';

const FormItem=Form.Item;

@connect(({tenant,loading})=>({
  tenant,
  loading:loading.models.tenant,
}))
@Form.create()
class Tenant extends Component{

  render(){
    const code='tenant';

    const {form,loading,tenant:{data},}=this.props;

    const _columns=[
      {
        title: '租户编号',
        dataIndex: 'tenantCode',
      },
      {
        title: '租户名称',
        dataIndex: 'tenantName',
      },
      {
        title: '联系人',
        dataIndex: 'linkman',
      },
      {
        title: '联系电话',
        dataIndex: 'contactNumber',
      },
      {
        title: '联系地址',
        dataIndex: 'address',
      },
    ];

    return(
      <div>
        终于登陆成功了
      </div>
    )
  }
}




























