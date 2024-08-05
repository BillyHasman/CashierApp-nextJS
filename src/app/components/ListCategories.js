import { useEffect, useState } from 'react'
import { API_URL } from '../utils/constant'
import axios from 'axios'
import {
  Restaurant as RestaurantIcon,
  LocalCafe as LocalCafeIcon,
  LocalPizza as LocalPizzaIcon,
} from '@mui/icons-material'

const Icon = ({ nama }) => {
  if (nama === 'Makanan') return <RestaurantIcon className='mr-2' />
  if (nama === 'Minuman') return <LocalCafeIcon className='mr-2' />
  if (nama === 'Cemilan') return <LocalPizzaIcon className='mr-2' />
  return <RestaurantIcon className='mr-2' />
}

export default function ListCategories({ changeCategory }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL + 'categories')
        setCategories(response.data)
        // console.log('Categories state updated:', response.data)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchCategories()
  }, [])

  // console.log('Current Categories state:', categories)
  return (
    <div className='w-1/3 text-black text-2xl font-bold'>
      <p>Daftar Kategori</p>
      <hr className='mt-3'></hr>

      <div className='font-semibold text-base text-gray-900 bg-white rounded-lg '>
        {categories &&
          categories.map((category) => (
            <div key={category.id}>
              <button
                type='button'
                className='relative inline-flex items-center w-full px-4 py-2 border-b border-gray-200 rounded hover:bg-gray-100 hover:text-gray-700  focus:text-white focus:bg-gray-700'
                onClick={() => changeCategory(category.nama)}
              >
                <Icon nama={category.nama} />
                {category.nama}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
