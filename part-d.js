
// תרגיל 15
// const players = [
// { id: 1, nickname: "Pixel", score: 840, level: 5 },
// { id: 2, nickname: "Nova", score: 1200, level: 8 },
// { id: 3, nickname: "Blaze", score: 460, level: 3 }
// ];
// players.forEach(player=>
// {
//     console.log(` id: ${player.id} , level : ${player.level} points ${player.score} - ${player.nickname}. `)

// });

// יחזיר undefined כי ForEach לא מחזיר כלום

// תרגיל 16
// const scores = [840, 1200, 460, 950];
// const courses = ["JavaScript", "Design", "Databases"];
// const updatedScores = scores.map(number=> number+100);
// const courseNameLengths = courses.map (course=> course.length);
// console.log(scores);
// console.log(updatedScores);
// console.log(courseNameLengths);
// console.log(courses);
// scores - 4
// updatedScores - 4
// courseNameLengths - 3
// courses- 3

// const doubleScores=scores.map(score=>{
//     score*2;
// });

// תיקון להוריד את הסוגריים המסולסלים ואת ה; אחרי ה2
// const doubleScores = scores.map(score=> 
//     score*2); 
// console.log(doubleScores);


// שאלה 17
// const posts=[
//     {  id: 101, username: "noa_dev" , content:"first project!", likes:45 },
//     { id:102 , username:"dan_codes" , content: "New feature" , likes:180 },
//     { id : 103 , username:"maya_js" , content: "Weekend update", likes: 72}
// ];
// const postUsername = posts.map(post=> post.username)


// const postLabels = posts.map(label=>
//     (`${label.username} | ${label.content} |  likes: ${label.likes}`)
// );

// const postCards = posts.map(post=>
//    ( {id: post.id, label: `${post.username} - ${post.likes} Likes`})
// );
// console.log(posts);
// console.log(postCards);
// כן

// שאלה 18
// const tasks=[
//     {id: 1, title: "Write tests" , completed: false , priority: "high"},
//     {id:2 , title: "updated profile" , completed: true, priority:"low"},
//     {id: 3, title:"Fix login" , completed: false, priority : "high"},
//     {id:4, title: "Review text" , completed: false, priority :"medium"}
// ];
// const openTasks = tasks.filter(task=> task.completed === true);
// console.log(openTasks)
// const highPriorityTasks = tasks.filter(task=> task.priority === "high");
// console.log(highPriorityTasks);
// const urgentOpenTasks = tasks.filter (task => task.priority === "high" && task.completed=== false);
// console.log(urgentOpenTasks);

// const getTasksByPriority=(tasks , priority) =>
//     { 
//  return tasks.filter(task => task.priority === priority);
//     }

// console.log(getTasksByPriority(tasks, "high"));
// const result = tasks.filter(task => task.id ===3);
// יחזיר מערך עם איבר אחד 

// שאלה 19
// const movies = [
//     {id: 11 , title:"skyline" , genre: "Drama" , rating: 8.2},
//     {id: 12 , title:"Orbit" , genre: "Sci-Fi" , rating: 7.9},
//     {id: 13 , title:"Ocean" , genre: "Adventure" , rating: 8.5}
// ];
// const findMovieById = (movies , id) =>
// {
//     let result = movies.find(task => task.id === id);
//     if (result){
//         return result;
//     }else{
//         return "movie not found";
//     }
// }
// console.log(findMovieById(movies , 12));
// console.log(findMovieById(movies,99));

// const movie = movies.find(movie => movie.id === 12);
// console.log(movie.title);
// החלפתי את filter בfind.


