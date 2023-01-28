import { useEffect, useState } from "react";

import { Button, TextInput } from "react-native-paper";

import { useToast } from "react-native-toast-notifications";

import { useFormik } from "formik";

import * as Yup from "yup";

import { userLogin } from "@services/user";

import { Content, Box, ButtonCustom } from "./styles";

type LoginProps = {
  changeScreen: () => void;
};

export function Login({ changeScreen }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData: any) => {
      setIsLoading(true);
      try {
        await userLogin(formData).then((response) => {
          console.log(response.data);
        });
      } catch (error) {
        setIsLoading(false);
        toast.show("Login/Usuário inválido.", {
          type: "warning",
          placement: "top",
          duration: 4000,
          animationType: "slide-in",
        });
        console.log(error);
      }
    },
  });

  return (
    <Content>
      <Box>
        <TextInput
          label="E-mail/Usuário"
          onChangeText={(value) => formik.setFieldValue("identifier", value)}
          value={formik.values.identifier}
          error={Boolean(formik.errors.identifier)}
        />
      </Box>

      <Box>
        <TextInput
          label="Senha"
          secureTextEntry
          onChangeText={(value) => formik.setFieldValue("password", value)}
          value={formik.values.password}
          error={Boolean(formik.errors.password)}
        />
      </Box>

      <Box>
        <ButtonCustom
          loading={isLoading}
          mode="contained"
          onPress={() => formik.handleSubmit()}
        >
          Acessar
        </ButtonCustom>
      </Box>
      <Box>
        <Button mode="text" onPress={changeScreen}>
          Ainda não tem conta? Registre-se
        </Button>
      </Box>
    </Content>
  );
}

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().required(),
    password: Yup.string().required(),
  };
}
