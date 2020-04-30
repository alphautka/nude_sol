using GraphQL.Types;
using GraphQL;
using Api.Database;

namespace Api.Graphql
{
    public class MySchema
    {
        private ISchema _schema { get; set; }
        public ISchema GraphQLSchema {
            get {
                return this._schema;
            }
        }

        public MySchema()
        {
            this._schema = Schema.For(@"
           
            type Item {
                id: ID,
                name: String,
                price: Float,
                category: Category
            }
            type Category {
                id: ID,
                name: String,
                items: [Item]
            }
            type Mutation {
                addCategory(name: String): Category
            } 
            type Mutation {
                addItem(name: String, price: Float, categoryId: Int): Item
            }
            type Mutation {
                removeItem(id: Int): Boolean
            }

            type Query {
                categories: [Category]
                category(id: ID): Category,
                items: [Item],
                item(id: ID): Item,
            }
      ", _ =>
            {
                _.Types.Include<Query>();
                _.Types.Include<Mutation>();
            });
        }

    }
}

