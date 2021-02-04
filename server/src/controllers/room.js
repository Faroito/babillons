const randHex = (len = 12) => {
  const maxlen = 8;
  const min = Math.pow(16, Math.min(len, maxlen) - 1);
  const max = Math.pow(16, Math.min(len, maxlen)) - 1;
  const n = Math.floor(Math.random() * (max - min + 1)) + min;

  var r = n.toString(16);
  while (r.length < len) {
    r = r + randHex(len - maxlen);
  }
  return r;
};

export const createNewRoom = () => {
  const roomId = randHex();
  return roomId;
};
