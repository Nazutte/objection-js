const dbSetup = require('./db/db-setup');
const express = require('express');
const User = require('./db/models/user');
const Channel = require('./db/models/channel');
const { tableName, relatedQuery } = require('./db/models/channel');
const app = express();
const PORT = 5000;

dbSetup();

async function run(){
    // const id = 1;
    // const user = await User.query().findById(id).select("name").withGraphFetched('channel(selectName)').modifiers({
    //     selectName(builder){
    //         builder.select('name');
    //     }
    // });

    // console.log(user);

    const id = 1;
    const videos = await Channel.query().findById(id).select("name").withGraphFetched('video(selectTitle)').modifiers({
        selectTitle(builder){
            builder.select('title');
        }
    });

    console.log(videos);

    // const channel = await User.relatedQuery("channel").for(1).select("name");
    // console.log(channel);
}

run();

// app.use(express.json());
// app.get('/user/:id', async (req, res, next) => {
//     const id = req.params.id;
//     const user = await User.query().findById(id).withGraphFetched('channel');
//     res.json(user);
// });

// app.listen(PORT, () => console.log('hosted on "http://localhost:' + PORT + '"'));