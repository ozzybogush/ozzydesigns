import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [funnyMessage, setFunnyMessage] = useState('');
  const hashtag = '3Ddesign';

  useEffect(() => {
    const funnyMessages = [
      "Why did the JavaScript developer go broke? Because he used up all his cache!",
      "I told my computer I needed a break, and now it won't stop sending me KitKat bars.",
      "Why was the computer cold? It left its Windows open!",
    ];

    // Change the funny message every minute
    const interval = setInterval(() => {
      const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
      setFunnyMessage(randomMessage);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchPosts = async () => {
    const accessToken = 'YOUR_ACCESS_TOKEN';

    try {
      const hashtagResponse = await axios.get(`https://graph.instagram.com/v12.0/ig_hashtag_search?q=${hashtag}&access_token=${accessToken}`);
      const hashtagId = hashtagResponse.data.data[0].id;

      const mediaResponse = await axios.get(`https://graph.instagram.com/v12.0/${hashtagId}/recent_media?access_token=${accessToken}`);
      setPosts(mediaResponse.data.data);
      setNextPage(mediaResponse.data.paging.next);
      setPrevPage(mediaResponse.data.paging.previous);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    }
  };

  const fetchPrevPage = async () => {
    if (prevPage) {
      try {
        const mediaResponse = await axios.get(prevPage);
        setPosts(mediaResponse.data.data);
        setNextPage(mediaResponse.data.paging.next);
        setPrevPage(mediaResponse.data.paging.previous);
      } catch (error) {
        setError(`Error fetching previous page: ${error.message}`);
      }
    }
  };

  const fetchNextPage = async () => {
    if (nextPage) {
      try {
        const mediaResponse = await axios.get(nextPage);
        setPosts(mediaResponse.data.data);
        setNextPage(mediaResponse.data.paging.next);
        setPrevPage(mediaResponse.data.paging.previous);
      } catch (error) {
        setError(`Error fetching next page: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.funnyMessage}>{funnyMessage}</Text>
      <ScrollView style={styles.contentContainer}>
        <Text>Recent Instagram posts tagged with #{hashtag}:</Text>

      

        {error && <Text style={styles.errorText}>{error}</Text>}

        {prevPage && (
          <Button title="Previous Page" onPress={fetchPrevPage} />
        )}
        {nextPage && (
          <Button title="Next Page" onPress={fetchNextPage} />
        )}

        {posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <Text>{post.caption}</Text>
            <Image source={{ uri: post.media_url }} style={styles.postImage} />
          </View>
        ))}
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  funnyMessage: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
    marginVertical: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
});

export default UserScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
// import AppHeader from '../components/AppHeader';
// import Footer from '../components/Footer';
// import { useNavigation } from '@react-navigation/native';

// const UserScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState(null);
//   const [nextPage, setNextPage] = useState(null);
//   const [prevPage, setPrevPage] = useState(null);
//   const [funnyMessage, setFunnyMessage] = useState('');
//   const hashtag = '3Ddesign';

//   useEffect(() => {
//     const funnyMessages = [
//       "Why did the JavaScript developer go broke? Because he used up all his cache!",
//       "I told my computer I needed a break, and now it won't stop sending me KitKat bars.",
//       "Why was the computer cold? It left its Windows open!",
//     ];

//     // Change the funny message every minute
//     const interval = setInterval(() => {
//       const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
//       setFunnyMessage(randomMessage);
//     }, 60000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const fetchPosts = async () => {
//     const accessToken = 'YOUR_ACCESS_TOKEN';

//     try {
//       const hashtagResponse = await axios.get(`https://graph.instagram.com/v12.0/ig_hashtag_search?q=${hashtag}&access_token=${accessToken}`);
//       const hashtagId = hashtagResponse.data.data[0].id;

//       const mediaResponse = await axios.get(`https://graph.instagram.com/v12.0/${hashtagId}/recent_media?access_token=${accessToken}`);
//       setPosts(mediaResponse.data.data);
//       setNextPage(mediaResponse.data.paging.next);
//       setPrevPage(mediaResponse.data.paging.previous);
//     } catch (error) {
//       setError(`Error fetching data: ${error.message}`);
//     }
//   };

//   const fetchPrevPage = async () => {
//     if (prevPage) {
//       try {
//         const mediaResponse = await axios.get(prevPage);
//         setPosts(mediaResponse.data.data);
//         setNextPage(mediaResponse.data.paging.next);
//         setPrevPage(mediaResponse.data.paging.previous);
//       } catch (error) {
//         setError(`Error fetching previous page: ${error.message}`);
//       }
//     }
//   };

//   const fetchNextPage = async () => {
//     if (nextPage) {
//       try {
//         const mediaResponse = await axios.get(nextPage);
//         setPosts(mediaResponse.data.data);
//         setNextPage(mediaResponse.data.paging.next);
//         setPrevPage(mediaResponse.data.paging.previous);
//       } catch (error) {
//         setError(`Error fetching next page: ${error.message}`);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <AppHeader navigation={navigation} />

//       <ScrollView style={styles.content}>
//         <Text>Recent Instagram posts tagged with #{hashtag}:</Text>

//         <Text style={styles.funnyMessage}>{funnyMessage}</Text>

//         {error && <Text style={styles.error}>{error}</Text>}

//         {prevPage && (
//           <Button title="Previous Page" onPress={fetchPrevPage} />
//         )}
//         {nextPage && (
//           <Button title="Next Page" onPress={fetchNextPage} />
//         )}

//         {posts.map((post, index) => (
//           <View key={index} style={styles.post}>
//             <Text>{post.caption}</Text>
//             <Image source={{ uri: post.media_url }} style={styles.postImage} />
//           </View>
//         ))}
//       </ScrollView>

//       <Footer navigation={navigation} style={styles.footer} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   content: {
//     flex: 1,
//     padding: 16,
//   },
//   funnyMessage: {
//     fontStyle: 'italic',
//     textAlign: 'center',
//   },
//   error: {
//     color: 'red',
//   },
//   post: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     padding: 8,
//     marginVertical: 8,
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
// });

// export default UserScreen;

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, ActivityIndicator, ScrollView, Button, Pressable } from 'react-native';
// import axios from 'axios';
// import LoadingScreen from './LoadingScreen'; 
// import AppHeader from '../components/AppHeader';
// import Footer from '../components/Footer';
// import { useNavigation } from '@react-navigation/native';


// const UserScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [nextPage, setNextPage] = useState(null);
//   const [prevPage, setPrevPage] = useState(null);
//   const [funnyMessage, setFunnyMessage] = useState();
//   const hashtag = '3Ddesign';

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   useEffect(() => {
//     const funnyMessages = [
//       "Why did the JavaScript developer go broke? Because he used up all his cache!",
//       "I told my computer I needed a break, and now it won't stop sending me KitKat bars.",
//       "Why was the computer cold? It left its Windows open!",
//     ];

//      // Change the funny message every minute
//      const interval = setInterval(() => {
//       const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
//       setFunnyMessage(randomMessage);
//     }, 60000);
   
//   }, []);

//   const fetchPosts = async () => {
//     const accessToken = 'YOUR_ACCESS_TOKEN';

//     try {
//       const hashtagResponse = await axios.get(`https://graph.instagram.com/v12.0/ig_hashtag_search?q=${hashtag}&access_token=${accessToken}`);
//       const hashtagId = hashtagResponse.data.data[0].id;

//       const mediaResponse = await axios.get(`https://graph.instagram.com/v12.0/${hashtagId}/recent_media?access_token=${accessToken}`);
//       setPosts(mediaResponse.data.data);
//       setNextPage(mediaResponse.data.paging.next);
//       setPrevPage(mediaResponse.data.paging.previous);

//       setLoading(false);
//     } catch (error) {
//       setError(`Error fetching data: ${error.message}`);
//       setLoading(false);
//     }
//   };

//   const fetchPrevPage = async () => {
//     if (prevPage) {
//       setLoading(true);
//       try {
//         const mediaResponse = await axios.get(prevPage);
//         setPosts(mediaResponse.data.data);
//         setNextPage(mediaResponse.data.paging.next);
//         setPrevPage(mediaResponse.data.paging.previous);
//       } catch (error) {
//         setError(`Error fetching previous page: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const fetchNextPage = async () => {
//     if (nextPage) {
//       setLoading(true);
//       try {
//         const mediaResponse = await axios.get(nextPage);
//         setPosts(mediaResponse.data.data);
//         setNextPage(mediaResponse.data.paging.next);
//         setPrevPage(mediaResponse.data.paging.previous);
//       } catch (error) {
//         setError(`Error fetching next page: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <ScrollView>
//       <AppHeader navigation={navigation}/>
//       <View>
//         <Text>Recent Instagram posts tagged with #{hashtag}:</Text>
    
//          <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>{funnyMessage}</Text>

//         {error && <Text style={{ color: 'red' }}>{error}</Text>}
//         {prevPage && (
//           <Button title="Previous Page" onPress={fetchPrevPage} />
//         )}
//         {nextPage && (
//           <Button title="Next Page" onPress={fetchNextPage} />
//         )}
//       </View>

//       <View style={{ flex: 1 }}>
//       {loading ? (
//         <LoadingScreen /> 
//       ) : (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>User Screen</Text>
//         </View>
//       )}
//        <Footer navigation={navigation} style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}/> 
//     </View>
   
//     </ScrollView>
    
//   );
// };

// export default UserScreen;




// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, ActivityIndicator, ScrollView, Button, Pressable } from 'react-native';
// import axios from 'axios';

// const UserScreen = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [nextPage, setNextPage] = useState(null);
//   const [prevPage, setPrevPage] = useState(null);
//   const [funnyMessage, setFunnyMessage] = useState('Press Space to Play');
//   const [gameActive, setGameActive] = useState(false);
//   const [jump, setJump] = useState(false);
//   const gameInterval = useRef(null);
//   const playerPosition = useRef(0);
//   const playerSpeed = useRef(1);
//   const barrierPosition = useRef(100);
//   const barrierSize = useRef(40);
//   const hashtag = '3Ddesign';

//   const handleSpacebar = () => {
//     if (gameActive) {
//       if (jump) {
//         playerSpeed.current = 1;
//         barrierSize.current = 40;
//       } else {
//         playerSpeed.current = 2;
//         barrierSize.current = 60;
//       }
//       setJump(!jump);
//     } else {
//       setGameActive(true);
//       startGame();
//     }
//   };

//   const startGame = () => {
//     gameInterval.current = setInterval(() => {
//       playerPosition.current += playerSpeed.current;
//       barrierPosition.current -= 1;

//       if (barrierPosition.current < -barrierSize.current) {
//         barrierPosition.current = 100;
//       }

//       if (playerPosition.current >= barrierPosition.current && playerPosition.current <= barrierPosition.current + barrierSize.current) {
//         clearInterval(gameInterval.current);
//         setGameActive(false);
//       }
//     }, 30);
//   };

//   useEffect(() => {
//     const funnyMessages = [
//       "Why did the JavaScript developer go broke? Because he used up all his cache!",
//       "I told my computer I needed a break, and now it won't stop sending me KitKat bars.",
//       "Why was the computer cold? It left its Windows open!",
//     ];

//     const interval = setInterval(() => {
//       const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
//       setFunnyMessage(randomMessage);
//     }, 60000);

//     return () => {
//       clearInterval(interval);
//       if (gameInterval.current) {
//         clearInterval(gameInterval.current);
//       }
//     };
//   }, []);

//   const fetchPosts = async () => {
//     const accessToken = 'YOUR_ACCESS_TOKEN';

//     try {
//       const hashtagResponse = await axios.get(`https://graph.instagram.com/v12.0/ig_hashtag_search?q=${hashtag}&access_token=${accessToken}`);
//       const hashtagId = hashtagResponse.data.data[0].id;

//       const mediaResponse = await axios.get(`https://graph.instagram.com/v12.0/${hashtagId}/recent_media?access_token=${accessToken}`);
//       setPosts(mediaResponse.data.data);
//       setNextPage(mediaResponse.data.paging.next);
//       setPrevPage(mediaResponse.data.paging.previous);

//       setLoading(false);
//     } catch (error) {
//       setError(`Error fetching data: ${error.message}`);
//       setLoading(false);
//     }
//   };

//   const fetchPrevPage = async () => {
//     if (prevPage) {
//       setLoading(true);
//       try {
//         const mediaResponse = await axios.get(prevPage);
//         setPosts(mediaResponse.data.data);
//         setNextPage(mediaResponse.data.paging.next);
//         setPrevPage(mediaResponse.data.paging.previous);
//       } catch (error) {
//         setError(`Error fetching previous page: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const fetchNextPage = async () => {
//     if (nextPage) {
//       setLoading(true);
//       try {
//         const mediaResponse = await axios.get(nextPage);
//         setPosts(mediaResponse.data.data);
//         setNextPage(mediaResponse.data.paging.next);
//         setPrevPage(mediaResponse.data.paging.previous);
//       } catch (error) {
//         setError(`Error fetching next page: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <ScrollView>
//       <View>
//         <Text>Recent Instagram posts tagged with #{hashtag}:</Text>
//         {error && <Text style={{ color: 'red' }}>{error}</Text>}
//         <Pressable onPress={handleSpacebar} style={{ alignItems: 'center' }}>
//           {gameActive ? (
//             <Text style={{ fontSize: 20, color: jump ? 'blue' : 'red' }}>Press Space to Jump</Text>
//           ) : (
//             <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>{funnyMessage}</Text>
//           )}
//         </Pressable>
//         {posts.map(post => (
//           <View key={post.id}>
//             <Text>{post.caption}</Text>
//           </View>
//         ))}
//         {prevPage && (
//           <Button title="Previous Page" onPress={fetchPrevPage} />
//         )}
//         {nextPage && (
//           <Button title="Next Page" onPress={fetchNextPage} />
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default UserScreen;












// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
// import axios from 'axios';
// import cheerio from 'cheerio';
// import AppHeader from '../components/AppHeader';

// const UserScreen = () => {
//   <AppHeader navigation={navigation}/>
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSelectorPress = (id) => {
//     // Handle the press on the selector item
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://www.google.com/search?sca_esv=577693505&q=3D+designs&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjy1tOG3JyCAxVxk2oFHZd1AdIQ0pQJegQIDBAB&biw=739&bih=747&dpr=2');
//         const $ = cheerio.load(response.data);

//         const scrapedData = [];

//         // Replace 'your-selector' with the appropriate CSS selector for the data you want to scrape
//         $('your-selector').each((index, element) => {
//           const title = $(element).find('your-title-selector').text();
//           const imageUrl = $(element).find('your-image-selector').attr('src');

//           scrapedData.push({ id: index, title, image: imageUrl });
//         });

//         setData(scrapedData);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <Text>Error: {error.message}</Text>;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Select a Category</Text>
//       <View style={styles.selectorGrid}>
//         {data.map((item) => (
//           <Pressable
//             key={item.id}
//             style={styles.selectorItem}
//             android_ripple={{ color: 'lightgray' }}
//             onPress={() => handleSelectorPress(item.id)}
//           >
//             <Image
//               source={{ uri: item.image }}
//               style={styles.selectorImage}
//             />
//             <Text style={styles.selectorTitle}>{item.title}</Text>
//           </Pressable>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   selectorGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   selectorItem: {
//     width: '48%',
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   selectorImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'cover',
//     borderRadius: 8,
//   },
//   selectorTitle: {
//     marginTop: 8,
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default UserScreen;














// import React, { Component } from 'react';
// import { View, Text, Image, Dimensions, FlatList } from 'react-native';
// import axios from 'axios';
// // TODO Get these into system environments and fetch by $appId and so on
// const appId = ''; // Replace with your Facebook App ID
// const appSecret = ''; // Replace with your Facebook App Secret
// const username = ''; // Replace with the Instagram username you want to fetch posts from

// export default class UserScreen extends Component {
//   state = {
//     loaded: false,
//     data: [],
//   };

//   async componentDidMount() {
//     // Fetch the access token
//     const accessToken = await this.fetchAccessToken();

//     if (accessToken) {
//       // Use the access token to fetch user posts
//       await this.fetchUserPosts(accessToken);
//     } else {
//       console.error('Error fetching access token: Access token is empty.');
//     }
//   }

//   async fetchAccessToken() {
//     try {
//       const response = await axios.get(
//         `https://graph.facebook.com/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`
//       );

//       if (response.status === 200) {
//         const accessToken = response.data.access_token;
//         console.log(accessToken)
//         return accessToken;
//       } else {
//         console.error('Error fetching access token: Invalid response status');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error fetching access token:', error);
//       return null;
//     }
//   }

//   async fetchUserPosts(accessToken) {
//     try {
//       const response = await axios.get(
//         `https://graph.instagram.com/v12.0/${username}?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
//         // https://graph.instagram.com/v12.0/vintagevibelover/media?fields=id,media_type,media_url,caption,thumbnail_url,permalink,timestamp&access_token=YOUR_ACCESS_TOKEN

//         );

//       if (response.status === 200) {
//         const posts = response.data;
//         this.setState({
//           loaded: true,
//           data: posts,
//         });
//       } else {
//         console.error('Error fetching user posts: Invalid response status');
//       }
//     } catch (error) {
//       console.error('Error fetching user posts:', error);
//     }
//   }

//   createPost(postInfo) {
//     const imageUri = postInfo.media_url;

//     return (
//       <View>
//         <Image style={styles.image} source={{ uri: imageUri }} />
//       </View>
//     );
//   }

//   render() {
//     // TODO: Improve to aesthetic spinner, otherwise works fine. Since insta graph api has not yet integrated, enable only when spinner feature is added
//     // if (!this.state.loaded) {
//     //   return (
//     //     <View>
//     //       <Text>Loading...</Text>
//     //     </View>
//     //   );
//     // }

//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => this.createPost(item)}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     );
//   }
// }

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: '#ecf0f1',
//     alignItems: 'center',
//     paddingTop: 20, // Adjust as needed
//   },
//   image: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').width,
//   },
// };
