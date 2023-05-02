function hashtag(post) {
    const regex = /#\w+/g; // matches any word starting with #
    const hashtags = post.match(regex);
    if (!hashtags || hashtags.length === 0) {
      return null;
    }
    const filteredHashtags = hashtags.filter(tag => isNaN(tag.split('#')[1]));
    return filteredHashtags.length > 0 ? filteredHashtags : null;
  }
  
  console.log(hashtag("This is my new post @Wondeful_Day #Blessed Shocked 1love Shocked"));