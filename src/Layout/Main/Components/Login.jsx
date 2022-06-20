import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import userState from "../../../shared/user";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const setUserState = useSetRecoilState(userState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.post(
      "https://strapiecommerce-production.up.railway.app/api/auth/local",
      data
    );
    setUserState(response.data);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl id="identifier">
          <FormLabel>Email address</FormLabel>
          <Input type="email" {...register("identifier")} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={10}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
export default Login;
