/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { BsArrowLeft } from 'react-icons/bs';

export default function DetailCountry() {
  const { name } = useParams();
  const { data, isLoading } = useSWR('name/' + name);

  const navigate = useNavigate();

  if (isLoading) return <div className="dark:text-white">Loading...</div>;

  return (
    <>
      <button
        className="flex items-center gap-2 px-8 py-2 border rounded-md shadow-md hover:scale-105 dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:shadow-gray-900"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft className="text-xl" />
        Back
      </button>
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between">
        <img
          src={data[0].flags.png}
          alt={data[0].name.common}
          className="border w-full md:w-[80%] lg:w-[40%] object-cover dark:border-gray-700"
        />
        <div className="w-full md:w-[80%] lg:w-[50%] mt-8 lg:mt-0 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold dark:text-white">
            {data[0].name.common}
          </h1>
          <div className="flex flex-col gap-8 md:gap-0 md:flex-row mt-4 md:mt-8">
            <div className="w-full md:w-1/2 space-y-2">
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">
                  Native Name:{' '}
                </span>
                {data[0].name.common}
              </p>
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">
                  Population:{' '}
                </span>
                {data[0].population}
              </p>
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">Region: </span>
                {data[0].region}
              </p>
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">
                  Sub Region:{' '}
                </span>
                {data[0].subregion}
              </p>
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">Capital: </span>
                {data[0].capital}
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-2">
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">
                  Top Level Domain:{' '}
                </span>
                {data[0].tld[0]}
              </p>
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">
                  Currencies:{' '}
                </span>
                {Object.values(data[0].currencies).map(
                  (item: any, index: number) => (
                    <span key={index}>{item.name}</span>
                  )
                )}
              </p>
              <p className="text-gray-400">
                <span className="font-bold dark:text-gray-200">
                  Languages:{' '}
                </span>
                {Object.values(data[0].languages).map(
                  (item: any, index: number) => (
                    <span key={index}>{item}</span>
                  )
                )}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold mt-8 dark:text-white">
              Border Countries:
            </h2>
            {data[0].borders ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {data[0].borders?.map((border: string, index: number) => (
                  <div
                    key={index}
                    className="px-4 py-2 border rounded-md shadow-md dark:bg-gray-700 dark:border-gray-700 dark:shadow-gray-900 dark:text-white"
                  >
                    {border}
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-1">No border countries</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
