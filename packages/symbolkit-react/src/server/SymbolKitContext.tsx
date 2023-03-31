import React from 'react'

console.warn('Using SymbolKitContext in server components has no effect, because ' +
  'server components do not support React Context. If you would like to use ' +
  'SymbolKitContext, add \'use client\' to the top of your component.')

export interface SymbolKitContextValue {}
export const SymbolKitContext = null
interface SymbolKitProviderProps {
  children: React.ReactNode
}
export function SymbolKitProvider({ children }: SymbolKitProviderProps) {
  return children
}
