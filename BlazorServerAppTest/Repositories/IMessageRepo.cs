using BlazorServerAppTest.Models;

namespace BlazorServerAppTest.Repositories
{
    public interface IMessageRepo
    {
        IEnumerable<Message> GetAll();

        void newMessage(Message message);
       
    }
}
