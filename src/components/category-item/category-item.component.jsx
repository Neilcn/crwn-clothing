import "./category-item.styles.scss";

const CategoryItem = (props) => {
  return props.categories.map((item) => {
    return (
      <div className="category-container" key={item.id}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{item.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
  });
};

export default CategoryItem;
