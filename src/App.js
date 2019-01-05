import React, { Component } from 'react';

import ListItem from './components/ListItem';
import { getNewStories } from './utils';

class App extends Component {
    state = {
        items: [],
    };

    async componentDidMount() {
        this.ids = await getNewStories();
        this.loadItems(20);
        window.addEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        if (window.innerHeight + window.pageYOffset + 200 >= document.body.offsetHeight) {
            this.loadItems();
        }
    };

    loadItems = (size = 10) => {
        const items = this.ids.splice(0, size);
        this.setState(state => ({
            items: [...state.items, ...items],
        }));
    };

    render() {
        const { items } = this.state;

        return (
            <div className="container">
                <header>Hacker News</header>
                {items.map(item => (
                    <ListItem key={item} id={item} />
                ))}
            </div>
        );
    }
}

export default App;
