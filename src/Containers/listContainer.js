import { connect } from 'react-redux';
import List from '../Components/listComponent/list';
import ShowTable from '../Components/tableExample/showtable';
import { add, clear, display } from '../Actions/index';

//state is an array type data[] = state[]
const mapStateToProps = (state) => {
    return {
        data: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(add("")),
        clear: () => dispatch(clear()),
        display: () => dispatch(display())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
export default connect(mapStateToProps, mapDispatchToProps)(ShowTable);