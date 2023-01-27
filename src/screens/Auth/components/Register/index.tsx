import { useEffect, useState } from "react";

import { Button, TextInput } from "react-native-paper";

import { useToast } from "react-native-toast-notifications";

import { useFormik } from "formik";

import * as Yup from "yup";

import { userRegister } from "@services/user";

import { Content, Box, ButtonCustom } from "./styles";

type RegisterProps = {
  changeScreen: () => void;
};

export function Register({ changeScreen }: RegisterProps) {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData: any) => {
      setIsLoading(true);
      try {
        await userRegister(formData).then((response) => {
          console.log(response.data);
          changeScreen();
        });
      } catch (error) {
        setIsLoading(false);
        toast.show("Houve um erro ao salvar o registro.", {
          type: "danger",
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
          label="E-mail"
          onChangeText={(value) => formik.setFieldValue("email", value)}
          value={formik.values.email}
          error={Boolean(formik.errors.email)}
        />
      </Box>
      <Box>
        <TextInput
          label="Usuário"
          onChangeText={(value) => formik.setFieldValue("username", value)}
          value={formik.values.username}
          error={Boolean(formik.errors.username)}
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
        <TextInput
          label="Confirmar senha"
          secureTextEntry
          onChangeText={(value) =>
            formik.setFieldValue("repeatPassword", value)
          }
          value={formik.values.repeatPassword}
          error={Boolean(formik.errors.repeatPassword)}
        />
      </Box>
      <Box>
        <ButtonCustom
          loading={isLoading}
          mode="contained"
          onPress={() => formik.handleSubmit()}
        >
          Enviar
        </ButtonCustom>
      </Box>
      <Box>
        <Button mode="text" onPress={changeScreen}>
          Já tenho conta
        </Button>
      </Box>
    </Content>
  );
}

function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    repeatPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password")]),
  };
}
