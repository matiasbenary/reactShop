import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import userState from "../../../shared/user";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorAxios, setErrorAxios] = useState(false);
  const setUserState = useSetRecoilState(userState);
  const toast = useToast({
    variant: "top-accent",
    status: "success",
    isClosable: true,
    duration: 3000,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://strapiecommerce-production.up.railway.app/api/auth/local",
        data
      );
      setUserState(response.data);
      toast({
        description: "Sesion iniciada correctamente",
      });
      onClose();
    } catch (error) {
      setErrorAxios(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl id="identifier" isRequired isInvalid={!!errors.identifier}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            {...register("identifier", {
              required: "Este campo es requerido",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Porfavor ingrese un email valido",
              },
            })}
          />
          {errors.identifier && (
            <FormErrorMessage>{errors.identifier.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="password" isRequired isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "El campo es requerido",
                minLength: {
                  value: 6,
                  message: "Minimo 8 caracteres",
                },
              })}
              autoComplete="off"
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
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <Stack spacing={10}>
          {errorAxios && (
            <Alert status="error">
              <AlertDescription>
                Se ha producido un problema al iniciar sesión. Comprueba el
                correo electrónico y la contraseña o crea una cuenta.
              </AlertDescription>
            </Alert>
          )}
          <Button
            variant="brand"
            type="submit"
            isLoading={isSubmitting}
            isDisabled={!isDirty}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
export default Login;
