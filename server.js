const express = require('express')
const app = express()
const restaurant = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    {
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}


// middleware
app.use(express.static('public'))


// routes 
// app.get('/', (req, res)=>{
//     res.render('home.ejs')
// })

app.get('/', (req, res) => {
  res.render('home.ejs', {restaurant: restaurant})
})


app.get('/menu', (req, res) => {
  console.log(restaurant.menu)
  res.render('menu.ejs', { menu: restaurant.menu})
})

app.get('/menu/:category', (req, res) => {
  menuItems = []
  const category = req.params.category
  const filterMenu = restaurant.menu.filter((item)=>{
    return item.category == req.params.category
  })
  res.render('category.ejs', {filterMenu, category})
  })
  


// port
app.listen(3000, () => {
  console.log('port active')
})