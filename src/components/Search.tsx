import { IoIosSearch } from 'react-icons/io';

export default function Search({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) {
  return (
    <>
      <div className="w-full md:w-fit px-4 py-2 flex items-center rounded-md border border-gray-100 shadow-md dark:bg-gray-700 dark:border-gray-700 dark:shadow-gray-900">
        <IoIosSearch className="text-2xl text-gray-500 dark:text-white" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full md:w-80 pl-5 py-1 text-gray-800 outline-none dark:text-white dark:placeholder-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:shadow-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
}
