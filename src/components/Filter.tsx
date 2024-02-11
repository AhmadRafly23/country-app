import { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const region = [
  {
    name: 'Filter by Region',
    value: 'All',
  },
  {
    name: 'Africa',
    value: 'Africa',
  },
  {
    name: 'America',
    value: 'America',
  },
  {
    name: 'Asia',
    value: 'Asia',
  },
  {
    name: 'Europe',
    value: 'Europe',
  },
  {
    name: 'Oceania',
    value: 'Oceania',
  },
];

export default function Filter({
  setRegion,
}: {
  setRegion: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region');

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-gray-700 dark:text-white">
      <button
        className="w-48 flex items-center justify-between p-4 rounded-md border shadow-md dark:bg-gray-700 dark:border-gray-700 dark:shadow-gray-900"
        onClick={handleOpen}
      >
        <span>{selectedRegion}</span>
        <MdOutlineKeyboardArrowUp
          className={`${isOpen ? 'rotate-180' : ''} transition-all`}
        />
      </button>
      {isOpen ? (
        <ul
          className="absolute w-48 md:w-full mt-2 overflow-hidden rounded-md border bg-white dark:bg-gray-700 dark:border-gray-700"
          onMouseLeave={() => setIsOpen(false)}
        >
          {region.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedRegion(item.name);
                setRegion(item.value);
                setIsOpen(false);
              }}
              className={`${
                item.name == selectedRegion
                  ? 'bg-gray-300 text-white dark:bg-gray-500'
                  : ''
              } px-4 py-2 cursor-pointer`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}
