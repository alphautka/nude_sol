using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Database
{
    public class Item
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}