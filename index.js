// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// Solution to # 1
const [ moo, neigh, baa, oink, cluck ] = farmAnimals.split(" ")

// Solution to # 2
const [ bessie, , dolly, babe, little ] = farmAnimals.split(" ")

// Solution to # 3
const [ blackAndWhite, , black, pink,  ] = farmAnimals.split(" ")


// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Solution to # 4
const [ red, orange, yellow, green, blue, indigo, violet ] = colors

// Solution to # 5
const [ r, o, y, g, b, , v ] = colors

// Solution to # 6
const [ , , , , , indg,  ] = colors


// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Solution to # 7
const { muppetName, color, song, job, partner } = muppet

// Solution to # 8
const { song2, song4 } = nestedMuppet.album.theMuppetMovie
const { nestedJob, nestedPartner } = nestedMuppet


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner