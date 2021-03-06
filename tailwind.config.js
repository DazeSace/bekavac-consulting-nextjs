module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            screens: {
                'xs': '420px'
            },
            colors: {
                'space': '#051923',
                'sea': '#003554',
                'gold': '#FEAC48',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
