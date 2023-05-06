const newId = (param) => {
  var id = 0;
  if (!param.length) return 0;

  for (let i = 0; i < param.length; i++) {
    if (param[i].id > id) id = param[i].id;
  }

  return id + 1;
};
module.exports = { newId };
