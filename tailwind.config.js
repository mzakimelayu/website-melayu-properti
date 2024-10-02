/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      spacing: {
        '21px': '1.313rem',
        '22px': '1.375rem',
        '30px': '1.875rem',
        '90px': '5.625rem', // Ukuran margin 90
        '123px': '7.688rem',
        '121px': '7.563rem',
        '252px': '15.763rem',
        '282px': '17.625rem',
        '420px': '26.25rem',
      },
      fontSize: {
        '18px': '1.125rem', // Menambahkan ukuran teks 18px
        '48px': '3rem'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Menambahkan Poppins sebagai font sans
      },
      maxWidth: {
        '230px': '14.375rem', 
        '352px': '22rem', // 352px
        '461px': '28.813rem', 
        '713px': '44.563rem', 
      },
      lineHeight: {
        '8': '2rem', // 32px
        '65': '4.0625rem' // 65px
      },
    },
  },
  plugins: [],
}

