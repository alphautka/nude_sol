using Microsoft.EntityFrameworkCore;

namespace Api.Database
{
    public class StoreContext : DbContext
    {
        public StoreContext() { }
        public StoreContext(DbContextOptions<StoreContext> options)
          : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./insuranceDb.db");
        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Item> Items { get; set; }

    }
}