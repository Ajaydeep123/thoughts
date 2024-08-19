'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';
import XIcon from './icons/x';
import GitHubIcon from './icons/github';
import ThemeSwitch from './theme-switch';
function Navbar() {
  const { data: session, status } = useSession();
  const user: User = session?.user;

  return (
    <header className='relative top-0 z-10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <a href='/' className='relative flex items-center'>
          <div className='text-zinc-950 dark:text-white'>invisibuzz</div>
          <span className='mb-4 ml-2 select-none rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-50'>
            beta
          </span>
        </a>
        <nav className='flex items-center gap-2'>
          <a
            href='https://x.com/AjaydeepRajput'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden sm:inline-flex h-9 w-9 items-center justify-center'
          >
            <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>
          <a
            href='https://github.com/Ajaydeep123/thoughts'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden sm:inline-flex h-9 w-9 items-center justify-center'
          >
            <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>

          {status === 'loading' ? (
            <div className="text-zinc-950 dark:text-white">Loading...</div>
          ) : session ? (
            <>
              <span className="mr-4">
                Welcome, {user.username || user.email}
              </span>
              <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 text-zinc-950" variant='outline'>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="w-full  md:w-auto" variant={'ghost'}>Login</Button>
            </Link>
          )}

          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}


export default Navbar;