var atdownload = require('./airtable-download');

atdownload({
    baseId: 'baseKeyHere',
    apiKey: 'apiKeyHere',
    dataPath: './data/data.json',
    mediaPath: './media/', // This is used for saving the file
    mediaBookPath: 'media/', // And this is used for replacing
    csvPath: false,//'./data/',
    skipExistingFiles: true,
    prettifyJson: true,

    // This can be used to upload / migrate images from 1 field to another

    /* updateAttachments:{
         filesrc: 'imagesrc',
         filetarget: 'image',
         table: 'blocks'
     },
    */

    // Write only the content of these tables to JSON,
    // all other tables will still be saved as CSV

    /*
    writeToJson: [
        'meta'
    ],
*/

    tables: [
        'meta',
        'blocks'
    ],
    callback: function () {
        console.log('this is ready');
    }
});