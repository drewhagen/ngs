let i = 0;

const sayHiNTimes = N => {
    if (i < N) {
        console.log('Hello World.');
        i++
    }
    if (i == N) {
        console.log('Done');
        clearInterval(intervalID);
    }
}

const intervalID = setInterval(
  sayHiNTimes,
  1000,
  5
);
