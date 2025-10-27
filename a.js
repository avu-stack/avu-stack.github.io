(function () {
  // Tạo CSS cho button và popup
  const style = document.createElement("style");
  style.innerHTML = `
    #float-chat-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #007bff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      border: none;
      cursor: pointer;
      z-index: 9999;
      color: white;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
    }
    #float-chat-btn:hover {
      transform: scale(1.1);
      background-color: #0056b3;
    }
    #chat-popup {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 360px;
      height: 480px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 9998;
      font-family: sans-serif;
    }
    #chat-popup-header {
      background-color: #007bff;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #chat-popup-close {
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
    }
    #chat-popup-content {
      flex: 1;
      padding: 15px;
      overflow-y: auto;
    }
  `;
  document.head.appendChild(style);

  // Nút tròn nổi
  const floatBtn = document.createElement("button");
  floatBtn.id = "float-chat-btn";
  floatBtn.innerHTML = "💬";
  document.body.appendChild(floatBtn);

  // Popup chat
  const popup = document.createElement("div");
  popup.id = "chat-popup";
  popup.innerHTML = `
    <div id="chat-popup-header">
      <span>Chat Box</span>
      <span id="chat-popup-close">&times;</span>
    </div>
    <div id="chat-popup-content">
      <p>Xin chào! Đây là khung chat mẫu.</p>
      <p>Bạn có thể đặt nội dung iframe, chatbot, form, v.v. tại đây.</p>
    </div>
  `;
  document.body.appendChild(popup);

  // Sự kiện mở/đóng
  floatBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    floatBtn.style.display = "none";
  });

  document.getElementById("chat-popup-close").addEventListener("click", () => {
    popup.style.display = "none";
    floatBtn.style.display = "flex";
  });
})();
