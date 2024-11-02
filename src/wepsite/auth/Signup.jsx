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

const FormSignup = styled.div`
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
  padding: 10px 0;
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
  right: 40px;
  top: 60%;
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
  text-align: right;
`;

const Err = styled.p`
  font-size: 10px;
  color: rgb(255, 0, 0);
  margin: 0px 0px;
`;
export default function SignUpForm() {
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
        <FormSignup>
          <Title>Sign up</Title>
          <Lable>Email</Lable>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <Err>{errors.email.message}</Err>}

            <div style={{ position: "relative" }}>
              <Lable>Password</Lable>
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

            <div style={{ position: "relative" }}>
              <Lable>Confirm Password</Lable>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
              />
              <TogglePassword onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </TogglePassword>
            </div>
            {errors.confirmPassword && (
              <Err>{errors.confirmPassword.message}</Err>
            )}

            <Button type="submit">Sign up</Button>
          </form>
          <FormFooter onClick={{}}>Already have an account?</FormFooter>
        </FormSignup>
      </Container>
    </>
  );
}
