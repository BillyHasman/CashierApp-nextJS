'use client'

import { useEffect, useState } from 'react'
import {
  Navbar,
  Hasil,
  ListCategories,
  Menus,
} from './components/componentsIndex'
import { API_URL } from './utils/constant'
import axios from 'axios'

export default function Home() {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(API_URL + 'products')
        setMenus(response.data)
        // console.log('Menus state updated:', response.data)
      } catch (error) {
        // console.error('Error fetching data', error)
      }
    }
    fetchMenus()
  }, [])

  // console.log('Current menus state:', menus)

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='w-full mx-4 mt-4 flex flex-row'>
        <ListCategories />
        <div className='w-full text-black text-2xl font-bold'>
          <h4>Daftar Produk</h4>
          <hr className='mt-3'></hr>
          <div>
            {menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
          </div>
        </div>
        <Hasil />
      </div>
    </div>
  )
}
