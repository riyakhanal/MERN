//sum of elements using for loop
let numbers = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i<numbers.length;i++)
    {
        sum+=number[i];
    }
    console.log(sum);

    // const student = [
    //     {name:"John Dee", 
    //         age:21,
    //          courses:['Math','History','Science'],
    //          grades:{'Math':85,'Science':90,'History':78}

    //     }
    // ];
    // console.log(student);
    // console.log(`name:${student.name}`);
    // console.log(`age:${student.age}`);
    // let newcourse = 'Social';
    // student.courses.push(newcourse);
    // student.grade[newcourse]=40;
    // console/log()

    const students = [
        { name: 'Alice', score: 85, favFruit: 'apple' },
        { name: 'Bob', score: 92, favFruit: 'apple'  },
        { name: 'Charlie', score: 48, favFruit: 'orange' },
        { name: 'David', score: 74,favFruit: 'pineapple' },
        { name: 'Eve', score: 68, favFruit: 'orange' }
      ];
       
      const count = {}

      students.forEach(students => {
        const fruit = students.favFruit;
        if(count[fruit]){
            count[fruit]++;
        }
        else{
            count[fruit] = 1;
        }
      });

      console.log(count);