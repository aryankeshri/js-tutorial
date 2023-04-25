let car = {
  name: "Tata",
  model: "Altroz",
  variant: "XZ+"
}

for (let key in car) {
  console.log(`car key ${key} :: ${car[key]}`);
}
