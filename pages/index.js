import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const menu = [
    {
      title: "Perceptron AND",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      path: "/and",
    },
    {
      title: "Perceptron AND BIAS",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      path: "/and-bias",
    },
    {
      title: "Perceptron OR",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      path: "/or",
    },
    {
      title: "Perceptron XOR",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      path: "/xor",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Head>
        <title>JST | Praktikum Kecerdasan Komputasional</title>
        <meta
          name="description"
          content="Perceptron AND, AND NOT, OR, XOR | Alfian Prisma Yopiangga"
        />
      </Head>
      <div className="max-w-7xl w-full lg:px-0 px-8 lg:py-0 py-20">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-1/2 w-full">
            <p className="text-base leading-4 text-gray-600">
              Praktikum Kecerdasan Komputasional
            </p>
            <h1
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800"
            >
              Jaringan Syaraf Tiruan
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-gray-600"
            >
              We’re working on a suit of tools to make managing complex systems
              easier, for everyone for free. we can’t wait to hear what you
              think
            </p>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:h-screen lg:py-10 scrollbar-hide lg:mt-0 mt-12 md:px-8 lg:overflow-scroll"
            role="list"
          >
            {menu.map((el, idx) => {
              return (
                <Link key={idx} href={el.path}>
                  <div className="hover:bg-indigo-700 hover:pl-2.5 duration-200 shadow rounded-lg z-30 relative mb-5 overflow-hidden">
                    <div
                      role="listitem"
                      className="bg-white cursor-pointer p-8 "
                    >
                      <div className="md:flex items-center justify-between">
                        <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                          {el.title}
                        </h2>
                      </div>
                      <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                        {el.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
