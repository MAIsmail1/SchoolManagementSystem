import React, { useState } from 'react';
import { Wallet, CreditCard, DollarSign, FileText, RefreshCw, BookOpen, Calendar } from 'lucide-react';
import { usePayment } from '../../contexts/PaymentContext';
import { Card } from '../common/card';

const Payment = () => {
  const { paymentData, addPayment } = usePayment();
  const [selectedStudent, setSelectedStudent] = useState(paymentData[0]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const paymentMethods = [
    'Cash',
    'Credit Card',
    'Bank Transfer',
    'Check',
    'Mobile Payment',
    'Zakat Fund'
  ];

  const handlePaymentSubmit = () => {
    if (!paymentAmount || parseFloat(paymentAmount) <= 0) {
      alert('Please enter a valid payment amount');
      return;
    }

    // Process the payment using the context function
    const success = addPayment(selectedStudent.id, paymentAmount, paymentMethod);
    
    if (success) {
      alert(`Payment of $${paymentAmount} processed for ${selectedStudent.studentName} via ${paymentMethod}`);
      setPaymentModalOpen(false);
      setPaymentAmount('');
      
      // Update the selected student with the latest data
      const updatedStudent = paymentData.find(p => p.id === selectedStudent.id);
      setSelectedStudent(updatedStudent);
    } else {
      alert('There was an error processing the payment. Please try again.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Wallet className="mr-3 text-green-600" /> Masjid Program Payments
        </h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Student
        </label>
        <select 
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedStudent.id}
          onChange={(e) => {
            const student = paymentData.find(
              s => s.id === parseInt(e.target.value)
            );
            setSelectedStudent(student);
          }}
        >
          {paymentData.map(student => (
            <option key={student.id} value={student.id}>
              {student.studentName} - {student.programName}
            </option>
          ))}
        </select>
      </div>

      {/* Program Details */}
      <Card className="p-4 bg-green-50 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <BookOpen className="mr-2 text-green-600" />
            <span className="font-semibold text-green-800">{selectedStudent.programName}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 text-green-600" />
            <span className="text-green-800">{selectedStudent.term} ({selectedStudent.paymentFrequency} payment)</span>
          </div>
        </div>
      </Card>

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
            className="flex items-center text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md transition-colors"
            onClick={() => setPaymentModalOpen(true)}
          >
            <RefreshCw className="mr-2" /> Make Payment
          </button>
        </div>
        <div className="overflow-x-auto">
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
              {selectedStudent.paymentHistory.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">No payment history available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Assistance Note */}
      {selectedStudent.remainingBalance > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Financial Assistance Options</h3>
          <p className="text-blue-700 text-sm">
            The masjid offers financial assistance for families in need. Please speak with the administration 
            if you require support with program fees. Zakat and Sadaqah funds may be available to assist with 
            educational expenses.
          </p>
        </div>
      )}

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Student</label>
              <div className="p-2 bg-gray-100 rounded-md">
                {selectedStudent.studentName} - {selectedStudent.programName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Amount</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">$</span>
                <input 
                  type="number" 
                  className="w-full p-2 pl-8 border rounded-md"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="Enter payment amount"
                  min="1"
                  step="0.01"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <select
                className="w-full p-2 border rounded-md"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                {paymentMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setPaymentModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
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