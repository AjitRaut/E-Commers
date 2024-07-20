import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import ShimmerUi from './ShimmerUi';
import UseMain from '../Utils/UseMain';

const Main = () => {
  const newdata = UseMain();
  const [filtersearch, setFilterSearch] = useState([]);
  const [search, setSearch] = useState('');

  const data =
    newdata?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  const handleSearch = () => {
    if (search) {
      const searchfilter = data.filter((nam) =>
        nam.info.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterSearch(searchfilter);
    } else {
      setFilterSearch(data);
    }
  };

  useEffect(() => {
    if (newdata) {
      setFilterSearch(data); // Initialize filtersearch with data
    }
  }, [newdata]);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleTopRatedToggle = () => {
    const isFiltered = filtersearch.every((res) => res.info.avgRating > 4);

    if (isFiltered) {
      setFilterSearch(data);
    } else {
      const filterdata = data.filter((res) => res.info.avgRating > 4);
      setFilterSearch(filterdata);
    }
  };

  return data.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="w-full">
      <div className="my-24">
        <div className="max-w-6xl m-auto flex">
          <div className="max-w-6xl">
            <button
              className="mx-8 bg-slate-100 px-3 py-2 cursor-pointer rounded-2xl font-semibold text-center text-base text-black border-solid border-gray-400"
              onClick={handleTopRatedToggle}
            >
              Top Rated
            </button>
          </div>
          <div>
            <input
              className="bg-slate-100 rounded-2xl px-3 py-2 w-96 outline-none text-black font-semibold text-base border-solid border-gray-400"
              placeholder="Search for Restaurant And Food"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleSearch}
              className="mx-2 bg-slate-100 px-3 py-2 cursor-pointer rounded-2xl font-semibold text-center text-base text-black border-solid border-gray-400"
            >
              Search
            </button>
          </div>
        </div>

        <div className="max-w-6xl m-auto grid grid-cols-4 gap-7 transition-all px-4">
          {filtersearch.length > 0 ? (
            filtersearch.map((datt) => (
              <Link to={'/restaurants/' + datt.info.id} key={datt.info.id}>
                <Card datt={datt} />
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <h2 className="text-center font-black">
                There is no matched data
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
