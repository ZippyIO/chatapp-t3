import { useState } from 'react';
import { api } from '~/utils/api';

const ChatContainer = () => {
  const [message, setMessage] = useState<string>('');

  const { data: chatMessages, refetch: refetchChatMessages } = api.chat.getAll.useQuery();

  const createMessage = api.chat.create.useMutation({
    onSuccess: () => {
      void refetchChatMessages();
    },
  });

  return (
    <>
      <div className="w-1/2 rounded-lg bg-neutral p-2">
        <div className="h-[40rem]">
          <ul className="flex flex-col gap-2">
            {chatMessages?.map((message) => (
              <li key={message.id} className="flex items-center gap-2 border-b border-base-200 p-2">
                <img src={message.authorImage} alt="" className="w-8 rounded-full" />
                <span>
                  <p className="text-xs font-bold text-slate-400">{message.authorName}</p>
                  {message.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            createMessage.mutate({
              content: message,
            });
            setMessage('');
          }}
          className="flex gap-2 p-2"
        >
          <input
            type="text"
            name="message"
            id="input-message"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
            className="input-bordered input w-5/6 border-2"
          />
          <button className="btn-secondary btn w-1/6" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default ChatContainer;
