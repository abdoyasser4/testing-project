import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
// import Navbar from "../Nav";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  height: 100vh;
`;

const Formlogin = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000019;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;
const Lable = styled.label`
  color: #333;
`;
const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #008787cc;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #023d3dcc;
  }
`;

const TogglePassword = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #007bff;
`;

const FormFooter = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #787878;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  text-align: right;
`;

const Err = styled.p`
  font-size: 10px;
  color: rgb(255, 0, 0);
  margin: 0px 0px;
`;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <Formlogin>
          <Title>Login</Title>
          <Lable>Email</Lable>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <Err>{errors.email.message}</Err>}
            <Lable>Password</Lable>
            <div style={{ position: "relative" }}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              <TogglePassword onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </TogglePassword>
            </div>
            {errors.password && <Err>{errors.password.message}</Err>}

            {errors.confirmPassword && (
              <Err>{errors.confirmPassword.message}</Err>
            )}

            <Button type="submit">Sign up</Button>
          </form>
          <FormFooter>
            <div onClick={{}}>Create an account</div>
            <div onClick={{}}>Forget your password?</div>
          </FormFooter>
        </Formlogin>
      </Container>
    </>
  );
}
