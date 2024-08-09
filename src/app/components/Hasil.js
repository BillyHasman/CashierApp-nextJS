import { React, Component } from 'react'

import { formatCurrency } from '../utils/helpers'

export default function Hasil({ keranjangs }) {
  console.log('item: ', keranjangs)

  return (
    <div className='text-black text-2xl font-bold w-1/3'>
      <p>Hasil</p>
      <hr className='mt-3'></hr>
      <div className='font-semibold text-base text-gray-900 bg-white rounded-lg '>
        {keranjangs.length !== 0 && (
          <div>
            {keranjangs.map((menuKeranjang) => (
              <div className='flex w-full px-4 py-2 border-b border-gray-200 rounded hover:bg-gray-100 hover:text-gray-700 focus:text-white focus:bg-gray-700'>
                <div className='mx-auto my-auto'>
                  <div className='badge badge-success badge-lg text-lg text-white'>
                    {menuKeranjang.jumlah}
                  </div>
                </div>
                <div className='flex flex-col w-1/2 ml-3'>
                  <div className='text-lg'>{menuKeranjang.product.nama}</div>
                  <div className='text-md'>
                    {formatCurrency(menuKeranjang.product.harga)}
                  </div>
                </div>
                <div className='flex justify-end w-1/3 font-bold mr-5'>
                  {formatCurrency(menuKeranjang.total_harga)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
