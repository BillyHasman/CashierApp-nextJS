import { useState } from 'react'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav className='bg-gray-800 border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Cashier App
          </span>
        </a>
        <div className='flex md:order-2'>
          <button
            type='button'
            data-collapse-toggle='navbar-search'
            aria-controls='navbar-search'
            aria-expanded='false'
            className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1'
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
            <span className='sr-only'>Search</span>
          </button>
          <div className='relative hidden md:block'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search icon</span>
            </div>
            <input
              type='text'
              id='search-navbar'
              className='block w-full p-2 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-white-500 focus:border-white-500 '
              placeholder='Search...'
            />
          </div>
          <button
            data-collapse-toggle='navbar-search'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-search'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-search'
        >
          <div className='relative mt-3 md:hidden'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='text'
              id='search-navbar'
              className='block w-full p-2 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-white-500 focus:border-white-500 '
              placeholder='Search...'
            />
          </div>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
            <li>
              <a
                href='#'
                className='block py-2 px-3 focus:text-white text-gray-400 bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <button
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-gray-400 focus:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 md:w-auto'
                onClick={toggleDropdown}
              >
                Dropdown{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {dropdownOpen && (
                <div
                  id='dropdownNavbar'
                  className='absolute z-10 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 '
                >
                  <ul
                    className='py-2 text-sm text-gray-700 '
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 '
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 '
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 '
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className='py-1'>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-400 focus:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 '
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0'
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
