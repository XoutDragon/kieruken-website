import Image from 'next/image';
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserCircleIcon,
  MailIcon,
  DesktopComputerIcon,
} from '@heroicons/react/solid';
import { Popover } from '@headlessui/react';
import { useState } from 'react';

export default function Header() {
  return (
    <nav className='relative flex justify-between w-full mt-5'>
      <div className='ml-5 dark:invert'>
        <a href='/#'>
          <Image
            src='/images/logo.png'
            alt='Kieruken Logo'
            width={200}
            height={60}
          />
        </a>
      </div>
      <div className='mt-4 mr-5 sm:mr-10'>
        <Popover className=''>
          {({ open }) => (
            <>
              <Popover.Button className=''>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </Popover.Button>
              <Popover.Overlay className='fixed inset-0 bg-black opacity-10' />
              {open && (
                <div className=''>
                  <Popover.Panel
                    static
                    className='fixed z-10 w-full px-4 ml-0 -mt-12 transform -translate-x-1/2 bg-white rounded-md dark:bg-black min-h-72 first-line:px-0 left-1/2'
                  >
                    {({ close }) => (
                      <div className=''>
                        <div className='flex justify-between'>
                          <div className='dark:invert'>
                            <Image
                              src='/images/logo.png'
                              alt='Kieruken Logo'
                              width={200}
                              height={60}
                            />
                          </div>
                          <button
                            className=''
                            onClick={async () => {
                              close();
                            }}
                          >
                            <XIcon className='w-6 h-6' aria-hidden='true' />
                          </button>
                        </div>
                        <ul className='w-full text-lg font-medium text-center'>
                          <li className=''>
                            <a
                              href='#'
                              className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse outline-t-1 outline-blue-500'
                            >
                              <HomeIcon className='w-5 h-5 mt-1' />
                              <span className='ml-2'>Home</span>
                            </a>
                            <a
                              href='#'
                              className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse outline-t-1 outline-blue-500'
                            >
                              <DesktopComputerIcon className='w-5 h-5 mt-1' />
                              <span className='ml-2'>Projects</span>
                            </a>
                            <a
                              href='#'
                              className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse outline-t-1 outline-blue-500'
                            >
                              <UserCircleIcon className='w-5 h-5 mt-1' />
                              <span className='ml-2'>About Us</span>
                            </a>
                            <a
                              href='#'
                              className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse outline-t-1 outline-blue-500'
                            >
                              <MailIcon className='w-5 h-5 mt-1' />
                              <span className='ml-2'>Contact Us</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </Popover.Panel>
                </div>
              )}
            </>
          )}
        </Popover>
      </div>
    </nav>
  );
}
