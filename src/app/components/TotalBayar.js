import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../utils/constant'
import { formatCurrency } from '../utils/helpers'

export default function TotalBayar({ keranjangs }) {
  const totalBayar = keranjangs.reduce((total, item) => {
    return total + item.total_harga
  }, 0)

  const submitTotalBayar = async () => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: keranjangs,
    }

    try {
      const response = await axios.post(API_URL + 'pesanans', pesanan)

      Swal.fire({
        title: 'Pesanan Berhasil',
        text: 'Pesanan Anda telah diproses',
        icon: 'success',
        timer: 1500,
        showCancelButton: false,
      })
    } catch (error) {
      console.log('Error submitting order', error)
    }
  }

  return (
    <div className='fixed bottom-0 py-5 w-1/3 px-16'>
      <div className='flex justify-between items-center'>
        <div className='font-normal text-xl'>Total Harga:</div>
        <div className='font-bold text-xl'>{formatCurrency(totalBayar)}</div>
      </div>
      <button
        className='btn bg-gray-700 mt-4 w-full text-lg text-white'
        onClick={submitTotalBayar}
      >
        BAYAR
      </button>
    </div>
  )
}
