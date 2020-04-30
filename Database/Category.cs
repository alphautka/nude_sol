// Database/Author.cs

using System.Collections.Generic;

namespace Api.Database
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Item> Items { get; set; }
    }
}