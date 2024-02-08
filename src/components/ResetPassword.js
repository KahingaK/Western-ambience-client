import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const {token, url} = useContext(UserContext)

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}/reset_password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      setResetToken(data.reset_password_token);
      setSuccessMessage(null);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setSuccessMessage(null);
    }
  };

  const handleSetNewPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}/update_password/${resetToken}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          password: newPassword,
          password_confirmation: confirmPassword
        })
      });
      const data = await response.json();
      setSuccessMessage(data.message);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setSuccessMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-center font-tertiary uppercase">Reset Password</h2>
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
      {!resetToken ? (
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full rounded-md border-gray-300"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className="w-full btn btn-primary py-4" type="submit">Reset Password</button>
        </form>
      ) : (
        <form onSubmit={handleSetNewPassword}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="mt-1 p-2 block w-full rounded-md border-gray-300"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 block w-full rounded-md border-gray-300"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button className="btn btn-primary text-white" type="submit">Set New Password</button>
        </form>
      )}
    </div>
  </div>
  );
}

export default ResetPassword;
