const {Model} = require('objection')

class Channel extends Model{
    static get tableName(){
        return 'channel';
    }

    static get relationMappings(){
        const Video = require('./video');
        return {
            video: {
                relation: Model.HasManyRelation,
                modelClass: Video,
                join: {
                    from: 'video.channelId',
                    to: 'channel.id',
                },
            },
        };
    }
}

module.exports = Channel;