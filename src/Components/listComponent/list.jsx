import React, { Component } from 'react';

import { createStore } from 'redux';
import reducer from '../../reducers/index';
import { add, clear } from '../../Actions/index';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
);
class List extends Component {
    constructor(props) {
        super(props);
        //state of component
        this.state = {
            item: "",
            data: []
        };
    }

    componentWillMount() {

        // const unsubscribe = store.subscribe(() => console.log(store.getState()));
        // this.setState({ data: store.getState() });
        // console.log(this.state.data);
        // unsubscribe();
    }

    changeHandler(evt) {
        this.setState({ item: evt.target.value });
    }
    onClickAdd() {
        console.log(this.state.item);

        const unsubscribe = store.subscribe(() => console.log(store.getState()));
        store.dispatch(add(this.state.item));
        this.setState({ data: store.getState() });

        unsubscribe();
    }
    onClickClear() {
        console.log(this.state.item);

        const unsubscribe = store.subscribe(() => console.log(store.getState()));

        store.dispatch(clear());
        this.setState({ data: store.getState() });
        unsubscribe();

    }
    render() {

        const listLi = this.state.data.map(ele => {
            return <li>{ele}</li>;
        })

        return (
            <div>
                Enter Item: <input type="text" onChange={(evt) => this.changeHandler(evt)} />
                <br />
                <button onClick={() => this.onClickAdd()}>Add</button> | <button onClick={() => this.onClickClear()}>Clear</button>
                <hr />
                <ul>
                    {listLi}
                </ul>
            </div>
        );
    }
}

export default List;