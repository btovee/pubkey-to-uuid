const assert = require('assert');
const pubkeyToUuid = require('../pubkey-to-uuid');

describe("Pubkey to UUID", () => {
    const privateKey = "20c9d0dce464a26463561875ff46d4b792cadee0221a5eecb8c6a4838ba96965";
    const publicKey = "991710284d9fc4e231597b5c6ccaed38bea632e9d373338d18cb423114858ccb4334897b7ac089c46e00e019ce6c244494e6c329ae35467f18eed1183c28f1ab";
    const address = "0xb3fb1749f808b5c1e512d4d821e232920a5cff40";

    it('should convert a pubkey to a UUID in a reproducible way "uuid" lib ',  () => {
        const uuidExpected = "6325af53-6683-5ce4-a94a-cf57ad74b531";
        const uuidActual = pubkeyToUuid.pubkeyToUuid(publicKey);
        assert.equal(uuidActual, uuidExpected);
    });

    it('should convert a pubkey to a UUID V5 in a reproducible way "uuid-by-string" lib ',  () => {
        const uuidExpected = "9b935305-2dec-53b2-9ec5-74ccf4245062";
        const uuidActual = pubkeyToUuid.uuidV5ByString(publicKey);
        assert.equal(uuidActual, uuidExpected);
    });
});
