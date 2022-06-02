import Head from "next/head";
import { useEffect, useState } from "react";
export default function Xor() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("-");
  const [weight1, setWeight1] = useState();
  const [weight2, setWeight2] = useState();
  const [weight3, setWeight3] = useState();

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const res = tesXOR([parseInt(input.input1), parseInt(input.input2)]);
    setResult(res);
  }

  const inputSquence = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const target1 = [0, 0, 1, 0];
  const target2 = [0, 0, 1, 0];
  const target3 = [0, 1, 1, 1];
  var w1 = [-0.3, 0.5];
  var w2 = [-0.3, 0.5];
  var w3 = [-0.3, 0.5];
  var output1 = [];
  var output2 = [];
  var output3 = [];

  function newW(W, r, e, x) {
    return W + r * e * x;
  }

  let loop1 = true;
  let loop2 = true;
  let loop3 = true;
  let epoch1 = 0;
  let epoch2 = 0;
  let epoch3 = 0;

  function tes1(data) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      temp = temp + data[j] * weight1[j];
    }

    if (temp <= 2) {
      return 0;
    } else {
      return 1;
    }
  }

  function tes2(data) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      temp = temp + data[j] * weight2[j];
    }

    if (temp <= 2) {
      return 0;
    } else {
      return 1;
    }
  }

  function tes3(data) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      temp = temp + data[j] * weight3[j];
    }

    if (temp <= 2) {
      return 0;
    } else {
      return 1;
    }
  }

  function tesXOR(data) {
    let x1 = tes1([data[0], data[1]]);
    let x2 = tes2([data[1], data[0]]);

    return tes3([x1, x2]);
  }

  useEffect(() => {
    while (loop1 !== false && epoch1 <= 10) {
      epoch1++;
      loop1 = false;
      for (let i = 0; i < inputSquence.length; i++) {
        let temp = 0;
        for (let j = 0; j < 2; j++) {
          temp = temp + inputSquence[i][j] * w1[j];
        }

        let o;

        if (temp <= 2) {
          o = 0;
        } else {
          o = 1;
        }

        output1.push(o);
        if (o !== target1[i]) {
          loop1 = true;
          let e = target1[i] - o;
          let r = 1;
          let newW1 = newW(w1[0], r, e, inputSquence[i][0]);
          let newW2 = newW(w1[1], r, e, inputSquence[i][1]);
          w1 = [newW1, newW2];
        }
      }
    }

    while (loop2 !== false && epoch2 <= 10) {
      epoch2++;
      loop2 = false;
      for (let i = 0; i < inputSquence.length; i++) {
        let temp = 0;
        for (let j = 0; j < 2; j++) {
          temp = temp + inputSquence[i][j] * w2[j];
        }

        let o;

        if (temp <= 2) {
          o = 0;
        } else {
          o = 1;
        }

        output2.push(o);
        if (o !== target2[i]) {
          loop2 = true;
          let e = target2[i] - o;
          let r = 1;
          let newW1 = newW(w2[0], r, e, inputSquence[i][0]);
          let newW2 = newW(w2[1], r, e, inputSquence[i][1]);
          w2 = [newW1, newW2];
        }
      }
    }

    while (loop3 !== false && epoch3 <= 10) {
      epoch3++;
      loop3 = false;
      for (let i = 0; i < inputSquence.length; i++) {
        let temp = 0;
        for (let j = 0; j < 2; j++) {
          temp = temp + inputSquence[i][j] * w3[j];
        }

        let o;

        if (temp <= 2) {
          o = 0;
        } else {
          o = 1;
        }

        output3.push(o);
        if (o !== target3[i]) {
          loop3 = true;
          let e = target3[i] - o;
          let r = 1;
          let newW1 = newW(w3[0], r, e, inputSquence[i][0]);
          let newW2 = newW(w3[1], r, e, inputSquence[i][1]);
          w3 = [newW1, newW2];
        }
      }
    }

    setWeight1(w1);
    setWeight2(w2);
    setWeight3(w3);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Perceptron XOR | Praktikum Kecerdasan Komputasional</title>
        <meta description="Perceptron AND, AND NOT, OR, XOR | Alfian Prisma Yopiangga" />
      </Head>
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-100">
            <div>
              <h2 className="text-4xl font-bold text-white">Perceptron XOR</h2>

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
