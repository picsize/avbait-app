using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Page
/// </summary>
public class Page
{
    private readonly DB _db = new DB();

    #region Properties

    public int CreatedBy { get; private set; }
    public string Css { get; private set; }
    public string Description { get; private set; }
    public string Html { get; private set; }
    public int Id { get; private set; }
    public bool IsPublished { get; private set; }
    public string Js { get; private set; }
    public string Keywords { get; private set; }
    public string Name { get; private set; }
    public DateTime PubliedDate { get; private set; }
    public string Slug { get; private set; }
    public string Title { get; private set; }

    #endregion

    public Page()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Page(int id, string title, string keywords, string description, string name, string html, string css,
        string js, string slug, int createdBy, bool isPublished, DateTime publiedDate)
    {
        Id = id;
        Title = title;
        Keywords = keywords;
        Description = description;
        Name = name;
        Html = html;
        Css = css;
        Js = js;
        Slug = slug;
        CreatedBy = createdBy;
        IsPublished = isPublished;
        PubliedDate = publiedDate;

    }

    internal Page getPageBySlug(string slug)
    {
        return _db.getPageBySlug(slug);
    }
}