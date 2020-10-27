// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
// Create a react component
const App = () => {
    return (    
        <div className="ui container comments">
            <ApprovalCard><h4>Warning</h4>
            Are you sure you want to do this?
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    time="Today at 10:00PM"
                    commentText="Hey Bob how's it goin?"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Alex"
                    time="Today at 6:00PM"
                    commentText="How the hell are ya?"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Jane"
                    time="Yesterday at 5:00AM"
                    commentText="Come on man!"
                />
            </ApprovalCard>

        </div>

    );
};

// Take a react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))