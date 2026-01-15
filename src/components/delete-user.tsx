import { useState } from 'react'

export default function DeleteUser() {
  const [password, setPassword] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)

  const handleDelete = () => {
    console.log('Delete account with password:', password)
    // Add your delete logic here
  }

  return (
    <div className="border-t pt-6 mt-6">
      <h3 className="text-lg font-medium text-red-600">Delete Account</h3>
      <p className="mt-1 text-sm text-gray-600">
        Once your account is deleted, all of its resources and data will be permanently deleted.
      </p>
      
      <button
        onClick={() => setConfirmOpen(true)}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Delete Account
      </button>

      {confirmOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <h4 className="text-lg font-bold">Confirm Deletion</h4>
            <p className="mt-2">Please enter your password to confirm:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            />
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
