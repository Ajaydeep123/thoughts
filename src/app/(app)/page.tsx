'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Mail,Check, PhoneCall  } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';
import { FAQ } from '@/components/FAQ';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

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
          <span className='mt-2 text-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-600 dark:from-violet-400 dark:to-sky-100'>
            New updates soon
          </span>
          <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full max-w-lg md:max-w-xl pt-20 "
          >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index}>
                <Card className='bg-white dark:bg-zinc-950'>
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
        <section >
          <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                <div className="flex gap-4 flex-col flex-1">
                  <div>
                    <Badge>AI </Badge>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                      AI Suggested Messages
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-zinc-600 dark:text-zinc-200 text-left">
                      Get AI powered short and interesting message suggestions in a click of button.
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
                  <Image
                    src="/ai.png"
                    alt='AI suggestions image'
                    width={3600}
                    height={1972}
                    objectFit='fill'
                    layout='responsive'
                    className='rounded-md'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>

        </section>
        <section >
          <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                <div className="flex gap-4 flex-col flex-1">
                  <div>
                    <Badge>Anonymous </Badge>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                      True Anonymity
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-zinc-600 dark:text-zinc-200 text-left">
                      No names, no worries-just pure honesty.
                      Engage in honest communication without any fear of judgement or consequences.
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
                  <Image
                    src="/anony.png"
                    alt='AI suggestions image'
                    width={3600}
                    height={1972}
                    objectFit='fill'
                    layout='responsive'
                    className='rounded-md'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className='flex h-screen flex-col items-center justify-center '>
          <div className="w-full py-20 lg:py-30">
              <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                  <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <div className="flex gap-2 flex-col">
                      <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                        Frequently asked questions
                      </h4>
                    </div>
                    <div>
                    <Link href="mailto:ajaydeep.dev@gmail.com">
                      <Button className="gap-4 dark:bg-zinc-50">
                        Any questions? Reach out <PhoneCall className="w-4 h-4" />
                      </Button>
                    </Link>
                    </div>
                  </div>

                  <div className="max-w-3xl py-5 w-full mx-auto">
                    <FAQ />
                  </div>
                </div>
              </div>
            </div>
        </section>
      <footer className="text-center py-5 sm:p-6 text-zinc-950 dark:text-zinc-50">
        © 2023 Invisibuzz. All rights reserved.
      </footer>
      </div>
    </>
  )
}

