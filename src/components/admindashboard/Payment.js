import React, { useState } from 'react';
import { Wallet, CreditCard, DollarSign, FileText, RefreshCw } from 'lucide-react';

const mockPaymentData = [
  {
    id: 1,
    studentName: 'Emma Johnson',
    totalFees: 5000,
    paidAmount: 3500,
    remainingBalance: 1500,
    paymentHistory: [
      { date: '2024-01-15', amount: 1500, method: 'Credit Card' },
      { date: '2024-02-20', amount: 2000, method: 'Bank Transfer' }
    ],
    status: 'Partially Paid'
  },
  {
    id: 2,
    studentName: 'Liam Smith',
    totalFees: 5500,
    paidAmount: 5500,
    remainingBalance: 0,
    paymentHistory: [
      { date: '2024-01-10', amount: 2750, method: 'Credit Card' },
      { date: '2024-02-15', amount: 2750, method: 'Bank Transfer' }
    ],
    status: 'Fully Paid'
  }
];

const Payment = () => {
  const [selectedStudent, setSelectedStudent] = useState(mockPaymentData[0]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePaymentSubmit = () => {
    // In a real application, this would interact with a backend
    alert(`Payment of $${paymentAmount} processed for ${selectedStudent.studentName}`);
    setPaymentModalOpen(false);
    setPaymentAmount('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Wallet className="mr-3 text-green-600" /> Payment Management
        </h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Student
        </label>
        <select 
          className="w-full p-2 border rounded-md"
          value={selectedStudent.id}
          onChange={(e) => {
            const student = mockPaymentData.find(
              s => s.id === parseInt(e.target.value)
            );
            setSelectedStudent(student);
          }}
        >
          {mockPaymentData.map(student => (
            <option key={student.id} value={student.id}>
              {student.studentName}
            </option>
          ))}
        </select>
      </div>

      {/* Payment Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <DollarSign className="mr-2 text-green-600" />
            <h3 className="text-gray-600">Total Fees</h3>
          </div>
          <p className="text-2xl font-bold">${selectedStudent.totalFees}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <CreditCard className="mr-2 text-blue-600" />
            <h3 className="text-gray-600">Paid Amount</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            ${selectedStudent.paidAmount}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FileText className="mr-2 text-red-600" />
            <h3 className="text-gray-600">Remaining Balance</h3>
          </div>
          <p className="text-2xl font-bold text-red-600">
            ${selectedStudent.remainingBalance}
          </p>
        </div>
      </div>

      {/* Payment Status */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Payment Status</h3>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
          <span className="text-gray-700">Current Status</span>
          <span 
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedStudent.status === 'Fully Paid' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {selectedStudent.status}
          </span>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Payment History</h3>
          <button 
            className="flex items-center text-blue-600 hover:text-blue-800"
            onClick={() => setPaymentModalOpen(true)}
          >
            <RefreshCw className="mr-2" /> Make Payment
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Method</th>
            </tr>
          </thead>
          <tbody>
            {selectedStudent.paymentHistory.map((payment, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{payment.date}</td>
                <td className="p-2">${payment.amount}</td>
                <td className="p-2">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Amount</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded-md"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                placeholder="Enter payment amount"
              />
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setPaymentModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={handlePaymentSubmit}
              >
                Submit Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;