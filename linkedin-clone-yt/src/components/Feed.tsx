import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption.tsx";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import Post from "./Post.tsx";
import { db } from "./Firebase.tsx";
import {
  DocumentData,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  Timestamp,
  orderBy,
  query
} from "firebase/firestore";

// Define the type for the post object
interface Post {
  id: string;
  data: DocumentData;
}

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState<Post[]>([]); // Explicitly set the type here

  const q = query(collection(db, "posts"), orderBy("timestamp", "desc")); 

  // useEffect hook fires off a piece of specific code when the feed component loads
  // useEffect feeds in a function and a dependency
  // read from db collection, store into posts array
  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({ // having an open parenthesis in the arrow function means implicit return
          id: doc.id,
          data: doc.data(),
        }))
      );
    }); 

    // print out the posts array
    console.log(posts);

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []); // if empty dependency, this code runs once when the feed component loads, and never again

  // define a function to send a post
  const sendPost = (e: any) => {
    // arrow function
    e.preventDefault(); // prevent the page from refreshing, preventing default behaviour

    addDoc(collection(db, "posts"), {
      name: "Jia Yi",
      description: "This is a test",
      message: input,
      photoUrl:
        "https://cdn.discordapp.com/attachments/771380180816101440/974119396870066186/form-background-image.jpg",
      timestamp: serverTimestamp(),
    });

    // clear the input field after sending
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon /> {/** CreateIcon is a material ui icon */}
          <form action="">
            <input
              type="text"
              name=""
              id=""
              // everytime the input changes, it fires off an event, e.target means the input field, value is the value of the input field
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* It's like creating a new class <tag> */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* breaking into two parts, id and data
    data contains informatino like name, des...*/}
      {posts.map(
        ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
          // creating Post component
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
}

export default Feed;
