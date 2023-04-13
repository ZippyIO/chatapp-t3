import { useState } from "react";
import { api } from "~/utils/api";

const ChatContainer = () => {
  const [message, setMessage] = useState<string>("");

  const createMessage = api.chat.create.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <div className="h-1/2 w-1/3">
        <div className="container h-full w-full bg-neutral"></div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            createMessage.mutate({
              content: message,
            });
          }}
          className=""
        >
          <input
            type="text"
            name="message"
            id="input-message"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-bordered input w-5/6 border-2"
          />
          <button className="btn-primary btn w-1/6" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default ChatContainer;
