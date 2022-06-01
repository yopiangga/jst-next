import { useEffect, useState } from "react";
export default function Xor() {
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
      temp = temp + data[j] * w1[j];
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
      temp = temp + data[j] * w2[j];
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
      temp = temp + data[j] * w3[j];
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

    console.log(tesXOR([0, 0]));
  }, []);

  return <h1>Perceptron XOR</h1>;
}
