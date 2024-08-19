import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

export function FAQ() {
  return (
    <Accordion
      className='flex w-full flex-col'
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      <AccordionItem value='getting-started' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              What is Invisibuzz?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Invisibuzz is a platform that allows you to receive anonymous messages from anyone who has your unique profile link.
            It’s a way to get honest feedback, compliments, or thoughts from others without them revealing their identity.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              How do i sign up for Invisibuzz?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Signing up is easy! Just visit our homepage, click on the “Login” button, and fill out the short registration form.
            Once registered, you’ll receive a unique profile link to share with others.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-features' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              Is it really anonymous?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Yes, all messages sent through Invisibuzz are completely anonymous.
            The sender’s identity is never revealed to the recipient.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-support' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              How can I share my Invisibuzz profile link?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            You can share your profile link anywhere you like—on social media, via email, in text messages, or even in your bio on other platforms.
            Anyone with the link can send you a message anonymously.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
