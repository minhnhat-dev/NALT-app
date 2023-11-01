import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AntdRegistry from './AntdRegistry'
import React from 'react';
import StyledComponentsRegistry from './StyledComponentsRegistry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Money Manager',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AntdRegistry>{children}</AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}