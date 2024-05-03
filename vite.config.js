import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base URL for the project when it's deployed
  base: '/Dayton/', // Replace <repository-name> with the name of your GitHub repository
  build: {
    outDir: 'dist', // Specify the output directory for build files
  }
});
