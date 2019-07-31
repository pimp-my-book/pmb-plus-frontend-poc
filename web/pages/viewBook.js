import SingleBook from '../components/SingleBook'

const viewBook = (props) => (
    <div>
        <SingleBook
        id={props.query.id}
        />
    </div>
)

export default viewBook