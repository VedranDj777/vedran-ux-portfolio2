import React from 'react';
export function Button({ children, className = '', variant = 'default', size = 'base', asChild = false, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium transition rounded-md shadow-sm disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-slate-900 text-white hover:opacity-90',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border border-slate-300 text-slate-900 hover:bg-slate-50',
    ghost: 'text-slate-900 hover:bg-slate-100',
  };
  const sizes = { sm: 'text-sm px-3 py-2', base: 'text-sm px-4 py-2.5', lg: 'text-base px-5 py-3' };
  const cls = [base, variants[variant] || variants.default, sizes[size] || sizes.base, className].join(' ');
  const Comp = asChild ? 'span' : 'button';
  return <Comp className={cls} {...props}>{children}</Comp>;
}
