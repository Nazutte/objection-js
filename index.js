const dbSetup = require('./db/db-setup');
const express = require('express');
const User = require('./db/models/user');
const { tableName, relatedQuery } = require('./db/models/channel');
const app = express();
const PORT = 5000;

dbSetup();

async function run(){
    const id = 1;
    const user = await User.query().findById(id).select("name").withGraphFetched('channel(selectName)').modifiers({
        selectName(builder){
            builder.select('name');
        }
    });
    // // const username = await User.query().select("name", "channelId").where("id", id);
    console.log(user);

    // SELECT user.name, channel.name FROM user JOIN user.channelId, channel.id

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