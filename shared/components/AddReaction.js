import React, { Component } from 'react';

export default class AddReaction extends Component {
  render() {
    return (
      <div className="AddReaction">
        <img src="/static/add-reaction.svg" alt="Add Reaction" />
        <style jsx>
          {`
            .AddReaction {
              border: 1px solid #f0f0f0;
              border-radius: 5px;
              padding: 3px 10px;
              display: inline-block;
              height: 30px;
            }
          `}
        </style>
      </div>
    );
  }
}
