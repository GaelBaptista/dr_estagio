// App.js


import {BlogCard} from './blog.tsx';

export function Blog() {
  return (
    <div>
      <BlogCard
        imageUrl="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"
        author="John Doe"
        date="Aug. 24, 2015"
        tags={["Learn", "Code", "HTML", "CSS"]}
        title="Learning to Code"
        subTitle="Opening a door to the future"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
      />

      <BlogCard
        imageUrl="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"
        author="Jane Doe"
        date="July. 15, 2015"
        tags={["Learn", "Code", "JavaScript"]}
        title="Mastering the Language"
        subTitle="Java is not the same as JavaScript"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
      />
       <BlogCard
        imageUrl="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"
        author="Jane Doe"
        date="July. 15, 2015"
        tags={["Learn", "Code", "JavaScript"]}
        title="Mastering the Language"
        subTitle="Java is not the same as JavaScript"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
      />
       <BlogCard
        imageUrl="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"
        author="Jane Doe"
        date="July. 15, 2015"
        tags={["Learn", "Code", "JavaScript"]}
        title="Mastering the Language"
        subTitle="Java is not the same as JavaScript"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
      />
    </div>
  );
}


