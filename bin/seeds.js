const mongoose = require("mongoose");
const Post = require("../models/post");
mongoose.connect(`mongodb+srv://Crugudar:holamundo@hackathon.zpc4t.mongodb.net/hackathon?retryWrites=true&w=majority`);
const posts = [
  {
    title:"The healthy tovarish",
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit, tempus quisque donec suspendisse vehicula fringilla, massa neque potenti himenaeos odio lobortis. Fusce pulvinar sociis nibh erat neque commodo, duis hendrerit tincidunt lectus nam est porta, velit dis nulla sollicitudin nec. Ligula malesuada massa ornare torquent maecenas praesent mauris feugiat curabitur nisi laoreet eu, ac nullam diam primis nunc mollis rutrum fames habitant aliquam.
    Blandit litora enim taciti mi magnis vitae netus lacus aptent, aliquam laoreet mauris tempor tortor orci ac. Ut ad penatibus id egestas proin, massa conubia cursus porttitor molestie vivamus, lacus facilisis placerat interdum. Aptent sem tempor imperdiet dapibus cras vehicula, egestas fermentum nunc purus blandit nulla mauris, quam habitant habitasse leo nibh. Dignissim curabitur nascetur cursus bibendum ultricies auctor egestas nisi, scelerisque accumsan lobortis feugiat curae ultrices venenatis cras conubia, id est pharetra in suspendisse lectus sagittis.`,
    foto:"https://eatliver.b-cdn.net/wp-content/uploads/2019/06/weird-russians1.jpg",
    date: new Date(2020, 03, 13),
  },
  {
    title:"Eating good, feeling good",
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit, tempus quisque donec suspendisse vehicula fringilla, massa neque potenti himenaeos odio lobortis. Fusce pulvinar sociis nibh erat neque commodo, duis hendrerit tincidunt lectus nam est porta, velit dis nulla sollicitudin nec. Ligula malesuada massa ornare torquent maecenas praesent mauris feugiat curabitur nisi laoreet eu, ac nullam diam primis nunc mollis rutrum fames habitant aliquam.
    Blandit litora enim taciti mi magnis vitae netus lacus aptent, aliquam laoreet mauris tempor tortor orci ac. Ut ad penatibus id egestas proin, massa conubia cursus porttitor molestie vivamus, lacus facilisis placerat interdum. Aptent sem tempor imperdiet dapibus cras vehicula, egestas fermentum nunc purus blandit nulla mauris, quam habitant habitasse leo nibh. Dignissim curabitur nascetur cursus bibendum ultricies auctor egestas nisi, scelerisque accumsan lobortis feugiat curae ultrices venenatis cras conubia, id est pharetra in suspendisse lectus sagittis.`,
    foto:"https://eatliver.b-cdn.net/wp-content/uploads/2019/06/weird-russians7.jpg",
    date: new Date(2020, 04, 13),
  },
  {
    title:"Learn to live in peace with yourself",
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit, tempus quisque donec suspendisse vehicula fringilla, massa neque potenti himenaeos odio lobortis. Fusce pulvinar sociis nibh erat neque commodo, duis hendrerit tincidunt lectus nam est porta, velit dis nulla sollicitudin nec. Ligula malesuada massa ornare torquent maecenas praesent mauris feugiat curabitur nisi laoreet eu, ac nullam diam primis nunc mollis rutrum fames habitant aliquam.
    Blandit litora enim taciti mi magnis vitae netus lacus aptent, aliquam laoreet mauris tempor tortor orci ac. Ut ad penatibus id egestas proin, massa conubia cursus porttitor molestie vivamus, lacus facilisis placerat interdum. Aptent sem tempor imperdiet dapibus cras vehicula, egestas fermentum nunc purus blandit nulla mauris, quam habitant habitasse leo nibh. Dignissim curabitur nascetur cursus bibendum ultricies auctor egestas nisi, scelerisque accumsan lobortis feugiat curae ultrices venenatis cras conubia, id est pharetra in suspendisse lectus sagittis.`,
    foto:"https://eatliver.b-cdn.net/wp-content/uploads/2019/06/weird-russians21.jpg",
    date: new Date(2020, 05, 13),
  },
  {
    title:"You are deep like a Matrioshka",
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit, tempus quisque donec suspendisse vehicula fringilla, massa neque potenti himenaeos odio lobortis. Fusce pulvinar sociis nibh erat neque commodo, duis hendrerit tincidunt lectus nam est porta, velit dis nulla sollicitudin nec. Ligula malesuada massa ornare torquent maecenas praesent mauris feugiat curabitur nisi laoreet eu, ac nullam diam primis nunc mollis rutrum fames habitant aliquam.
    Blandit litora enim taciti mi magnis vitae netus lacus aptent, aliquam laoreet mauris tempor tortor orci ac. Ut ad penatibus id egestas proin, massa conubia cursus porttitor molestie vivamus, lacus facilisis placerat interdum. Aptent sem tempor imperdiet dapibus cras vehicula, egestas fermentum nunc purus blandit nulla mauris, quam habitant habitasse leo nibh. Dignissim curabitur nascetur cursus bibendum ultricies auctor egestas nisi, scelerisque accumsan lobortis feugiat curae ultrices venenatis cras conubia, id est pharetra in suspendisse lectus sagittis.`,
    foto:"https://eatliver.b-cdn.net/wp-content/uploads/2019/06/weird-russians9.jpg",
    date: new Date(2020, 05, 13),
  },
];
Post.create(posts, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${posts.length} posts`);
  mongoose.connection.close();
});