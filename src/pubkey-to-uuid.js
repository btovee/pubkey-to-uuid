const getUuid = require('uuid-by-string');
const { v5: uuidv5 } = require('uuid');

exports.pubkeyToUuid = (pubkey) => {
   return uuidv5(pubkey, uuidv5.URL);
}

exports.uuidV5ByString = (string) => {
    return getUuid(string, 5)
}
