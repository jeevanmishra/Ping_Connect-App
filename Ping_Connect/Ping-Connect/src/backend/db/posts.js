/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "2da09c9f-11ef-447c-96d7-d2e993d6ebcf",
    content:
      "Today, I took a moment to appreciate the simple joys in life - a warm cup of coffee and a breathtaking sunrise. It reminded me of the beauty that surrounds us each day.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "axel@example.com",
    bookmark: [],
    comments: [
      {
        _id: "4adf49d2-70c5-4877-b3f8-8d69ab80fa4e",
        username: "henry@example.com",
        text: "I completely resonate with your sentiment. It's in these small moments of appreciation that we find true happiness.",
      },
    ],
    createdAt: "2023-05-20T02:34:56Z",
    updatedAt: "2023-06-20T12:34:56Z",
    id: "1",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688795223/_a5f5a2e4-5453-4b00-9593-def9527c98ba_zzvvsf.jpg",
    mediaAlt: "sunshine",
  },
  {
    _id: "d3b6ad7f-eb3b-4d89-89aa-c87ddc44f95f",
    content:
      "Attended an amazing live music concert last night! The energy, melodies, and collective joy were electrifying. Music unites and uplifts us all",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: "2023-01-08T02:59:00.000Z",
          updatedAt: "2023-02-26T23:42:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
          bookmarks: [],
          firstName: "Bob",
          lastName: "Davis",
          username: "bob@example.com",
          password: "bob123",
          userHandler: "bobdavis",
          bio: "Tech geek and problem solver",
          link: "https://peerlist.io/bobdavis",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
          createdAt: "2023-03-23T00:48:00.000Z",
          updatedAt: "2023-04-06T06:01:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "alice@example.com",
    bookmark: [],
    comments: [
      {
        _id: "6af8baca-f517-4af7-ba7d-db965898112c",
        username: "emma@example.com",
        text: "You are enjoying life.",
      },
    ],
    createdAt: "2023-04-02T15:00:00.000Z",
    updatedAt: "2023-05-18T21:22:00.000Z",
    id: "2",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688795452/_92d2f395-a9ca-4343-a7e3-9fe56a6dc80b_k3td7b.jpg",
    mediaAlt: "concert",
  },
  {
    _id: "e8e618f3-36d9-44ea-a208-68a739feb156",
    content:
      "Jamming to my favorite band's new album on repeat. The melodies and lyrics are simply captivating.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-03-05T13:42:00.000Z",
          updatedAt: "2023-06-12T23:50:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "david@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-03-03T04:40:00.000Z",
    updatedAt: "2023-05-31T15:24:00.000Z",
    id: "3",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688795456/_14425564-63b4-46ec-8921-2ca1fef89d4b_ibuaiq.jpg",
    mediaAlt: "baloons",
  },
  {
    _id: "4d5350e6-6b47-4170-b3d8-c7dd167d231d",
    content: "All the wonders you seek are within yourself.",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: "2023-03-27T06:09:00.000Z",
          updatedAt: "2023-05-20T14:35:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
          bookmarks: [],
          firstName: "Bob",
          lastName: "Davis",
          username: "bob@example.com",
          password: "bob123",
          userHandler: "bobdavis",
          bio: "Tech geek and problem solver",
          link: "https://peerlist.io/bobdavis",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
          createdAt: "2023-05-03T03:03:00.000Z",
          updatedAt: "2023-06-28T18:41:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "934ea419-311d-4d9a-8e38-675f2e80d81f",
          bookmarks: [],
          firstName: "Charlie",
          lastName: "Wilson",
          username: "charlie@example.com",
          password: "charlie123",
          userHandler: "charliewilson",
          bio: "Business strategist and entrepreneur",
          link: "https://peerlist.io/charliewilson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
          createdAt: "2023-01-28T17:17:00.000Z",
          updatedAt: "2023-05-01T02:20:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "b7d855c4-e33a-4093-80bd-1d9a7fcf932d",
          bookmarks: [],
          firstName: "David",
          lastName: "Taylor",
          username: "david@example.com",
          password: "david123",
          userHandler: "davidtaylor",
          bio: "Finance professional with a knack for numbers",
          link: "https://peerlist.io/davidtaylor",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
          createdAt: "2023-02-07T00:48:00.000Z",
          updatedAt: "2023-04-23T02:51:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "alice@example.com",
    bookmark: [],
    comments: [
      {
        _id: "2a775d90-e33e-41f0-8af2-00f2f7d3e0a4",
        username: "emily@example.com",
        text: "Amen! Girl...",
      },
      {
        _id: "07af9e47-bd3d-4515-af55-a3fe5241bcf1",
        username: "grace@example.com",
        text: "Hard work pays off.",
      },
      {
        _id: "d16c74f8-bf9e-4d90-8378-9214138ad0de",
        username: "henry@example.com",
        text: "Oh such beautiful words.",
      },
    ],
    createdAt: "2023-03-06T14:25:00.000Z",
    updatedAt: "2023-04-11T04:13:00.000Z",
    id: "4",
    media: "",
    mediaAlt: "",
  },
  {
    _id: "47f7db35-0b9c-488d-bd3d-01caefd5259d",
    content:
      "Just started watching this new anime series, and I'm already hooked! The animation and storyline are top-notch.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alice@example.com",
    bookmark: [],
    comments: [
      {
        _id: "96c87680-88a2-41ce-ad84-07ae9df19be6",
        username: "grace@example.com",
        text: "I binged the entire series in one sitting! The characters are so well-developed. Can't wait for the next season!",
      },
    ],
    createdAt: "2023-05-15T15:34:00.000Z",
    updatedAt: "2023-06-30T22:00:00.000Z",
    id: "5",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688795610/_83da603f-b2e3-4acc-9235-790c99429e16_evqqmt.jpg",
    mediaAlt: "anime",
  },
  {
    _id: "c2d3aec5-ceb8-4ca8-a6dd-987d5d33e803",
    content: "Believe in yourself, work hard, and you'll achieve greatness!",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
          bookmarks: [],
          firstName: "Henry",
          lastName: "Smith",
          username: "henry@example.com",
          password: "henry123",
          userHandler: "henrysmith",
          bio: "Marketing professional with a creative edge",
          link: "https://peerlist.io/henrysmith",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
          createdAt: "2023-04-03T22:01:00.000Z",
          updatedAt: "2023-05-19T13:15:00.000Z",
          following: [
            {
              firstName: "Axel",
              lastName: "Blaze",
              username: "axel@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
          ],
          followers: [
            {
              firstName: "Axel",
              lastName: "Blaze",
              username: "axel@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-05-13T09:45:00.000Z",
          updatedAt: "2023-06-21T12:22:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "bob@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-02-30T00:40:00.000Z",
    updatedAt: "2023-04-06T15:14:00.000Z",
    id: "6",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688795766/_fe2a6548-7a3a-4bb2-a801-19773acc03d0_qaohqk.jpg",
    mediaAlt: "motivation",
  },
  {
    _id: "7c57a310-d4f3-4500-babc-b3f98ae222cc",
    content:
      "AI-powered voice assistants are becoming increasingly smarter and more helpful. Just asked mine to play my favorite playlist, and it nailed it!",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
          bookmarks: [],
          firstName: "Grace",
          lastName: "Miller",
          username: "grace@example.com",
          password: "grace123",
          userHandler: "gracemiller",
          bio: "HR professional with a passion for employee well-being",
          link: "https://peerlist.io/gracemiller",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
          createdAt: "2023-01-06T18:26:00.000Z",
          updatedAt: "2023-02-12T20:33:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "charlie@example.com",
    bookmark: [],
    comments: [
      {
        _id: "8d087025-3520-43e5-b22b-1b3ac29ff4fd",
        username: "henry@example.com",
        text: "I rely on my voice assistant for so many things! It's like having a personal assistant at my fingertips.",
      },
    ],
    createdAt: "2023-03-04T15:12:00.000Z",
    updatedAt: "2023-04-11T05:53:00.000Z",
    id: "7",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688795908/_2b926459-d19a-488f-91ed-80aa6098829a_mgmmqc.jpg",
    mediaAlt: "music",
  },
  {
    _id: "95ab3946-f0d8-40de-a40d-a945a7e252da",
    content:
      "Virtual reality is taking entertainment to a whole new level. Just tried out an immersive VR game, and it was mind-blowing!",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-04-20T02:14:00.000Z",
          updatedAt: "2023-05-09T06:44:00.000Z",
          followers: [],
          following: [],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: "2023-03-27T08:38:00.000Z",
          updatedAt: "2023-04-19T02:46:00.000Z",
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "david@example.com",
    bookmark: [],
    comments: [
      {
        _id: "3065cc57-6b01-470c-82f8-975b1e068a89",
        username: "grace@example.com",
        text: "I've been curious about VR gaming. Which headset did you use? Any game recommendations?",
      },
    ],
    createdAt: "2023-03-23T09:10:00.000Z",
    updatedAt: "2023-04-16T23:42:00.000Z",
    id: "8",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688796007/_f1b24dba-7b30-412b-9371-54fc15924b3d_jpy5ac.jpg",
    mediaAlt: "virtual-reality",
  },
  {
    _id: "f3d65bb7-ecec-42f7-b11a-1061868af494",
    content:
      "Hiking through the mountains was an exhilarating adventure. The breathtaking views made every step worthwhile.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: "2022-12-23T04:52:00.000Z",
          updatedAt: "2023-02-03T03:11:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "bob@example.com",
    bookmark: [],
    comments: [
      {
        _id: "1a183575-770d-46bb-97cb-3690d2c7da31",
        username: "frank@example.com",
        text: "Nature's beauty is unparalleled! Which mountain range did you explore? I'm an avid hiker too.",
      },
    ],
    createdAt: "2023-04-16T23:44:00.000Z",
    updatedAt: "2023-05-21T00:27:00.000Z",
    id: "9",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688796126/_8d4475aa-39e4-4754-93e4-050d8df045fa_vrob06.jpg",
    mediaAlt: "hiking",
  },
  {
    _id: "0c2fd14b-3449-4759-b3e5-d4c2068f6542",
    content:
      "Spent the weekend gardening and connecting with nature. The tranquility of tending to plants is truly therapeutic.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
          bookmarks: [],
          firstName: "Grace",
          lastName: "Miller",
          username: "grace@example.com",
          password: "grace123",
          userHandler: "gracemiller",
          bio: "HR professional with a passion for employee well-being",
          link: "https://peerlist.io/gracemiller",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
          createdAt: "2023-03-03T19:28:00.000Z",
          updatedAt: "2023-04-23T03:49:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "charlie@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-05-22T12:31:00.000Z",
    updatedAt: "2023-06-06T12:10:00.000Z",
    id: "10",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688796262/_2fd062e3-4096-400f-bf3d-355fa7e9e472_eyfdkw.jpg",
    mediaAlt: "plants",
  },
  {
    _id: "bdefe41b-9038-4a95-b73c-8460a09424f7",
    content:
      "Visited an art exhibition today and was blown away by the creativity and talent on display. Art truly speaks to the soul. ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: "2023-05-11T07:46:00.000Z",
          updatedAt: "2023-06-04T23:15:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-05-24T13:43:00.000Z",
          updatedAt: "2023-06-24T11:09:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "frank@example.com",
    bookmark: [],
    comments: [
      {
        _id: "052c094b-a9cc-4dd2-83e5-8707bda7f7a6",
        username: "henry@example.com",
        text: "I'm an art enthusiast too! Which artist's work impressed you the most at the exhibition?",
      },
      {
        _id: "83aaa639-e329-4893-ad68-8daa582f584f",
        username: "grace@example.com",
        text: "I'm comming with you next time.",
      },
    ],
    createdAt: "2023-05-21T10:11:00.000Z",
    updatedAt: "2023-06-15T17:05:00.000Z",
    id: "11",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688796423/_ef5dcb1f-a66f-4183-8661-583ca2bea83c_f0byp8.jpg",
    mediaAlt: "art",
  },
  {
    _id: "c509053a-a64e-4287-8161-e4e81801d40f",
    content:
      "Just finished reading an incredible sci-fi novel that kept me on the edge of my seat till the very end. Highly recommended!",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
          bookmarks: [],
          firstName: "Henry",
          lastName: "Smith",
          username: "henry@example.com",
          password: "henry123",
          userHandler: "henrysmith",
          bio: "Marketing professional with a creative edge",
          link: "https://peerlist.io/henrysmith",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
          createdAt: "2023-05-25T23:07:00.000Z",
          updatedAt: "2023-06-04T14:30:00.000Z",
          following: [
            {
              firstName: "Axel",
              lastName: "Blaze",
              username: "axel@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
          ],
          followers: [
            {
              firstName: "Axel",
              lastName: "Blaze",
              username: "axel@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "emma@example.com",
    bookmark: [],
    comments: [
      {
        _id: "fd70a16b-636c-47ee-9add-fd27e354c8fb",
        username: "alice@example.com",
        text: "I love sci-fi! What's the title of the book? Looking for my next thrilling read. ",
      },
    ],
    createdAt: "2023-04-26T11:21:00.000Z",
    updatedAt: "2023-05-10T18:36:00.000Z",
    id: "12",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688796815/_977b7d5a-d22e-4752-9762-20295a1ecabf_a3xwoh.jpg",
    mediaAlt: "books",
  },
  {
    _id: "cfbe7824-6255-4108-b550-bfd022d3123a",
    content:
      "Took up painting as a hobby, and it has unleashed my creativity in incredible ways. Art truly has no boundaries. ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
          bookmarks: [],
          firstName: "Bob",
          lastName: "Davis",
          username: "bob@example.com",
          password: "bob123",
          userHandler: "bobdavis",
          bio: "Tech geek and problem solver",
          link: "https://peerlist.io/bobdavis",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
          createdAt: "2023-05-17T06:02:00.000Z",
          updatedAt: "2023-06-11T02:44:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: "2023-02-18T06:53:00.000Z",
          updatedAt: "2023-03-09T13:12:00.000Z",
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "grace@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-05-20T20:10:00.000Z",
    updatedAt: "2023-06-19T04:39:00.000Z",
    id: "13",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688797098/_50d8e9ae-476e-4ff5-84e2-a8ab9da68712_zt2wfl.jpg",
    mediaAlt: "painting",
  },
  {
    _id: "5c984e2a-af8d-4359-a93f-7e71dab78a1a",
    content:
      "Spent the evening stargazing and contemplating the vastness of the universe. The night sky never fails to inspire wonder. ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
          bookmarks: [],
          firstName: "Henry",
          lastName: "Smith",
          username: "henry@example.com",
          password: "henry123",
          userHandler: "henrysmith",
          bio: "Marketing professional with a creative edge",
          link: "https://peerlist.io/henrysmith",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
          createdAt: "2023-05-30T20:56:00.000Z",
          updatedAt: "2023-06-19T18:53:00.000Z",
          following: [
            {
              firstName: "Axel",
              lastName: "Blaze",
              username: "axel@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
          ],
          followers: [
            {
              firstName: "Axel",
              lastName: "Blaze",
              username: "axel@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-03-02T16:32:00.000Z",
          updatedAt: "2023-04-02T00:42:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "alice@example.com",
    bookmark: [],
    comments: [
      {
        _id: "968ea307-59ef-4baf-b6bd-bbc6787e7baa",
        username: "bob@example.com",
        text: "Stargazing is magical!",
      },
    ],
    createdAt: "2023-01-16T14:46:00.000Z",
    updatedAt: "2023-06-06T09:00:00.000Z",
    id: "14",
    media: "https://res.cloudinary.com/dkay6uocg/image/upload/v1688797396/_7e0a704e-1e61-469c-85ae-ba8de9c18895_hlwpfu.jpg",
    mediaAlt: "stargazing",
  },
  {
    _id: "7dad3e75-a001-4273-972d-83eb6c12cc28",
    content:
      "Finally finished renovating my workspace. It's now an inspiring and organized haven for productivity.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-02-10T01:58:00.000Z",
          updatedAt: "2023-05-04T22:47:00.000Z",
          followers: [],
          following: [],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: "2023-05-11T16:09:00.000Z",
          updatedAt: "2023-06-27T10:36:00.000Z",
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "bob@example.com",
    bookmark: [],
    comments: [
      {
        _id: "84813043-d5cc-4bbf-a8a3-3429873237b3",
        username: "grace@example.com",
        text: "Your workspace looks amazing! Any tips for creating a productive environment? I'm in dire need of an upgrade.",
      },
    ],
    createdAt: "2023-02-03T15:27:00.000Z",
    updatedAt: "2023-06-05T04:40:00.000Z",
    id: "15",
    media:
      "",
    mediaAlt: "",
  },
  {
    _id: "30496488-8a0d-416a-a44a-d3ed562937f4",
    content:
      "Just started learning a new language, and it's both challenging and exciting. Can't wait to converse fluently one day! ",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
          bookmarks: [],
          firstName: "Grace",
          lastName: "Miller",
          username: "grace@example.com",
          password: "grace123",
          userHandler: "gracemiller",
          bio: "HR professional with a passion for employee well-being",
          link: "https://peerlist.io/gracemiller",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
          createdAt: "2023-02-12T18:54:00.000Z",
          updatedAt: "2023-03-03T17:49:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "charlie@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-05-20T05:49:00.000Z",
    updatedAt: "2023-06-05T15:39:00.000Z",
    id: "16",
    media:
      "",
    mediaAlt: "",
  },
  {
    _id: "0c2431bb-e391-41ee-b46e-f82a53c637ab",
    content:
      "Web development pro tip: The best debugging tool is a cup of coffee and a deep sense of despair.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: "2023-05-06T21:19:00.000Z",
          updatedAt: "2023-06-01T12:42:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: "2023-04-20T00:56:00.000Z",
          updatedAt: "2023-06-11T00:22:00.000Z",
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "david@example.com",
    bookmark: [],
    comments: [
      {
        _id: "46093bb0-4281-40c7-814e-0e2a50937319",
        username: "henry@example.com",
        text: "#SED_LYF",
      },
    ],
    createdAt: "2023-02-19T07:59:00.000Z",
    updatedAt: "2023-03-01T10:02:00.000Z",
    id: "17",
    media:
      "",
    mediaAlt: "",
  },
  {
    _id: "d4e1fada-f546-4d05-8cf8-53f48c473d27",
    content:
      "CSS: Cascading Style Sheets or Constantly Stressed Stylesheets? You decide.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-01-22T23:02:00.000Z",
          updatedAt: "2023-04-08T12:05:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-05-12T03:38:00.000Z",
    updatedAt: "2023-05-21T13:42:00.000Z",
    id: "18",
    media:
      "https://res.cloudinary.com/dkay6uocg/image/upload/v1688797575/_aee7c44d-ece3-44fe-9ec1-0500d587812a_dgonoc.jpg",
    mediaAlt: "css",
  },
  {
    _id: "5300e5d2-c94f-4951-8db6-630cf0794070",
    content:
      "The best part about web development is watching your beautifully designed website break in Internet Explorer. ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-03-23T04:51:00.000Z",
          updatedAt: "2023-04-25T00:12:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-04-03T05:04:00.000Z",
    updatedAt: "2023-05-05T18:56:00.000Z",
    id: "19",
    media:
      "",
    mediaAlt: "",
  },
  {
    _id: "8aae6c57-e5e4-4d15-8a89-7bbe3c0cf82d",
    content:
      "When CSS floats don't cooperate, just imagine them as your hopes and dreams drifting away. ",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: "2023-04-03T15:41:00.000Z",
          updatedAt: "2023-05-24T04:38:00.000Z",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-02-23T06:18:00.000Z",
    updatedAt: "2023-03-01T01:05:00.000Z",
    id: "20",
    media:
      "",
    mediaAlt: "",
  },
  {
    _id: "8b063781-6c7e-4724-abf6-84fc6e82f582",
    content:
      "Success is not the key to happiness. Happiness is the key to success.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-04-03T22:15:00.000Z",
    updatedAt: "2023-05-22T15:04:00.000Z",
    id: "21",
    media: "",
    mediaAlt: "",
  },
  {
    _id: "73e82a93-e9e1-47fa-80e4-59f71a29e4a5",
    content:
      "Web development is like building a sandcastle at the beach. The moment you're satisfied with it, a wave of browser updates washes it away. ",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: "2023-05-05T02:08:00.000Z",
          updatedAt: "2023-05-05T17:14:00.000Z",
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: "2023-05-24T17:38:00.000Z",
    updatedAt: "2023-06-14T19:06:00.000Z",
    id: "22",
    media: "https://res.cloudinary.com/dkay6uocg/video/upload/v1688797962/production_id_4629779_240p_ynfch1.mp4",
    mediaAlt: "css-stress",
  },
];
