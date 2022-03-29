const { getSticker } = require('./index.js');
/**
 * follow igwe saya hardianto02_
 * @param {String} categoryName nama sticker nya apa?
 * @returns {Promise<{name: string, title: string, result: Array<{link_download: string}}>}
 */
const getSticker = async (categoryName) => {
    return new Promise(async (resolve, reject) => {
        const sticker = new Sticker();
        const result = await sticker.parseStickerByNameCategory("cat");
        const result2 = await sticker.getSticker(result);
        const result3 = await sticker.parseUrlDownload(result2);
        resolve(result3);
    })
}
module.exports = { getSticker };