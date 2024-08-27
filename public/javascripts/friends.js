// Sample data for friends
const friends = [
  {
    name: "John Doe",
    profilePic: "/images/p1.jpg",
    description: "Fitness enthusiast and personal trainer.",
    link: "#",
  },
  {
    name: "Jane Smith",
    profilePic: "/images/p2.jpg",
    description: "Yoga instructor and wellness coach.",
    link: "#",
  },
  {
    name: "Mike Johnson",
    profilePic: "/images/p3.jpg",
    description: "Marathon runner and sports coach.",
    link: "#",
  },
  {
    name: "Emily Davis",
    profilePic: "/images/p4.jpg",
    description: "Nutritionist and fitness blogger.",
    link: "#",
  },
  {
    name: "Chris Lee",
    profilePic: "/images/p5.jpg",
    description: "Strength trainer and motivational speaker.",
    link: "#",
  },
  {
    name: "Sara Wilson",
    profilePic: "/images/p6.jpg",
    description: "Pilates instructor and wellness expert.",
    link: "#",
  },
  {
    name: "David Brown",
    profilePic: "/images/p7.jpg",
    description: "CrossFit coach and fitness advocate.",
    link: "#",
  },
  {
    name: "Laura Clark",
    profilePic: "/images/p8.jpg",
    description: "Health coach and fitness enthusiast.",
    link: "#",
  },
  {
    name: "Steve Anderson",
    profilePic: "/images/p9.jpg",
    description: "Gym owner and fitness trainer.",
    link: "#",
  },
  {
    name: "Olivia Taylor",
    profilePic: "/images/p10.jpg",
    description: "Personal trainer and lifestyle coach.",
    link: "#",
  },
];

// Function to render friends
function renderFriends() {
  const friendsGrid = document.getElementById("friendsGrid");

  friends.forEach((friend) => {
    const card = document.createElement("div");
    card.classList.add("friend-card");

    card.innerHTML = `
            <img src="${friend.profilePic}" alt="${friend.name}'s profile picture" />
            <div class="friend-info">
                <h3>${friend.name}</h3>
                <p>${friend.description}</p>
            </div>
            <div class="actions">
                <a href="${friend.link}"><button>View Profile</button></a>
            </div>
        `;

    friendsGrid.appendChild(card);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", renderFriends);
