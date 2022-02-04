import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectRender: React.VFC = () => {
  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  } | null;

  const [user, setUser] = useState<User>(null);
  const fetchJSON = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return res.data;
  };

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      const user = await fetchJSON();
      if (isMounted) {
        setUser(user);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
