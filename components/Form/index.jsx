import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import * as S from "./styles";

const Form = () => {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  function onSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        result => {
          alert("Email enviado com sucesso!");
        },
        error => {
          alert("Não foi possível enviar o email. Confira os campos acima!");
        }
      );
  }

  return (
    <S.FormContainer ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <S.FormBigText>This is a text</S.FormBigText>
      <S.FormSmallText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        nibh nisl. Maecenas sit amet sapien condimentum, varius arcu vitae,
        scelerisque risus. Pellentesque eu dapibus.
      </S.FormSmallText>
      <S.FormInput
        placeholder="Digite seu nome"
        type="text"
        {...register("name", { required: true, maxLength: 80 })}
      />
      {errors.name && <S.ErrorText>Insira o seu nome</S.ErrorText>}
      <S.FormInput
        placeholder="Digite seu e-mail"
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <S.ErrorText>Insira um e-mail válido</S.ErrorText>}
      <Controller
        control={control}
        name="phone"
        rules={{ required: true, minLenght: 14, maxLength: 15 }}
        render={({ field }) => (
          <S.CustomFormInput
            mask="(99) 99999-9999"
            placeholder="Digite seu celular"
            {...field}
          />
        )}
      />
      {errors.phone && (
        <S.ErrorText>Insira um número válido de celular</S.ErrorText>
      )}
      <S.FormButton type="submit">Clique aqui</S.FormButton>
    </S.FormContainer>
  );
};

export default Form;
