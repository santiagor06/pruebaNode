const isString = (param) => {
  if (typeof param === "string") return true;
  else throw new Error("must be a string");
};

const isNumber = (param) => {
  if (typeof param === "number") return true;
  else throw new Error("must be a number");
};

const parseName = (param) => {
  if (!param) throw new Error("Enter a Name");
  else if (isString(param)) return param;
  else throw new Error("Invalid Name");
};

const parseDate = (param) => {
  if (!param) throw new Error("Enter a Date");
  else if (isString(param)) return param;
  else throw new Error("Invalid Date");
};
const parseBiography = (param) => {
  if (!param) throw new Error("Enter a Biography");
  else if (isString(param)) return param;
  else throw new Error("Invalid Biography");
};

const parsePhoto = (param) => {
  if (!param) throw new Error("Enter a URL Photo");
  else if (isString(param)) return param;
  else throw new Error("Invalid URL");
};
const parseGenere = (param) => {
  if (!param) throw new Error("Enter a Genere");
  else if (isString(param)) return param;
  else throw new Error("Invalid Genere");
};

const parseId = (param) => {
  if (!param) throw new Error("Enter a Id");
  else if (isNumber(param)) return param;
  else throw new Error("Invalid Id");
};
const parseSing = (param) => {
  return {
    name: parseName(param.name),
    date: parseDate(param.date),
    biography: parseBiography(param.biography),
    photo: parsePhoto(param.photo),
    genere: parseGenere(param.genere),
  };
};
const parseSingUpdate = (param) => {
  return {
    id: param.id,
    name: parseName(param.name),
    date: parseDate(param.date),
    biography: parseBiography(param.biography),
    photo: parsePhoto(param.photo),
    genere: parseGenere(param.genere),
  };
};

module.exports = { parseSing, parseSingUpdate, parseId };
