import React, { useState } from 'react';
import { MdContactPage } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { IoLogIn, IoStatsChart } from 'react-icons/io5';
import { GoHomeFill } from 'react-icons/go';
import { SiPowerpages } from 'react-icons/si';
import { BsInfoSquareFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo/logo.svg';

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-20 lg:w-60' : 'w-20'
        } fixed bg-white h-full pt-4 duration-300 text-black shadow-md`}
      >
        <div className='flex gap-x-4 items-center ml-5 mt-2'>
          <Image
            src={logo}
            height={100}
            width={100}
            priority={true}
            alt='Picture of the author'
          />
          {/* {open && (
            <h1
              className={`origin-left hidden lg:block font-medium text-xl duration-200 ${
                !open && 'scale-0'
              }`}
            >
              Logo
            </h1>
          )}
          <div
            className={`rounded-full cursor-pointer hidden lg:block ${
              open ? 'ml-14 p-3' : 'p-0.5 mr-1'
            }`}
            onClick={handleClick}
          >
            {open ? (
              <MdClose size={20} />
            ) : (
              <MdEast
                className='absolute -mt-3 w-5 h-5 rounded-md bg-white'
                size={16}
              />
            )}
          </div> */}
        </div>
        <nav className='h-[78%] mt-6 overflow-hidden'>
          <ul className='h-full pb-6 overflow-y-scroll'>
            <Link href='/dashboard'>
              <li
                className={`flex items-center pl-4 py-4 cursor-pointer text-sm my-1
                    ${
                      router.pathname === '/dashboard'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                        : 'text-black'
                    }
                  `}
              >
                <IoStatsChart
                  size={20}
                  className={`${open ? 'ml-3 lg:ml-0' : 'ml-3'}`}
                />
                {open && (
                  <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                    Dashboard
                  </p>
                )}
              </li>
            </Link>
            <Link href='/home'>
              <li
                className={`flex items-center pl-4 py-4 cursor-pointer text-sm my-1
                      ${
                        router.pathname === '/pages'
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                          : 'text-black'
                      }
                `}
              >
                <SiPowerpages
                  size={20}
                  className={`${open ? 'ml-3 lg:ml-0' : 'ml-3'}`}
                />
                {open && (
                  <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                    Pages
                  </p>
                )}
              </li>
            </Link>
            {(router.pathname === '/pages' ||
              router.pathname === '/home' ||
              router.pathname === '/about' ||
              router.pathname === '/team' ||
              router.pathname === '/contact') && (
              <>
                <Link href='/home'>
                  <li
                    className={`flex items-center pl-10 py-4 cursor-pointer text-sm my-1
                          ${
                            router.pathname === '/home'
                              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                              : 'text-black'
                          }
                        `}
                  >
                    <GoHomeFill
                      size={20}
                      className={`${open ? 'lg:ml-0' : 'ml-3'}`}
                    />
                    {open && (
                      <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                        Home
                      </p>
                    )}
                  </li>
                </Link>
                <Link href='/about'>
                  <li
                    className={`flex items-center pl-10 py-4 cursor-pointer text-sm my-1
                            ${
                              router.pathname === '/about'
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                                : 'text-black'
                            }
                          `}
                  >
                    <BsInfoSquareFill
                      size={20}
                      className={`${open ? 'lg:ml-0' : 'ml-3'}`}
                    />
                    {open && (
                      <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                        About
                      </p>
                    )}
                  </li>
                </Link>
                <Link href='/team'>
                  <li
                    className={`flex items-center pl-10 py-4 cursor-pointer text-sm my-1
                            ${
                              router.pathname === '/team'
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                                : 'text-black'
                            }
                          `}
                  >
                    <RiTeamFill
                      size={20}
                      className={`${open ? 'lg:ml-0' : 'ml-3'}`}
                    />

                    {open && (
                      <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                        Team
                      </p>
                    )}
                  </li>
                </Link>
                <Link href='/contact'>
                  <li
                    className={`flex items-center pl-10 py-4 cursor-pointer text-sm my-1
                            ${
                              router.pathname === '/contact'
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                                : 'text-black'
                            }
                          `}
                  >
                    <MdContactPage
                      size={20}
                      className={`${open ? 'lg:ml-0' : 'ml-3'}`}
                    />
                    {open && (
                      <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                        Contact
                      </p>
                    )}
                  </li>
                </Link>
              </>
            )}
            <Link href='/users'>
              <li
                className={`flex items-center pl-4 py-4 cursor-pointer text-sm my-1
                            ${
                              router.pathname === '/users'
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                                : 'text-black'
                            }
                          `}
              >
                <HiUsers
                  size={20}
                  className={`${open ? 'ml-3 lg:ml-0' : 'ml-3'}`}
                />
                {open && (
                  <p className='origin-left hidden lg:block duration-200 mt-1 pl-5 text-base'>
                    Users
                  </p>
                )}
              </li>
            </Link>
          </ul>
        </nav>
        <div
          className={`flex absolute bottom-0 bg-white ${
            open ? 'w-20 lg:w-60' : 'w-20'
          }`}
        >
          <Link href='/' onClick={handleLogOut}>
            <li className='flex items-center justify-center pl-4 cursor-pointer text-primary text-sm my-4'>
              <IoLogIn size={40} />
              {open && (
                <p className='origin-left hidden lg:block duration-200 mt-1 pl-2 text-base'>
                  Logout
                </p>
              )}
            </li>
          </Link>
        </div>
      </div>
      <div className={`${open ? 'w-20 lg:w-60' : 'w-20'}`} />
    </div>
  );
};

export default Navbar;
