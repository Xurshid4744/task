import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import requestApi from "../../services/api/requestApi";
import { setUser } from "../../services/localStorage";

type Inputs = {
  password: string;
  email: string;
};
const Registration = ({ setTab, setOpen }: any) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const data: Inputs = {
    password: password,
    email: email,
  };

  const changeTab = () => {
    setTab("login");
  };

  const onSubmit = () => {
    requestApi.post(`/register`, data).then((response) => {
      if (response.status === 200) {
        console.log(response.data.id);
        requestApi
          .get(`/users/${response.data.id}`)
          .then((res) => setUser(res.data.data));

        setTab("login");
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
        <h1 className="text-center font-bold text-lg">Registration</h1>
        <i
          className="absolute top-2 right-5 cursor-pointer text-lg"
          onClick={() => setOpen(false)}
        >
          <CloseOutlined />
        </i>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your first Email!" },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
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
        Do you have an account?{" "}
        <b className="cursor-pointer" onClick={changeTab}>
          {" "}
          Login{" "}
        </b>
      </p>
    </>
  );
};

export default Registration;
