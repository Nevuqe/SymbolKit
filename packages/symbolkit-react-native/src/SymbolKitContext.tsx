import React from 'react'
import { SvgProps } from 'react-native-svg'

export type SymbolKitContextValue = Partial<SvgProps>
export const SymbolKitContext = React.createContext<SymbolKitContextValue>({})

export interface SymbolKitProviderProps {
  iconProps?: Partial<Omit<SvgProps, 'children'>>
  children: React.ReactNode
}
export function SymbolKitProvider({ iconProps, children }: SymbolKitProviderProps) {
  return <SymbolKitContext.Provider value={iconProps || {}} children={children} />
}
