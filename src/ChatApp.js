import React, { useState } from 'react';
import axios from 'axios';
import './ChatApp.css'; // Tailwind CSSを適用するためのCSSファイル

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // メッセージの配列の状態
  const [input, setInput] = useState(''); // 入力フィールドの状態

  // メッセージを送信する関数
  const sendMessage = (event) => {
    event.preventDefault(); // フォーム送信のデフォルトの動作を止める
    const newMessages = [...messages, { text: input, sender: 'user' }]; // 新しいメッセージを既存のメッセージリストに追加
    setMessages(newMessages); // メッセージの状態を更新
    setInput(''); // 入力フィールドをクリア
  };

  return (
    <div className="chat-container">
      <div className="messages-area">
        {/* メッセージをマップして表示 */}
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="input-area" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="メッセージを入力"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default ChatApp;
