'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Mail } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      {/* Main content */}
      <MyHome/>
      {/* Carousel for Messages */}

    </>
  );
}


function MyHome() {
  return (
    <>
      <div className='px-6 py-4 pb-20 '>
        {/* Hero */}
        <section className='flex h-full flex-col items-center justify-center pt-20'>
          <div className='flex w-full max-w-lg flex-col items-center justify-center text-center'>
            <h1 className='relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50'>
              Connect Anonymously, Share Freely
            </h1>
            <p className='text-center text-zinc-600 dark:text-zinc-200'>
              Discover the power of honest feedback and genuine connections,
              all while staying anonymous. 
            </p>
          </div>
          <div className='flex items-center space-x-4 py-6'>
            <Link href='/sign-in'>
            <Button>
              Get Started Now
              <ChevronRight className='ml-1.5 h-4 w-4 fill-white dark:fill-zinc-950'/>
            </Button>
            </Link>
          </div>
          <span className='mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400'>
            New updates soon
          </span>
          <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full max-w-lg md:max-w-xl pt-20 "
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-zinc-950 dark:text-zinc-50'>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p className='text-zinc-950 dark:text-zinc-50'>{message.content}</p>
                      <p className="text-xs text-zinc-950 dark:text-zinc-50">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </section>
      </div>
    </>
  )
}