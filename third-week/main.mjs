const args = process.argv.slice(2);
//console.log(args);

const json = JSON.stringify(args);

const obj = {};

function main() {
  console.log("test");
  process.stdout.write(json + "\n");

  obj.one = args[0];
  console.log(obj);
};

main();
