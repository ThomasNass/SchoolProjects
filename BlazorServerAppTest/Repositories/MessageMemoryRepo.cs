using BlazorServerAppTest.Models;

namespace BlazorServerAppTest.Repositories
{
    public class MessageMemoryRepo : IMessageRepo
    {
        private readonly List<Message> messages = new List<Message>();

        public MessageMemoryRepo()
        {
            messages.Add(new Message { username = "Bobby", message = "Filler meddelande",dateSent=DateTime.Now });
            messages.Add(new Message { username = "Bobby", message = "Filler meddelande 2", dateSent = DateTime.Now });
            messages.Add(new Message { username = "Fred", message = "Filler meddelande 3", dateSent = DateTime.Now });
            messages.Add(new Message { username = "Fred", message = "Filler meddelande 4", dateSent = DateTime.Now });
        }

        public IEnumerable<Message> GetAll() { return messages; }

        public void newMessage( Message message)
        {
            messages.Add(message);
        }
    }
}
