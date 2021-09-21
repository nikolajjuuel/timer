const arr = process.argv.slice(2);

time = arr.map((x) => x * 1000);

const timer = function (time) {
  for (let i = 0; i < time.length; i++) {
    setTimeout(() => {
      const noise = process.stdout.write('\x07')
      console.log(`noise ${time[i]/1000} second timer ${noise}`);
    }, time[i])
  }

};
timer(time);
