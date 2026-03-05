
import React, { useState } from 'react';

// Icons
const BoltIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const BoltYellowIcon = () => (
    <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

interface BillingModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
  onAddFunds: (amount: number) => Promise<any>;
}

const BillingModal: React.FC<BillingModalProps> = ({ isOpen, onClose, balance, onAddFunds }) => {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAddFunds = async (tier: string, amount: number) => {
    setLoadingTier(tier);
    await onAddFunds(amount);
    setLoadingTier(null);
  };

  const transactions = [
    { id: 1, title: 'Credit Top-up', date: 'Oct 24, 2023', amount: '+$50.00', status: 'COMPLETED', type: 'credit', icon: BoltIcon, bg: 'bg-green-100' },
    { id: 2, title: 'Director Agent Usage', date: 'Oct 22, 2023', amount: '-$12.50', status: 'COMPLETED', type: 'usage', icon: BoltYellowIcon, bg: 'bg-yellow-100' },
    { id: 3, title: 'Ad Buyer Optimization', date: 'Oct 20, 2023', amount: '-$5.00', status: 'COMPLETED', type: 'usage', icon: BoltYellowIcon, bg: 'bg-yellow-100' },
    { id: 4, title: 'Credit Top-up', date: 'Oct 15, 2023', amount: '+$20.00', status: 'COMPLETED', type: 'credit', icon: BoltIcon, bg: 'bg-green-100' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-5xl rounded-3xl border border-zinc-200 relative animate-scale-up shadow-2xl my-8"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-zinc-900 mb-2">Billing & Credits</h2>
                <p className="text-zinc-500">Manage your usage balance and transaction history.</p>
            </div>

            {/* Current Balance Card */}
            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 flex flex-col md:flex-row justify-between items-center mb-12 relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 dark:bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 space-y-2 text-center md:text-left mb-6 md:mb-0 w-full md:w-auto">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Current Balance</p>
                    <p className="text-5xl font-bold text-zinc-900 tracking-tight">${balance.toFixed(2)}</p>
                    <div className="flex items-center justify-center md:justify-start text-green-600 text-xs font-medium pt-2">
                        <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        Auto-refill active (below $10.00)
                    </div>
                </div>

                <div className="relative z-10 w-full md:w-80 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-10 h-6 bg-zinc-700 rounded opacity-50"></div>
                        <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Manage Card</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex space-x-2">
                            <span className="text-white text-lg">••••</span>
                            <span className="text-white text-lg">••••</span>
                            <span className="text-white text-lg">••••</span>
                            <span className="text-white text-lg font-mono">4242</span>
                        </div>
                        <div className="text-zinc-400 text-xs">Expires 12/25</div>
                    </div>
                     <div className="absolute -bottom-6 -right-6 text-zinc-800">
                         <svg className="w-32 h-32 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 6h18v2H3V6zm0 12v-6h18v6H3z" /></svg>
                     </div>
                </div>
            </div>

            {/* Top-up Balance */}
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Top-up Balance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Basic */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-zinc-400 transition-colors shadow-sm">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Basic</p>
                    <p className="text-4xl font-bold text-zinc-900 mb-8">$20</p>
                    <button 
                        onClick={() => handleAddFunds('basic', 20)}
                        disabled={!!loadingTier}
                        className="w-full py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold rounded-xl transition-colors disabled:opacity-50"
                    >
                        {loadingTier === 'basic' ? 'Processing...' : 'Buy Credits'}
                    </button>
                </div>

                {/* Standard - Highlighted */}
                <div className="bg-white border border-yellow-400 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg shadow-yellow-400/10">
                    <div className="absolute -top-3 bg-yellow-400 dark:bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        Save 10%
                    </div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Standard</p>
                    <p className="text-4xl font-bold text-zinc-900 mb-8">$50</p>
                    <button 
                        onClick={() => handleAddFunds('standard', 50)}
                        disabled={!!loadingTier}
                        className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black font-bold rounded-xl transition-colors disabled:opacity-50 shadow-md"
                    >
                        {loadingTier === 'standard' ? 'Processing...' : 'Buy Credits'}
                    </button>
                </div>

                {/* Enterprise */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-zinc-400 transition-colors relative shadow-sm">
                    <div className="absolute -top-3 bg-yellow-400 dark:bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        Save 20%
                    </div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Enterprise</p>
                    <p className="text-4xl font-bold text-zinc-900 mb-8">$100</p>
                    <button 
                        onClick={() => handleAddFunds('enterprise', 100)}
                        disabled={!!loadingTier}
                        className="w-full py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold rounded-xl transition-colors disabled:opacity-50"
                    >
                        {loadingTier === 'enterprise' ? 'Processing...' : 'Buy Credits'}
                    </button>
                </div>
            </div>

            {/* Transaction History */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-zinc-900">Transaction History</h3>
                <button className="text-xs font-bold text-zinc-500 hover:text-zinc-700 uppercase tracking-widest flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    View All
                </button>
            </div>
            
            <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="divide-y divide-zinc-200">
                    {transactions.map(tx => (
                        <div key={tx.id} className="p-4 md:p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors group">
                            <div className="flex items-center space-x-4">
                                <div className={`w-10 h-10 rounded-full ${tx.bg} flex items-center justify-center`}>
                                    <tx.icon />
                                </div>
                                <div>
                                    <p className="font-bold text-zinc-900 text-sm">{tx.title}</p>
                                    <p className="text-xs text-zinc-500">{tx.date}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center space-x-4">
                                <div>
                                    <p className={`font-bold text-sm ${tx.type === 'credit' ? 'text-green-600' : 'text-zinc-900'}`}>{tx.amount}</p>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{tx.status}</p>
                                </div>
                                <div className="text-zinc-400 group-hover:text-zinc-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
