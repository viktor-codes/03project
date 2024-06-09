import ListItem from "./ListItem";

const List = ({ items }) => {
    return (
        <ul className="list-disc list-inside mt-2">
            {items.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default List;
