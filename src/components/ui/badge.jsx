import React from 'react';
export function Badge({ className = '', variant = 'default', children }) {
  const variants = { default: 'bg-slate-900 text-white', secondary: 'bg-slate-100 text-slate-900', outline: 'border border-slate-300 text-slate-900' };
  return <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md ${variants[variant] || variants.default} ${className}`}>{children}</span>;
}
