using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Route
/// </summary>
public class Route
{
    private readonly DB _db = new DB();

    #region Properties

    public string Slug { get; private set; }
    public string Type { get; private set; }

    #endregion

    public Route()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Route(string slug, string type) {
        Slug = slug;
        Type = type;
    }

    internal List<Route> getAllRoutes()
    {
        return _db.getAllRoutes();
    }
}