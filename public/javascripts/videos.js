document.addEventListener("DOMContentLoaded", function () {
  const videosData = [
    {
      id: 1,
      title: "Full Body Workout",
      videoUrl: "/images/vid1.mp4",
    },
    {
      id: 2,
      title: "Yoga for Flexibility",
      videoUrl: "/images/vid2.mp4",
    },
    {
      id: 2,
      title: "Core Development",
      videoUrl: "/images/vid3.mp4",
    },
    // Add more objects here or fetch dynamically from an API.
  ];

  const videoGrid = document.getElementById("videoGrid");

  // Function to render video cards dynamically
  function renderVideos(videos) {
    videos.forEach((video) => {
      const videoCard = document.createElement("div");
      videoCard.classList.add("video-card");
      videoCard.innerHTML = `
                <video src="${video.videoUrl}" controls></video>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <div class="video-actions">
                        <button class="like-btn" data-id="${video.id}">👍 Like</button>
                        <button class="share-btn" data-id="${video.id}">🔗 Share</button>
                    </div>
                </div>
            `;
      videoGrid.appendChild(videoCard);
    });
  }

  // Render all videos from the data
  renderVideos(videosData);

  // Like and share buttons functionality
  videoGrid.addEventListener("click", function (event) {
    if (event.target.classList.contains("like-btn")) {
      const videoId = event.target.getAttribute("data-id");
      alert(`You liked video ${videoId}`);
    }

    if (event.target.classList.contains("share-btn")) {
      const videoId = event.target.getAttribute("data-id");
      const shareUrl = window.location.href;
      const shareText = `Check out this workout video: ${shareUrl}`;
      navigator.clipboard
        .writeText(shareText)
        .then(() => alert("Video link copied to clipboard!"))
        .catch((err) => console.error("Could not copy text: ", err));
    }
  });
});
