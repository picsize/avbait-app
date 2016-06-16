using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Category
/// </summary>
public class Category
{
    private readonly DB _db = new DB();
    //private List<SubCategory> subCategory;

    #region Properties

    public int Id { get; private set; }
    public string Img { get; private set; }
    public string Name { get; private set; }
    public List<SubCategory> SubCategory { get;  set; }
    //public List<SubCategory> SubCategory {
    //    get {
    //        return this.subCategory;
    //    } set { this.subCategory = new List<SubCategory>(); } }

    #endregion


    public Category()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Category(int id, string name, string img)
    {
        Id = id;
        Name = name;
        Img = img;
    }

    public Category(int id, string name)
    {
        Id = id;
        Name = name;
    }

    internal List<Category> getAll()
    {
        return _db.getAllCategories();
    }
}