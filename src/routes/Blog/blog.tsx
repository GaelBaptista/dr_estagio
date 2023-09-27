// BlogCard.js
import './blog.css'


interface BlogCardProps {
  imageUrl: string; // Especificando o tipo como string
  author: string;
  date: string;
  tags: string[];
  title: string;
  subTitle: string;
  content: string;
}
export function BlogCard({
  imageUrl,
  author,
  date,
  tags,
  title,
  subTitle,
  content,
}: BlogCardProps)  {
  return (
    <section className='bodyBlog'>
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <ul className="details">
          <li className="author"><a href="#">{author}</a></li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}><a href="#">{tag}</a></li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{content}</p>
        <p className="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
    </section>
  );
}


