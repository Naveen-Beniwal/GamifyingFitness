document.addEventListener("DOMContentLoaded", () => {
  // Define the exercise data
  const exercises = [
    {
      title: "Push-Ups",
      description:
        "Push-ups are a basic bodyweight exercise that strengthen the chest, shoulders, triceps, and core.",
      benefits:
        "Enhances upper body strength, improves core stability, and promotes better posture.",
    },
    {
      title: "Squats",
      description:
        "Squats are a lower body exercise that targets the thighs, hips, and buttocks.",
      benefits:
        "Increases lower body strength, enhances flexibility, and improves balance and coordination.",
    },
    {
      title: "Planks",
      description:
        "Planks are a core strengthening exercise that also engages the shoulders, arms, and back.",
      benefits:
        "Builds core strength, improves posture, and enhances overall body stability.",
    },
    {
      title: "Lunges",
      description:
        "Lunges are a dynamic exercise that targets the legs and glutes while improving balance.",
      benefits:
        "Strengthens the lower body, improves balance and coordination, and increases flexibility.",
    },
    {
      title: "Burpees",
      description:
        "Burpees are a full-body exercise that combines a squat, push-up, and jump.",
      benefits:
        "Enhances cardiovascular endurance, strengthens multiple muscle groups, and burns calories.",
    },
    {
      title: "Mountain Climbers",
      description:
        "Mountain climbers are a cardio exercise that also works the core, shoulders, and legs.",
      benefits:
        "Increases cardiovascular fitness, builds core strength, and improves agility.",
    },
    {
      title: "Bicep Curls",
      description:
        "Bicep curls are a weight training exercise that targets the biceps.",
      benefits:
        "Strengthens the biceps, improves arm aesthetics, and enhances grip strength.",
    },
    {
      title: "Tricep Dips",
      description:
        "Tricep dips are a bodyweight exercise that targets the triceps and shoulders.",
      benefits:
        "Strengthens the triceps, enhances shoulder stability, and improves upper body strength.",
    },
    {
      title: "Leg Raises",
      description:
        "Leg raises are a core exercise that targets the lower abdominal muscles.",
      benefits:
        "Strengthens the lower abs, improves core stability, and enhances overall core strength.",
    },
    {
      title: "Russian Twists",
      description:
        "Russian twists are a core exercise that targets the obliques and improves rotational strength.",
      benefits:
        "Enhances core stability, strengthens the obliques, and improves rotational strength.",
    },
  ];

  // Reference the container where exercise cards will be inserted
  const exerciseGrid = document.querySelector(".exercise-grid");

  // Create and insert exercise cards
  exercises.forEach((exercise) => {
    const card = document.createElement("div");
    card.classList.add("exercise-card");

    card.innerHTML = `
      <h3>${exercise.title}</h3>
      <p><strong>Description:</strong> ${exercise.description}</p>
      <p><strong>Benefits:</strong> ${exercise.benefits}</p>
    `;

    exerciseGrid.appendChild(card);
  });
});
