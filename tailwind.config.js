module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        blob: "blob 7s infinite",
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      transitionDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      translate: ['group-hover'],
      scale: ['group-hover'],
      blur: ['hover', 'group-hover'],
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
} 