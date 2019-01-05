import React, { Component } from 'react';
import { number } from 'prop-types';

import { getStoryById, parseTime } from '../utils';

export default class ListItem extends Component {
    state = {
        story: null,
        isLoading: true,
    };

    async componentDidMount() {
        const { id } = this.props;
        const story = await getStoryById(id);
        this.setState({
            isLoading: false,
            story,
        });
    }

    render() {
        const { isLoading, story } = this.state;
        if (isLoading || !story) return null;

        const { id } = this.props;
        const {
            title,
            score,
            by,
            time,
            url = `https://news.ycombinator.com/item?id=${id}`,
        } = story;

        return (
            <div className="list-item">
                <h3>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
                <p>
                    <span>
                        {score} {score > 1 ? 'points' : 'point'}
                    </span>
                    <span>by {by}</span>
                    <span>{parseTime(time)}</span>
                </p>
            </div>
        );
    }
}

ListItem.propTypes = {
    id: number.isRequired,
};
