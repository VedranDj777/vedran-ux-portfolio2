import React from 'react';
export function Input({ className = '', ...props }) {
  return <input className={`w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300 ${className}`} {...props} />;
}
