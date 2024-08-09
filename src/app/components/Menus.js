import React from 'react'

import { formatCurrency } from '../utils/helpers'

export default function Menus({ menu, inputCart }) {
  // console.log('isi menu:', menu)

  const imageUrl = `assets/images/${menu.category.nama.toLowerCase()}/${
    menu.gambar
  }`

  return (
    // <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg'>
    //   <img
    //     src={imageUrl}
    //     alt={menu.nama}
    //     className='w-full h-48 object-cover mb-4'
    //   />
    //   <h5 className='mb-2 text-2xl font-normal tracking-tight text-gray-900 '>
    //     {menu.nama} <span className='font-bold'>({menu.kode})</span>
    //   </h5>
    //   <p className='mb-3 font-normal text-gray-700 '>
    //     {formatCurrency(menu.harga)}
    //   </p>
    // </div>
    <div className='card bg-base-100 shadow-xl'>
      <figure className='h-48 w-full'>
        <img
          src={imageUrl}
          alt={menu.nama}
          className='h-full w-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='font-semibold'>
          {menu.nama} <span className='font-extrabold'>({menu.kode})</span>
        </h2>
        <p className='text-xl'>{formatCurrency(menu.harga)}</p>
        <div className='card-actions'>
          <button
            className='btn outline outline-1 text-black'
            onClick={() => inputCart(menu)}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  )
}
