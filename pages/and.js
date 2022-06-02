import Head from "next/head";
import { useEffect, useState } from "react";
export default function And() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("-");
  const [weight, setWeight] = useState();

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const res = tes([parseInt(input.input1), parseInt(input.input2)]);
    setResult(res);
  }

  const inputSquence = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const target = [0, 0, 0, 1];
  var w = [-0.3, 0.5];
  var output = [];

  function newW(W, r, e, x) {
    return W + r * e * x;
  }

  let loop = true;
  let epoch = 0;

  function tes(data) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      temp = temp + data[j] * weight[j];
    }

    if (temp <= 2) {
      return 0;
    } else {
      return 1;
    }
  }

  useEffect(() => {
    while (loop !== false && epoch <= 10) {
      epoch++;
      loop = false;
      for (let i = 0; i < inputSquence.length; i++) {
        let temp = 0;
        for (let j = 0; j < 2; j++) {
          temp = temp + inputSquence[i][j] * w[j];
        }

        let o;

        if (temp <= 2) {
          o = 0;
        } else {
          o = 1;
        }

        output.push(o);
        if (o !== target[i]) {
          loop = true;
          let e = target[i] - o;
          let r = 1;
          let newW1 = newW(w[0], r, e, inputSquence[i][0]);
          let newW2 = newW(w[1], r, e, inputSquence[i][1]);
          w = [newW1, newW2];
        }
      }
    }
    setWeight(w);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Perceptron AND | Praktikum Kecerdasan Komputasional</title>
        <meta
          name="description"
          content="Perceptron AND, AND NOT, OR, XOR | Alfian Prisma Yopiangga"
        />
      </Head>
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-100">
            <div>
              <h2 className="text-4xl font-bold text-white">Perceptron AND</h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                Result : {result}
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Hasil tes akan muncul di atas setelah anda menginputkan nilai
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  <div className="grow">
                    <label
                      htmlFor="input1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Input 1
                    </label>
                    <select
                      onChange={handleChange}
                      name="input1"
                      id="input1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    >
                      <option selected>Choose a value</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                  <div className="grow">
                    <label
                      htmlFor="input2"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Input 2
                    </label>
                    <select
                      onChange={handleChange}
                      name="input2"
                      id="input2"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    >
                      <option selected>Choose a value</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
