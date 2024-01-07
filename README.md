# Gotham's Gourmet

Welcome to "Gotham's Gourmet," a Next.js project that brings the adventurous world of Batman-themed culinary delights to
your table. Dive into the Batcave and explore a variety of unique recipes inspired by the characters and themes of
Gotham City.

## Project Overview

"Gotham's Gourmet" is built with Next.js, utilizing the power of React for a dynamic and responsive user experience.
Tailored for Batman enthusiasts and culinary adventurers, this web application presents a collection of fictional
recipes that bring the essence of Gotham City into your kitchen.

### Features

- **Dynamic Recipe Display**: Recipes are displayed using cards, offering a brief overview and an image representing the
  dish.
- **Vegan Badge**: Vegan recipes are easily identifiable with a dedicated badge.
- **Responsive Layout**: The website is fully responsive, catering to various screen sizes for a seamless user
  experience.
- **Delayed Loading Simulation**: Experience a realistic loading scenario with an artificial delay, showcasing the
  asynchronous nature of real-world applications.

### Technology Stack

- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS with additional animation support
- **Package Management**: Bun

## Installation and Setup

To get started with "Gotham's Gourmet," follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nawodyaishan/gotham-gourmet-nextjs-bun-shadcn.git
   cd gotham-gourmet-nextjs-bun-shadcn
   ```

2. **Install dependencies**:
   Using Bun as the package manager:
   ```bash
   bun install
   ```

3. **Run the development server**:
   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a standard Next.js structure with some customizations:

- `components/`: React components including UI elements and theme provider.
- `public/img/`: Images for each recipe, named according to their recipe ID.
- `_data/recipe-data.ts`: Data file containing the details of each recipe.
- `src/app/`: Core application files including layout and global styles.
- `tailwind.config.js`: Tailwind CSS configuration.

### Functional Components

- **RootLayout**: The main layout component that wraps around the entire application, setting up the page structure and
  global styles.
- **Home**: The home page component, responsible for fetching recipe data (with simulated delay for loading) and
  rendering it in a grid layout using the `Card` component.
- **Card**: A component used to display individual recipes. It includes a header, content, and footer section, each
  styled using Tailwind CSS.

### Data Fetching and State Management

- The application uses async functions to simulate data fetching, demonstrating how real-world applications handle
  asynchronous operations.
- State management is kept minimal and localized, focusing on the presentation and interactivity of UI components.

### Styling and Responsiveness

- Tailwind CSS is used for styling, providing a utility-first approach for rapid UI development.
- The application is designed to be responsive, ensuring a seamless user experience across different device sizes.

## Contributing

Contributions to "Gotham's Gourmet" are welcome. Whether it's adding new recipes, enhancing the UI, or fixing bugs, your
input is appreciated.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a new Pull Request.
