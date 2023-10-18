import React from 'react'
import CreditCard from '@/components/Card/Card'

const TestPage: React.FC  = () => {
  return (
    <CreditCard balance='2,548.00' incomeAmount='1,840.00' expensesAmount='284.00' />
  )
}

export default TestPage;
