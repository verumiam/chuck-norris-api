'use client';
import useSearchInput from '@/hooks/useSearchInput';

export default function SearchInput() {
  const { searchTerm, handleChange, foundValue } = useSearchInput();

  return (
    <div className="md:h-40 p-6 h-24 w-full flex flex-col items-center justify-center">
      <input
        className=" placeholder:text-blue-500 placeholder:font-medium text-[16px] shadow-xl shadow-gray-400 border-none min-w-[220px] md:min-w-[320px] max-w-full py-3 px-6 h-10 outline-none"
        type="text"
        value={searchTerm}
        placeholder="Search jokes..."
        autoFocus
        onChange={(e) => handleChange(e)}
      />
      {foundValue ? <p className="text-[12px] mt-4">Found jokes: {foundValue}</p> : null}
    </div>
  );
}
