using System.Collections.Generic;
using GraphQL;
using System.Linq;
using Api.Database;
using Microsoft.EntityFrameworkCore;

namespace Api.Graphql
{
    public class Query
    {
        [GraphQLMetadata("items")]
        public IEnumerable<Item> GetItems()
        {
            using (var db = new StoreContext())
            {
                return db.Items
                .Include(b => b.Category)
                .ToList();
            }
        }
        [GraphQLMetadata("item")]
        public Item GetItem(int id)
        {
            using (var db = new StoreContext())
            {
                return db.Items
                .Include(a => a.Category)
                .SingleOrDefault(a => a.Id == id);
            }
        }

        [GraphQLMetadata("categories")]
        public IEnumerable<Category> GetCategories()
        {
            using (var db = new StoreContext())
            {
                return db.Categories
                .Include(a => a.Items)
                .ToList();
            }
        }

        [GraphQLMetadata("category")]
        public Category GetCategory(int id)
        {
            using (var db = new StoreContext())
            {
                return db.Categories
                .Include(a => a.Items)
                .SingleOrDefault(a => a.Id == id);
            }
        }

    }
}