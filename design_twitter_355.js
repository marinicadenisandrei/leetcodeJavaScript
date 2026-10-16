/* Leetcode - 355. Design Twitter (JavaScript language) - Medium */
const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 355. Design Twitter (JavaScript language) - Medium"));

class Twitter {
  users = {
    1: {
      posts: [],
      followers: []
    },
    2: {
      posts: [],
      followers: []
    }
  };

  postTweet(userId, postId) {
    this.users[userId].posts.push(postId);
  }

  follow(userId, followerId) {
    this.users[userId].followers.push(followerId);
  }

  unfollow(userId, followerId) {
    this.users[userId].followers =
        this.users[userId].followers.filter(id => id !== followerId);
    }

  getNewsFeed(userId) {
    let news = [];

    for (let i = 0; i < this.users[userId].posts.length; i++) {
      news.push(this.users[userId].posts[i]);
    }

    for (let i = 0; i < this.users[userId].followers.length; i++) {
      let followerId = this.users[userId].followers[i];

      for (let j = 0; j < this.users[followerId].posts.length; j++) {
        news.push(this.users[followerId].posts[j]);
      }
    }

    return news;
  }
}

const twitter = new Twitter();

console.log(chalk.green(`Test 1:`));

twitter.postTweet(1, 5); 
console.log(twitter.getNewsFeed(1)); 
twitter.follow(1, 2);    
twitter.postTweet(2, 6); 
console.log(twitter.getNewsFeed(1));
twitter.unfollow(1, 2);  
console.log(twitter.getNewsFeed(1));

console.log("|", chalk.green("Passed"));
