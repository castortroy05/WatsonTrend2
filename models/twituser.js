const Twitter = require('twitter');

const twit = new Twitter({
    consumer_key: 'zDZ6PjzXlfy2M29lsLeF4ylHW',
    consumer_secret: 'QiX8V6dIwGo1U35suYMulwNn1HgtlbdiE5wI27EXa1v1MutZvU',
    access_token_key: '20047218-4k1sHeKv8BYxCYAsppLYkkySmElEqB5490vMFKxBe',
    access_token_secret: 'z5bngaRT4GrXqmxkwtokRRmcC8paM8G16hdj6AA7aM75Z',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAACVsOgEAAAAAqmi9ez6NKcVS713HPlNckw1Kv3A%3DniXCFWwXwpWGa4m8ptq4gM9r0BoTJDmVxm4MNvAtPYRus4V2Gj'
});


let twitGlobal = false;


class TwitterUserModel{



    
    getTrends(){
        var trends = [];
          
  twit.get('trends/place', {id:23424975} , function(err, data){
      console.log('trends are ',data);
    for (var i = 0; i < data.length ; i++) {
        console.log(data);
        trends.push(data[i].name);
        }
      
      console.log('returning', trends);
      
      return trends;
    });


    }
    // getTweets(user){        
    //   var user = user;
    //   var options = { 
    //     screen_name: user.screen_name,
    //     count: 10
    //   };
      
    //   return fetchTweets(options)
    // }
    
    // fetchTweets(options) {
    //   twit.get('statuses/user_timeline', options , function(err, data){
    //     return data.map(tweet => tweet.text)  
    //   }); 
    // }

 getTweets(user){
        
        //var user = user;
        let tweets = [];
        var options = { screen_name: user.screen_name, count: 10 };
        twit.get('statuses/user_timeline', options , function(err, data){
            for (var i = 0; i < 10 ; i++) {tweets.push(data[i].text);}      
                    console.log('inside loop', tweets);
      
       
    });
    
   console.log('outside loop', tweets); 
}

    }



const twt = new TwitterUserModel();
//twt.init();
module.exports = twt;