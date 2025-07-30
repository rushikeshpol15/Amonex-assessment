// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust if your files are elsewhere
        "./public/index.html"
    ],
    theme: {
        colors: {
            dark: '#14162A',
            purple: '#9999FF',
            darkPurple: '#7879B6',
            lightgrey: '#24294D',
            lightgreyMedium : '#2E3461',
            grey: '#ACADAF',
            white: '#fafafa',
            mediumGrey: '#DADADD',
            greyTransparent: 'rgba(92, 96, 121, 0.7)',
            
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            poppins: ['Poppins','sans-serif']
        },
        fontSize: {
            //instead of css typography defined here
            // Heading 1
            'desktop-heading-1': ['3rem', { lineHeight: '3.5rem' }], // 48px / 56px
            'tablet-heading-1': ['2.5rem', { lineHeight: '3rem' }],   // 40px / 48px
            'mobile-heading-1': ['2rem', { lineHeight: '2.5rem' }],   // 32px / 40px

            // Heading 2
            'desktop-heading-2': ['2.5rem', { lineHeight: '3rem' }],  // 40px / 48px
            'tablet-heading-2': ['2rem', { lineHeight: '2.5rem' }],   // 32px / 40px
            'mobile-heading-2': ['1.75rem', { lineHeight: '2.25rem' }], // 28px / 36px

            // Heading 3
            'desktop-heading-3': ['2rem', { lineHeight: '2.5rem' }],  // 32px / 40px
            'tablet-heading-3': ['1.75rem', { lineHeight: '2.25rem' }], // 28px / 36px
            'mobile-heading-3': ['1.5rem', { lineHeight: '2rem' }],   // 24px / 32px

            // Heading 4
            'desktop-heading-4': ['1.5rem', { lineHeight: '2rem' }],  // 24px / 32px
            'tablet-heading-4': ['1.375rem', { lineHeight: '1.875rem' }], // 22px / 30px
            'mobile-heading-4': ['1.rem', { lineHeight: '1.45rem' }],   // 20px / 28px

            // Body
            'desktop-body': ['1rem', { lineHeight: '1.625rem' }],     // 16px / 26px
            'tablet-body': ['0.9375rem', { lineHeight: '1.5rem' }],   // 15px / 24px
            'mobile-body': ['0.875rem', { lineHeight: '1.375rem' }],  // 14px / 22px

            // Caption
            'desktop-caption': ['0.8125rem', { lineHeight: '1.25rem' }], // 13px / 20px
            'tablet-caption': ['0.75rem', { lineHeight: '1.125rem' }],   // 12px / 18px
            'mobile-caption': ['0.6875rem', { lineHeight: '1rem' }],     // 11px / 16px
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        }
    }
}