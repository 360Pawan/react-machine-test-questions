"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  slice: (arg0: number, arg1: number) => Product[];
  length: number;
  brand: string;
  description: string;
  id: number;
  thumbnail: string;
  title: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=77");
    const data = await response.json();
    setProducts(data?.products);
  }

  if (!products) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const setPageHandler = (selectedPage: number) => {
    if (
      page >= 1 &&
      page !== selectedPage &&
      selectedPage <= Math.ceil(products?.length / 10)
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="container mx-auto px-3 py-5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-y-10 gap-x-5">
        {products?.length >= 1 ? (
          products?.slice(page * 10 - 10, page * 10).map((product: Product) => (
            <div
              key={product.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Image
                className="rounded-t-lg w-full"
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No products to show</h1>
        )}
      </div>
      <nav
        aria-label="Page navigation example"
        className="flex items-center justify-center mt-5"
      >
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${
                page === 1
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              onClick={() => setPageHandler(page - 1)}
              disabled={page === 1}
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>

          {[...Array(Math.ceil(products?.length / 10))].map((_, i) => {
            return (
              <li key={i}>
                <button
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setPageHandler(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            );
          })}
          <li>
            <button
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setPageHandler(page + 1)}
              disabled={page === Math.ceil(products?.length / 10)}
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
