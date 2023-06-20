import {ListItem} from"./ProductDetailsDescription.styled"
const ProductDetailsDescription = ({ post }) => {
  const { processor, graphics_card, ram, storage } = post;
  return (
    <ul>
      <ListItem>
        <span>Processor</span> {processor}
      </ListItem>
      <ListItem>
        <span>Graphics Card</span> {graphics_card}
      </ListItem>
      <ListItem>
        <span>RAM </span>
        {ram}
      </ListItem>
      <ListItem>
        <span>Storage</span> {storage}
      </ListItem>
    </ul>
  );
};
export default ProductDetailsDescription;
