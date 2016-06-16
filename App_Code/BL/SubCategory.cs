using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for SubCategory
/// </summary>
public class SubCategory : Category
{
    private readonly DB _db = new DB();

    #region Properties

    public int ParentId { get; private set; }
    public decimal Price { get; private set; }
    public int Id { get; private set; }
    public string Name { get; private set; }
    public string Title { get; private set; }

    #endregion

    public SubCategory()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public SubCategory(int id, int parentId, string name, decimal price, string title):base(id,name)
    {
        ParentId = parentId;
        Price = price;
        Title = title;
    }

    internal List<SubCategory> getAll(string where)
    {
        return _db.getAllSubCategories(where);
    }

    internal List<SubCategory> getAllByTitle(string where)
    {
        return _db.getAllSubCategoriesByTitle(where);
    }
}