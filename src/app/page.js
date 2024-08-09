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
import Swal from 'sweetalert2'

export default function Home() {
  const [menus, setMenus] = useState([])
  const [categorySelect, setCategorySelect] = useState('Makanan')
  const [carts, setCarts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuResponse = await axios.get(
          API_URL + 'products?category.nama=' + categorySelect
        )
        setMenus(menuResponse.data)
        // console.log('Menus state updated:', menuResponse.data)

        const cartsResponse = await axios.get(API_URL + 'keranjangs')
        setCarts(cartsResponse.data)
        // console.log('Carts state updated:', cartsResponse.data)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchData()
  }, [categorySelect])

  const changeCategory = (value) => {
    setCategorySelect(value)
    setMenus([])
  }

  const inputCart = async (value) => {
    try {
      // Lakukan GET request untuk memeriksa apakah produk sudah ada di keranjang
      const response = await axios.get(
        API_URL + 'keranjangs?product.id=' + value.id
      )
      // console.log('Response GET:', response.data)

      if (response.data.length === 0) {
        // Jika produk belum ada di keranjang, tambahkan sebagai item baru
        const keranjang = {
          product: value,
          jumlah: 1,
          total_harga: value.harga,
        }
        // console.log('Keranjang baru:', keranjang)

        try {
          const postResponse = await axios.post(
            API_URL + 'keranjangs',
            keranjang
          )
          setCarts([...carts, postResponse.data])
          // console.log('Response POST:', postResponse.data)
          Swal.fire({
            title: 'Sukses Masuk Keranjang',
            text: keranjang.product.nama + ' berhasil ditambahkan',
            timer: 1500,
            showCancelButton: false,
          })
        } catch (error) {
          console.log('Data tidak berhasil ditambahkan', error)
        }
      } else {
        // Jika produk sudah ada di keranjang, perbarui jumlah dan total harga
        const keranjang = {
          product: value,
          jumlah: response.data[0].jumlah + 1,
          total_harga: response.data[0].total_harga + value.harga,
        }
        // console.log('Keranjang diperbarui:', keranjang)

        try {
          const putResponse = await axios.put(
            API_URL + 'keranjangs/' + response.data[0].id,
            keranjang
          )
          setCarts(
            carts.map((cart) =>
              cart.id === putResponse.data.id ? putResponse.data : cart
            )
          )
          // console.log('Response PUT:', putResponse.data)
          Swal.fire({
            title: 'Sukses Masuk Keranjang',
            text: keranjang.product.nama + ' berhasil ditambahkan',
            icon: 'success',
            timer: 1500,
            showCancelButton: false,
            showConfirmButton: false,
          })
        } catch (error) {
          console.log('Error yaa', error)
        }
      }
    } catch (error) {
      console.log('Error yaa', error)
    }
  }

  // console.log('Current menus state:', menus)

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='w-full mx-4 mt-4 flex flex-row gap-4'>
        <ListCategories changeCategory={changeCategory} />
        <div className='w-auto text-black text-2xl font-bold mx-10'>
          <h4>
            Daftar Produk <span>{categorySelect}</span>
          </h4>
          <hr className='mt-3'></hr>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
            {menus &&
              menus.map((menu) => (
                <Menus key={menu.id} menu={menu} inputCart={inputCart} />
              ))}
          </div>
        </div>
        <Hasil keranjangs={carts} />
      </div>
    </div>
  )
}
