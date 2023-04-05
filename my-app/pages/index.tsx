import { Layout } from '@/layout/Layout'
import Link from 'next/link'

import { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().min(1, { message: '必須項目です' }).email('メールアドレスの形式で入力してください'),
  password: z.string().min(1, { message: '必須項目です' }),
});

type Schema = z.infer<typeof schema>;

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm<Schema>({ 
    resolver: zodResolver(schema)
  });
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: Schema) => {
    try {
      const response = await axios.post('/api/token/', data);
      console.log(data)
      // localStorage.setItem('accessToken', response.data.access);
      // localStorage.setItem('refreshToken', response.data.refresh);
      // window.location.reload();
    } catch (error: any) {
      console.log(error?.message)
      setErrorMessage(error?.message);
    }
  };
  
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ログイン</h1>
        <legend>
          Email: <input {...register("email")} type="text" placeholder="example@gmail.com" />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </legend>

        <legend>
          Paaword: <input {...register("password")} type="password" placeholder="******" />
          {errors.password?.message && <p>{errors.password?.message}</p>}
        </legend>

        <button type="submit">ログイン</button>

        {errorMessage && <p>{ errorMessage }</p> }

        <div>
          <Link href={'/signup'}>アカウント新規作成</Link>
        </div>
      </form>
    </Layout>
  )
}
