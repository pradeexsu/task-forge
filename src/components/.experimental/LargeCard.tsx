import { CurrencyRupee } from '@mui/icons-material';

export default function LargeCard() {
  return (
    <div className="w-full md:w-6/12">
      <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
        <a href="#" className="block w-full h-full">
          <div className="flex items-center justify-between px-4 py-6 space-x-4">
            <div className="flex items-center">
              <span className="relative p-3 bg-yellow-100 rounded-full">
                <CurrencyRupee fontSize="large" />
              </span>
              <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                Level 2 Ambassador
              </p>
            </div>
            <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
              $44,453.39
              <span className="text-xs text-gray-400">/$100K</span>
            </div>
          </div>
          <div className="w-full h-3 bg-gray-100">
            <div className="w-2/5 h-full text-xs text-center text-white bg-green-400"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
