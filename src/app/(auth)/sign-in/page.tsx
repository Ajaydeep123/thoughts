'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { signInSchema } from '@/schemas/signInSchema';
import { AnimatedTooltipPreview } from "@/components/Tooltip";



export default function SignInForm(){
    const router = useRouter();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues:{
            identifier: '',
            password: '',
        }
    });

    const {toast} = useToast();

    const onSubmit = async (data: z.infer<typeof signInSchema>) => {

        const result = await signIn('credentials',{
            redirect: false,
            identifier: data.identifier,
            password: data.password,
        });
        
        if(result?.error){
            if(result.error === 'CredentialsSignin'){
                toast({
                    title: 'Login Failed',
                    description: 'Incorrect username or password',
                    variant: 'destructive',
                });
            }else{
                toast({
                    title: 'Error',
                    description: result?.error,
                    variant: 'destructive',
                });
            }
        }
        if(result?.url){
            router.replace('/dashboard');
        }
    };

    return (
      <>
      <AuthHeaderUI/>
      <div className="px-6 py-4 pb-20">
      <div className="flex h-full space-x-4 items-center justify-center pt-32 bg-white dark:bg-zinc-950">
      <div className="hidden sm:inline-flex w-full flex-col max-w-md p-8 space-y-8 ">
      <div className='flex w-full max-w-lg flex-col items-center justify-center text-center'>
            <h4 className='relative mb-4 text-xl font-medium text-zinc-950 dark:text-zinc-50'>
              Join Invisibuzz Today!
            </h4>
            <p className='text-center text-sm text-zinc-600 dark:text-zinc-200'>
            Ajaydeep and others are already receiving anonymous messages.
            </p>
      </div>
      <AnimatedTooltipPreview/>
      </div>  
      <div className="hidden sm:inline-flex w-px bg-slate-300 h-72" /> 
     <div className="w-full  max-w-md p-8 space-y-8 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  ">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full' type="submit">Sign In</Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
            Not a member yet?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
    )
}


function AuthHeaderUI(){
  return (
    <>
      <header className='relative top-0 z-10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <a href='/' className='relative flex items-center'>
          <div className='text-zinc-950 dark:text-white'>invisibuzz</div>
          <span className='mb-4 ml-2 select-none rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-50'>
            beta
          </span>
        </a>
        <Link href='/'>
        <Button className="bg-zinc-800  text-zinc-50 px-2 py-0.5 hover:bg-zinc-900 hover:text-white select-none">
          Close
        </Button>
        </Link>
      </div>
    </header>
    </>
  )
}
