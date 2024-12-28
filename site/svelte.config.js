import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        paths: {
            base: '/mnemonicware' // Replace with your repository name for GitHub Pages
        }
    }
};

export default config;
