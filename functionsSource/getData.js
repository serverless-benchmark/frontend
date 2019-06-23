const axios = require('axios');

exports.handler = function (event, context, callback) {
    const url = process.env.BACKEND_URL;
    axios.get(url).then(res => {
        callback(null, {
            statusCode: 200,
            headers: {
                'content-type': 'application/json',
                'Cache-Control': 'public, max-age=7200, must-revalidate'
            },
            body: JSON.stringify(res.data)
        })
    }).catch(callback);

}