"use client"
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit = (data) => { 
      fetch('/api/comparePasswords', {
        method: 'POST',
        body: JSON.stringify({
          password: data.password
        })
      }).then((res) => {
        if (res.ok) {
          alert('Correct password!')
          router.push('/login')
        } else {
          alert('Incorrect password!')
        }
      })
    }
  
    return (
      <div className="h-screen w-full flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div className="p-2 flex flex-col space-y-2">
            <label  class="Password-Text" htmlFor="password">Password</label>
            <input class="Input" {...register("password", { required: true })} className="border border-gray-300 rounded-md dark:text-black" />
          </div>

          {errors.password && <span>This field is required</span>}

          <input  type="submit" class="Button"/>
        </form>
      </div>
    )
}