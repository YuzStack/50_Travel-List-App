# Travel List App – "Far Away" ✈️

![Travel List App](/travel-list-app.png)

Far Away is a highly interactive packing assistant designed to help travelers stay organized. The application allows users to add, manage, and track items for their upcoming trips, providing a seamless experience for holiday preparation.

**[Live Preview](https://yuzstack-travel-list-app.netlify.app/)**

## 🛠️ Technical Stack

- **Frontend Library:** React.js
- **Styling:** Vanilla CSS

## 🧠 The "Build-to-Verify" Workflow

As part of my curriculum based learning, I utilized my signature "Build-to-Verify" approach for this project. I independently developed the logic for adding items and managing the packing status before auditing my code against the course solutions. This allowed me to master **Lifting State Up** and **Controlled Components** by solving the architectural puzzles myself first.

## ✨ Key Features

- **Dynamic Item Management:** Users can add items with specific quantities and descriptions, which are then rendered into a categorized list.
- **Interactive Packing Status:** Implemented a "check-off" feature where users can toggle the packed status of individual items, instantly updating the global state.
- **Intelligent Sorting Logic:** Added functionality to sort items alphabetically, by input order, or by packed status, demonstrating a firm grasp of array manipulation in React.
- **Live Statistics:** Developed a real-time footer that calculates the total number of items, the number of packed items, and the percentage of completion.
- **Controlled Form Components:** Used React state to manage all form inputs, ensuring a single source of truth for the application data.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository: `git clone https://github.com/YuzStack/50_Travel-List-App.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
