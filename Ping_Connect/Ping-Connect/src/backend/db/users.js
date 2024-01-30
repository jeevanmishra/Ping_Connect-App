/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "a58683d3-43fa-4594-a89a-57c6ad9dd444",
    bookmarks: [],
    firstName: "Axel",
    lastName: "Blaze",
    username: "axel@example.com",
    password: "axel123",
    banner:"https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userHandler: "axel98",
    bio: "Passionate about entrepreneurship",
    link: "https://peerlist.io/axel98",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    following: [
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        username: "alice@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
        _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
      },
    ],
    followers: [
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
      {
        firstName: "Grace",
        lastName: "Miller",
        username: "grace@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
        _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
      },
    ],
  },
  {
    _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
    bookmarks: [],
    firstName: "Henry",
    lastName: "Smith",
    username: "henry@example.com",
    password: "henry123",
    banner:"https://images.unsplash.com/photo-1515120138944-8b31a82f995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    userHandler: "henrysmith",
    bio: "Marketing professional with a creative edge",
    link: "https://peerlist.io/henrysmith",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    following: [
      {
        firstName: "Axel",
        lastName: "Blaze",
        username: "axel@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
        _id: "a58683d3-43fa-4594-a89a-57c6ad9dd444",
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        username: "alice@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
        _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
      },
    ],
    followers: [
      {
        firstName: "Axel",
        lastName: "Blaze",
        username: "axel@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
        _id: "a58683d3-43fa-4594-a89a-57c6ad9dd444",
      },
      {
        firstName: "Bob",
        lastName: "Davis",
        username: "bob@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
        _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
      },
      {
        firstName: "Frank",
        lastName: "Brown",
        username: "frank@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
        _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        username: "alice@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
        _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
      },
      {
        firstName: "Charlie",
        lastName: "Wilson",
        username: "charlie@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
        _id: "934ea419-311d-4d9a-8e38-675f2e80d81f",
      },
    ],
  },
  {
    _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
    bookmarks: [],
    firstName: "Alice",
    lastName: "Johnson",
    username: "alice@example.com",
    password: "alice123",
    banner:"https://images.unsplash.com/photo-1526234539150-ccc7209dff3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userHandler: "alicejohnson",
    bio: "Passionate about creating meaningful user experiences",
    link: "https://peerlist.io/alicejohnson",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    following: [
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
    ],
    followers: [
      {
        firstName: "David",
        lastName: "Taylor",
        username: "david@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
        _id: "b7d855c4-e33a-4093-80bd-1d9a7fcf932d",
      },
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
      {
        firstName: "Frank",
        lastName: "Brown",
        username: "frank@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
        _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
      },
      {
        firstName: "Axel",
        lastName: "Blaze",
        username: "axel@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
        _id: "a58683d3-43fa-4594-a89a-57c6ad9dd444",
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
    banner:"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userHandler: "bobdavis",
    bio: "Tech geek and problem solver",
    link: "https://peerlist.io/bobdavis",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    following: [
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
    ],
    followers: [
      {
        firstName: "David",
        lastName: "Taylor",
        username: "david@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
        _id: "b7d855c4-e33a-4093-80bd-1d9a7fcf932d",
      },
      {
        firstName: "Frank",
        lastName: "Brown",
        username: "frank@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
        _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
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
    banner:"https://images.unsplash.com/photo-1527293797671-06c3be34418f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userHandler: "charliewilson",
    bio: "Business strategist and entrepreneur",
    link: "https://peerlist.io/charliewilson",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    following: [
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
    ],
    followers: [
      {
        firstName: "Frank",
        lastName: "Brown",
        username: "frank@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
        _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
      },
    ],
  },
  {
    _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
    bookmarks: [],
    firstName: "Grace",
    lastName: "Miller",
    username: "grace@example.com",
    password: "grace123",
    banner:"https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userHandler: "gracemiller",
    bio: "HR professional with a passion for employee well-being",
    link: "https://peerlist.io/gracemiller",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    followers: [],
    following: [
      {
        _id: "a58683d3-43fa-4594-a89a-57c6ad9dd444",
        firstName: "Axel",
        lastName: "Blaze",
        username: "axel@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
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
    banner:"https://images.unsplash.com/photo-1626957548545-e62a91783287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    userHandler: "emmathomas",
    bio: "Creative designer with a passion for aesthetics",
    link: "https://peerlist.io/emmathomas",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    followers: [],
    following: [],
  },
  {
    _id: "b7d855c4-e33a-4093-80bd-1d9a7fcf932d",
    bookmarks: [],
    firstName: "David",
    lastName: "Taylor",
    username: "david@example.com",
    password: "david123",
    banner:"https://images.unsplash.com/flagged/photo-1567400358593-9e6382752ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userHandler: "davidtaylor",
    bio: "Finance professional with a knack for numbers",
    link: "https://peerlist.io/davidtaylor",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    followers: [],
    following: [
      {
        firstName: "Alice",
        lastName: "Johnson",
        username: "alice@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
        _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
      },
      {
        firstName: "Bob",
        lastName: "Davis",
        username: "bob@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
        _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
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
    banner:"https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userHandler: "frankbrown",
    bio: "Entrepreneur and startup enthusiast",
    link: "https://peerlist.io/frankbrown",
    profilePic:
      "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
    createdAt: "2023-06-18T17:03:14+05:30",
    updatedAt: "2023-06-18T17:03:14+05:30",
    followers: [],
    following: [
      {
        firstName: "Henry",
        lastName: "Smith",
        username: "henry@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
        _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        username: "alice@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
        _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
      },
      {
        firstName: "Bob",
        lastName: "Davis",
        username: "bob@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
        _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
      },
      {
        firstName: "Charlie",
        lastName: "Wilson",
        username: "charlie@example.com",
        profilePic:
          "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
        _id: "934ea419-311d-4d9a-8e38-675f2e80d81f",
      },
    ],
  },
];
