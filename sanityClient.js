import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'sdmve23j', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'skoctbT8mkxjwomehcjtBN51WHEELsrafFKEwpBpldVx6M7e6tpn56ec9yRny8lwg5AfCoYT2zNHrNSE8OZPoY6Yv4Na09mCMvyVbvfZmGmoaHFTFRaxIZsR3rrSH1jxjfuSHyWcuuLmUFJlJHomdxxaO8WY7LE0qxbA3YvdbfcwoTW0lOc7', // Replace with your Sanity API token
});


export default client;
