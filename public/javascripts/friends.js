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
