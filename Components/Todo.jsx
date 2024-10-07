import React from 'react'

const Todo = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td className="px-6 py-4">
              Study
              </td>
              <td className="px-6 py-4">
                Learn Next JS
              </td>
              <td className="px-6 py-4">
                Pending
              </td>
              <td className="px-6 py-4 flex gap-3">
                <button className="px-16 py-2 bg-orange-600 text-white">Delete</button>
                <button className="px-16 py-2 bg-green-600 text-white">Add</button>
              </td>
            </tr>
  )
}

export default Todo