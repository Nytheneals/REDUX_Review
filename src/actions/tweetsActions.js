import axios from "axios";

// FETCH TWEETS
export function fetchTweets() {
  return function(dispatch) {
    axios
      .get("http://rest.learncode.academy/api/reacttest/tweets")
      .then(response => {
        // ACTION TWO
        dispatch({ type: "FETCH_TWEETS_FULFILLED", payload: response.data });
      })
      .catch(err => {
        // ACTION THREE
        dispatch({ type: "FETCH_TWEETS_REJECTED", payload: err });
      });
  };
}

// ADD TWEETS

export function addTweet(id, text) {
  return {
    type: "ADD_TWEET",
    payload: {
      id,
      text
    }
  };
}

// UPDATE TWEETS

export function updateTweet(id, text) {
  return {
    type: "UPDATE_TWEET",
    payload: {
      id,
      text
    }
  };
}

// DELETE A TWEET
export function deleteTweet(id) {
  return { type: "DELETE_TWEET", payload: id };
}
