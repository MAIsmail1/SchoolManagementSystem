import React, { createContext, useState, useContext } from 'react';

// Initial payment data - Adapted for masjid context
const initialPaymentData = [
  {
    id: 1,
    studentName: 'Ahmad Khan',
    totalFees: 300,
    paidAmount: 200,
    remainingBalance: 100,
    paymentHistory: [
      { date: '2025-01-10', amount: 100, method: 'Cash' },
      { date: '2025-02-15', amount: 100, method: 'Bank Transfer' }
    ],
    status: 'Partially Paid',
    programName: 'Quran Level 1',
    term: 'Spring 2025',
    paymentFrequency: 'Monthly'
  },
  {
    id: 2,
    studentName: 'Fatima Ali',
    totalFees: 500,
    paidAmount: 500,
    remainingBalance: 0,
    paymentHistory: [
      { date: '2025-01-05', amount: 500, method: 'Credit Card' }
    ],
    status: 'Fully Paid',
    programName: 'Hifz Program',
    term: 'Annual 2025',
    paymentFrequency: 'Annual'
  },
  {
    id: 3,
    studentName: 'Yusuf Rahman',
    totalFees: 180,
    paidAmount: 60,
    remainingBalance: 120,
    paymentHistory: [
      { date: '2025-01-15', amount: 60, method: 'Cash' }
    ],
    status: 'Partially Paid',
    programName: 'Arabic Basics',
    term: 'Spring 2025',
    paymentFrequency: 'Monthly'
  }
];

// Create context
const PaymentContext = createContext();

// Provider component
export const PaymentProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState(initialPaymentData);

  // Get payment data for a specific student
  const getStudentPayment = (studentId) => {
    return paymentData.find(payment => payment.id === studentId);
  };

  // Add a new payment
  const addPayment = (studentId, amount, method) => {
    setPaymentData(prevData => 
      prevData.map(payment => {
        if (payment.id === studentId) {
          const newPaidAmount = payment.paidAmount + parseFloat(amount);
          const newRemainingBalance = payment.totalFees - newPaidAmount;
          const newStatus = newRemainingBalance <= 0 ? 'Fully Paid' : 'Partially Paid';
          
          return {
            ...payment,
            paidAmount: newPaidAmount,
            remainingBalance: newRemainingBalance,
            status: newStatus,
            paymentHistory: [
              ...payment.paymentHistory,
              {
                date: new Date().toISOString().split('T')[0],
                amount: parseFloat(amount),
                method
              }
            ]
          };
        }
        return payment;
      })
    );
    
    return true; // Success indicator
  };

  // Add a new payment record
  const addPaymentRecord = (paymentData) => {
    setPaymentData(prevData => [...prevData, {
      ...paymentData,
      id: prevData.length > 0 ? Math.max(...prevData.map(p => p.id)) + 1 : 1,
      status: paymentData.paidAmount >= paymentData.totalFees ? 'Fully Paid' : 'Partially Paid',
      paymentHistory: paymentData.paymentHistory || []
    }]);
  };

  // Update an existing payment record
  const updatePaymentRecord = (studentId, updatedData) => {
    setPaymentData(prevData => 
      prevData.map(payment => {
        if (payment.id === studentId) {
          return {
            ...payment,
            ...updatedData,
            status: (updatedData.paidAmount >= updatedData.totalFees) ? 'Fully Paid' : 'Partially Paid'
          };
        }
        return payment;
      })
    );
  };

  return (
    <PaymentContext.Provider 
      value={{ 
        paymentData,
        getStudentPayment,
        addPayment,
        addPaymentRecord,
        updatePaymentRecord
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook for using the payment context
export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};