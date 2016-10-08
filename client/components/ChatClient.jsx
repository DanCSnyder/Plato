import React from 'react';
import { connect } from 'react-redux';
import { sendChatMessage } from './../actions';

import ChatMessagesDisplay from './ChatMessagesDisplay.jsx';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    console.log('chat client props: ', props);
  }
  render() {
    return (
      <div className="chat-client-container">
        <ChatMessagesDisplay
          messages={this.props.messages}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Message input on chat client: ', this.state.message);
            // Form is not properly re rendering after setState
            // Redux conflict? This is a problem with all app's forms
            this.setState({ message: '' });
            console.log('store values? ', this.store.getState());
            const submitObj = {
              user: this.state.user,
              message: this.state.message
            };
            console.log('submit object: ', submitObj);
            this.state.store.dispatch(sendChatMessage(submitObj));
          }}
        >
          <input
            type="text"
            onChange={e => this.setState({ message: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    username: state.username,
    messages: state.chatMessages
  }
);
const mapDispatchToProps = dispatch => (
  { onMessageSubmit: messageObj => (
    dispatch(sendChatMessage(messageObj))
  ) }
);

const ChatClientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatClient);

// ChatClient.propTypes = {
//   store: React.PropType.object,
//   username: React.PropType.object
// };

export default ChatClientContainer;
