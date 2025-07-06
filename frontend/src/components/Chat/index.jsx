import { Input } from "antd";

const { TextArea } = Input;

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-greeting">
        <h2>Hello user</h2>
      </div>
      <div className="chat-input-box">
        <TextArea
          rows={4}
          placeholder="Type your message here..."
          style={{ width: "100%" }}
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
      </div>
    </div>
  );
};

export default Chat;
