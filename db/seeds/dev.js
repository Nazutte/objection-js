/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  // Deletes ALL existing entries
  await knex('channel').insert([
    {
      id: 1,
      name: 'channel1'
    },
    {
      id: 2,
      name: 'channel2'
    }
  ]);

  await knex('user').insert([
    {
      id: 1,
      name: 'user1',
      email: 'test@gmail.com',
      channelId: 1
    },
    {
      id: 2,
      name: 'user2',
      email: 'test2@gmail.com',
      channelId: 2
    },
    {
      id: 3,
      name: 'user3',
      email: 'test3@gmail.com'
    }
  ]);

  return knex('video').insert([
    {
      id: 1,
      title: 'video1ByUser1',
      channelId: 1
    },
    {
      id: 2,
      title: 'video2ByUser1',
      channelId: 1
    },
    {
      id: 3,
      title: 'video1ByUser2',
      channelId: 2
    }
  ]);
};
