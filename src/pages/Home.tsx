/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import Filter from '../components/Filter';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data, isLoading } = useSWR('all');
  const [index, setIndex] = useState(8);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  let notFound = false;
  let show = false;

  useEffect(() => {
    setIndex(8);
  }, [query, region]);

  const LoadMore = () => {
    setIndex(index + 8);
  };

  const SearchData = (datas: any) => {
    let result;

    if (region === 'All') {
      result = datas?.filter((item: any) => {
        return item.name.common.toLowerCase().includes(query.toLowerCase());
      });
    } else {
      result = datas?.filter((item: any) => {
        return (
          item.name.common.toLowerCase().includes(query.toLowerCase()) &&
          item.region.toLowerCase().includes(region.toLowerCase())
        );
      });
    }

    result.length === 0 ? (notFound = true) : (notFound = false);

    result.length > index ? (show = true) : (show = false);

    return result.slice(0, index);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
        <Search query={query} setQuery={setQuery} />
        <Filter setRegion={setRegion} />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {SearchData(data).map((item: any, index: number) => (
          <Card item={item} index={index} />
        ))}
      </div>
      {notFound && (
        <div className="flex justify-center mt-8">
          <p className="text-2xl font-bold dark:text-white">No Data Found</p>
        </div>
      )}
      {show && (
        <div className="flex justify-center mt-8">
          <button
            onClick={LoadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

function Card({ item, index }: { item: any; index: number }) {
  return (
    <Link to={`/detail/${item.name.common}`}>
      <div
        key={index}
        className="border shadow-md rounded-lg overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:shadow-gray-900"
      >
        <img
          src={item.flags.png}
          alt={item.name.common}
          className="object-cover w-full h-[250px]"
        />
        <div className="h-[250px] pt-8 px-8 space-y-2">
          <h1 className="text-2xl font-bold mb-4 line-clamp-1">
            {item.name.common}
          </h1>
          <p>
            <span className="font-medium">Population:</span> {item.population}
          </p>
          <p>
            <span className="font-medium">Region:</span> {item.region}
          </p>
          <p>
            <span className="font-medium">Capital:</span> {item.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
