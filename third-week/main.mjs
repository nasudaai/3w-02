const args = process.argv.slice(2);
//console.log(args);

const json = JSON.stringify(args);

function main() {
  console.log("test");
  process.stdout.write(json + "\n");
};

main();
