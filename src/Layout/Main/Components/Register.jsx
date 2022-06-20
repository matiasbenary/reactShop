import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
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

const Register = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const setUserState = useSetRecoilState(userState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.post(
      "https://strapiecommerce-production.up.railway.app/api/auth/local/register",
      data
    );
    setUserState(response.data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Box>
          <FormControl id="fullname" isRequired>
            <FormLabel>Full name</FormLabel>
            <Input type="text" {...register("username")} />
          </FormControl>
        </Box>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" {...register("email")} />
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
        <Stack spacing={10} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
          >
            Sign up
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
export default Register;
