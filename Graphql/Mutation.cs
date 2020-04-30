using Api.Database;
using GraphQL;
using System;
using System.Linq;

namespace Api.Graphql
{
    [GraphQLMetadata("Mutation")]
    public class Mutation
    {

        [GraphQLMetadata("addCategory")]
        public Category AddCategory(string name)
        {
            using (var db = new StoreContext())
            {
                var category = new Category() { Name = name };
                db.Categories.Add(category);
                db.SaveChanges();
                return category;
            }
        }

        [GraphQLMetadata("addItem")]
        public Item AddItem(string name, double price, int categoryId)
        {
            using (var db = new StoreContext())
            {
                var item = new Item() { Name = name, Price = price, CategoryId = categoryId  };
                db.Items.Add(item);
                db.SaveChanges();
                return item;
            }
        }
        [GraphQLMetadata("removeItem")]
        public bool RemoveItem(int id)
        {
            using (var db = new StoreContext())
            {
                try
                {
                    var item = db.Items.FirstOrDefault(i => i.Id == id);
                    db.Items.Remove(item);
                    db.SaveChanges();
                    return true;
                }
                catch(Exception ex)
                {
                    return false;
                } 
            }
        }
    }
}