import {Card, Form, Input, Checkbox, Button} from "antd";
import './index.scss'
import logo from "@/assets/logo.png"

function Login() {

    const onFinish = function (values) {
        console.log(values)
    }

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                <Form className="login-form" onFinish={onFinish}>
                    <Form.Item name="mobile" rules={[{required: true, message: '请输入手机号'}, {
                        pattern: /^1[3-9]\d{9}$/,
                        message: '输入的手机号格式不对'
                    }]}>
                        <Input size="large" placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item name="password"  rules={[{required: true, message: '请输入密码'}]}>
                        <Input  size="large" placeholder="请输入密码"/>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox className="login-checkbox-label" defaultChecked="true">
                            我已阅读并同意服务
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;