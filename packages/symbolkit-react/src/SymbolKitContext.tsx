import React from 'react'

export type SymbolKitContextValue = Partial<React.SVGProps<SVGSVGElement>>
export const SymbolKitContext = React.createContext<SymbolKitContextValue>({})

export interface SymbolKitProviderProps {
  iconProps?: Partial<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
}
export function SymbolKitProvider({ iconProps, children }: SymbolKitProviderProps) {
  return <SymbolKitContext.Provider value={iconProps || {}} children={children} />
}
