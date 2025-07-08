import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import { setUser, type TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const defaultValues = {
    id: "2025030001",
    password: "student123",
  };
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log("Login data:", data);
    const toastId = toast.loading("Logging in...");
    try {
      const response = await login(data).unwrap();
      const user = verifyToken(response.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: response.data.accessToken }));
      console.log("Login response:", response);
      console.log("Login successful:", response);
      toast.success("Login successful!");
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="text" name="password" label="Password:" />
        <Button htmlType="submit" type="primary" size="large" block>
          Login
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
