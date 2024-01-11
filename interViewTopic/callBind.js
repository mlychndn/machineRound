const obj = {
  firstName: "Malay",
  lastName: "Chandan",
};

function printMyFullName(hometown, city, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      "," +
      city +
      ", " +
      country
  );
}

// const printDetails = printMyFullName.bind(obj);
// printDetails();

Function.prototype.myBind = function (...args) {
  const obj = this;
  return function (...values) {
    obj.apply(args[0], [...args.slice(1), ...values]);
  };
};

const checKBind = printMyFullName.myBind(obj, "Jehanabad", "Bihar");
checKBind("India");
