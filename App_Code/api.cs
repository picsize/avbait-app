using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

/// <summary>
/// Summary description for api
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class api : System.Web.Services.WebService
{
    private readonly User _user = new User();
    private readonly Business _business = new Business();
    private readonly Category _category = new Category();
    private readonly SubCategory _subCategory = new SubCategory();
    private readonly Order _order = new Order();
    private readonly Route _route = new Route();
    private readonly SmtpHandler _emailer = new SmtpHandler();

    public api()
    {
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    private string convertToJson(object obj)
    {
        JavaScriptSerializer js = new JavaScriptSerializer();
        return js.Serialize(obj);
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string register(string email, string password, int userType, string fullName, string mobileNumber,
        string homeNumber, string familyStatus, string gender, string address, string birthday, string image)
    {
        try
        {
            int num = _user.register(email, password, userType, fullName, mobileNumber, homeNumber, char.Parse(familyStatus), char.Parse(gender), address, DateTime.Parse(birthday), image);
            Dictionary<string, object> res = new Dictionary<string, object>();
            res.Add("state", num);
            return convertToJson(res);
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string login(string email, string password)
    {
        try
        {
            User userInfo = _user.login(email, password);
            Dictionary<string, object> res = new Dictionary<string, object>();
            if (userInfo != null)
            {
                res.Add("state", 1);
                res.Add("user", userInfo);
            }
            else
                res.Add("state", 0);
            return convertToJson(res);
        }
        catch (Exception)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string newOrder(int userId, int businessId, string orderDate, string orderETA, string orderType,
        int orderPaymetType, double orderPrice, int categoryId, string address)
    {
        try
        {
            Order newOrder;
            if (orderType == "120")
                newOrder = _order.createOrder120(userId, businessId, DateTime.Parse(orderDate), orderType, orderPaymetType, orderPrice, categoryId, address);
            else
                newOrder = _order.createOrder(userId, businessId, DateTime.Parse(orderDate), DateTime.Parse(orderETA), orderType, orderPaymetType, orderPrice, categoryId, address);
            Dictionary<string, object> res = new Dictionary<string, object>();
            if (newOrder != null)
            {
                res.Add("state", 1);
                res.Add("order", newOrder);

                string msg = string.Format("ברכות! ביצעת הזמנה חדשה באתר אב הבית.");

                res.Add("emailComfirmation", _emailer.sendEmail("shay.avr1911@gmail.com", "ביצוע הזמנה חדשה באתר אב הבית", msg));
            }
            else
                res.Add("state", 0);
            return convertToJson(res);
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string getCategories()
    {
        try
        {
            List<Category> categories = _category.getAll();
            List<Category> all = new List<Category>();

            foreach (Category cat in categories)
            {
                all.Add(cat);
                cat.SubCategory = new List<SubCategory>();
                List<SubCategory> subs = _subCategory.getAll(string.Format("where ParentId = {0}", cat.Id));
                foreach (SubCategory sub in subs)
                {
                    cat.SubCategory.Add(sub);
                }
            }

            Dictionary<string, object> res = new Dictionary<string, object>();
            if (all != null)
            {
                res.Add("state", 1);
                res.Add("categories", all);
            }
            else
                res.Add("state", 0);
            return convertToJson(res);
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string getSubCategories(int categoryId)
    {
        try
        {
            List<Category> all = new List<Category>();
            List<SubCategory> subsTitle = _subCategory.getAllByTitle(string.Format("where ParentId = {0}", categoryId));
            foreach (SubCategory title in subsTitle)
            {
                all.Add((Category)title);
                title.SubCategory = new List<SubCategory>();
                List<SubCategory> subs = _subCategory.getAll(string.Format("where Title = '{0}'", title.Title));
                foreach (SubCategory sub in subs)
                {
                    title.SubCategory.Add(sub);
                }

            }

            Dictionary<string, object> res = new Dictionary<string, object>();
            if (all != null)
            {
                res.Add("state", 1);
                res.Add("subCategories", all);
            }
            else
                res.Add("state", 0);
            return convertToJson(res);
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string sendMail(string subject, string msg, string to)
    {
        return _emailer.sendEmail(to, subject, msg);
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string getRoute()
    {
        try
        {
            List<Route> allRoutes = _route.getAllRoutes();
            Dictionary<string, object> res = new Dictionary<string, object>();
            if (allRoutes != null)
            {
                res.Add("state", 1);
                res.Add("routes", allRoutes);
                System.IO.File.WriteAllText(HttpContext.Current.Server.MapPath("/") + "route.json", convertToJson(res));
            }
            else res.Add("state", 0);

            return convertToJson(res);
        }
        catch (Exception)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string getCategoryBySlug(string slug)
    {
        try
        {
            Category thisCategory = _category.getCategoryBySlug(slug);
            Dictionary<string, object> res = new Dictionary<string, object>();
            if (thisCategory != null)
            {
                res.Add("state", 1);
                res.Add("category", thisCategory);
            }
            else res.Add("state", 0);

            return convertToJson(res);
        }
        catch (Exception)
        {
            return null;
        }
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string addBusiness(string email, string password, int userType, string fullName, string mobileNumber,
        string homeNumber, string familyStatus, string gender, string address, string birthday, string image,
        string businessName, string sundayStart, string sundayEnd, string mondayStart, string mondayEnd, string tuesdayStart, string tuesdayEnd,
        string wednesdayStart, string wednesdayEnd, string thursdayStart, string thursdayEnd, string fridayStart, string fridayEnd,
        string saturdayStart, string saturdayEnd)
    {
        try
        {
            int num = _business.addBusiness(email, password, userType, fullName, mobileNumber,
                      homeNumber, char.Parse(familyStatus), char.Parse(gender), address, DateTime.Parse(birthday), image,
                      businessName, DateTime.Parse(sundayStart), DateTime.Parse(sundayEnd), DateTime.Parse(mondayStart),
                      DateTime.Parse(mondayEnd), DateTime.Parse(tuesdayStart), DateTime.Parse(tuesdayEnd),
                      DateTime.Parse(wednesdayStart), DateTime.Parse(wednesdayEnd), DateTime.Parse(thursdayStart),
                      DateTime.Parse(thursdayEnd), DateTime.Parse(fridayStart), DateTime.Parse(fridayEnd),
                      DateTime.Parse(saturdayStart), DateTime.Parse(saturdayEnd));

            Dictionary<string, object> res = new Dictionary<string, object>();
            res.Add("state", num);
            return convertToJson(res);
        }
        catch (Exception)
        {
            return null;
        }
    }

}
