import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../services/api/requestApi";
import { setToken} from "../../services/localStorage";

type Inputs = {
  password: string;
  email: string;
};

const Login = ({ setTab, setOpen }: any) => {
  const changeTab = () => {
    setTab("registration");
  };

  const closeModal = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const data: Inputs = {
    password: password,
    email: email,
  };

  const onSubmit = () => {
    requestApi.post(`/login`, data).then((response) => {
      if (response.status === 200) {
        setToken(response.data.token);
        navigate("/profile");
        window.location.reload();
      } else {
        alert("try again !!");
      }
    });
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        className="grid gap-3 mt-4"
      >
        <h1 className="text-center font-bold text-lg">Login</h1>
        <i
          className="absolute top-2 right-5 cursor-pointer text-lg"
          onClick={closeModal}
        >
          <CloseOutlined />
        </i>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your User Email!" }]}
        >
          <Input
            type={"email"}
            showCount={false}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
          <Button type="primary" ghost={true} onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p className="text-center">
        Don't have an account?{" "}
        <b className="cursor-pointer" onClick={changeTab}>
          Registration{" "}
        </b>
      </p>
    </>
  );
};

export default Login;
