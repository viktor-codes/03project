import Row from "./Row";

const Table = ({ items }) => {
    return (
        <table className="table-fixed border border-slate-500">
            <tbody>
                {items.map((item) => (
                    <Row key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
