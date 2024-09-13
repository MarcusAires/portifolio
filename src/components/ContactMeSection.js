import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName:'',
      email:'',
      type:'Me contrate',
      comment:'',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Campo Obrigatório'),
      email: Yup.string().email('Endereço de e-mail inválido').required('campo obrigatório'),
      type: Yup.string().optional(),
      comment: Yup.string().min(25, 'Precisa conter ao menos 25 caracteres').required('campo obrigatório')
    }),
    onSubmit: async(values,{resetForm}) => {
      await submit(null,values);
    },
  });
  useEffect(() => {
      if(response?.type === 'success'){
        onOpen({
          title: "Formulário enviado",
          description: `Obrigado, ${formik.values.firstName}. Seu formulário foi enviado com sucesso!`,
          status: "success",
        });
        formik.resetForm();
      }else if (response?.type==='error'){
        onOpen({
          title: "Erro",
          description: response.message,
          status: "error",
        });
      }
  }, [response, formik.values.firstName, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Entre em contato
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Nome</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Endereço de e-mail</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Tipo de serviço</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value="hireMe">Projeto freelance</option>
                  <option value="openSource">
                    Consultoria
                  </option>
                  <option value="other">Outro</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Escreva sua mensagem</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
