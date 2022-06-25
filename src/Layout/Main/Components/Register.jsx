import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
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

const Register = ({ onClose }) => {
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
    setErrorAxios(false);
    try {
      const response = await axios.post(
        "https://strapiecommerce-production.up.railway.app/api/auth/local/register",
        data
      );
      setUserState(response.data);
      toast({
        title: "Cuenta creada",
        description: "Bienvenido a AdaShop",
      });
      onClose();
    } catch (error) {
      setErrorAxios(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Box>
          <FormControl id="fullname" isRequired isInvalid={!!errors.username}>
            <FormLabel>Full name</FormLabel>
            <Input
              type="text"
              {...register("username", {
                required: "Este campo es requerido",
                minLength: {
                  value: 3,
                  message: "Minimo 3 caracteres",
                },
              })}
            />
            {errors.username && (
              <FormErrorMessage>{errors.username.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <FormControl id="email" isRequired isInvalid={!!errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Porfavor ingrese un email valido",
              },
            })}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          id="register-password"
          isRequired
          isInvalid={!!errors.password}
        >
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Este campo es requerido",
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
        <Stack spacing={10} pt={2}>
          {errorAxios && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>
                Ha habido un problema al crear tu cuenta. Comprueba que tu
                dirección de correo electrónico está escrita correctamente.
              </AlertDescription>
            </Alert>
          )}

          <Button
            loadingText="cargando..."
            variant="brand"
            type="submit"
            isLoading={isSubmitting}
            isDisabled={!isDirty}
          >
            Crear Cuenta
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
export default Register;
