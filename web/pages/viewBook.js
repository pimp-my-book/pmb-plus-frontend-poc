import SingleBook from '../components/SingleBook'

const viewBook = (props) => (
    <div>
        <SingleBook
        id={props.query.ID}
        />
    </div>
)

export default viewBook