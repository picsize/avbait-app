﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Configuration;

/// <summary>
/// Summary description for DB
/// </summary>
public class DB
{
    public DB()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    #region Helpers

    //create connetion to DB
    private SqlConnection Connect()
    {
        string cStr = WebConfigurationManager.ConnectionStrings["avBaitProd"].ConnectionString;
        SqlConnection con = new SqlConnection(cStr);
        con.Open();
        return con;
    }

    //create sql command
    private SqlCommand CreateCommand(string CommandSTR, SqlConnection con)
    {
        SqlCommand cmd = new SqlCommand(CommandSTR, con);
        cmd.CommandTimeout = 10;
        cmd.CommandType = System.Data.CommandType.Text;

        return cmd;

    }

    //exec sql command
    private void ExecuteAndClose(SqlCommand cmd)
    {
        try
        {
            cmd.ExecuteNonQuery();
        }
        catch (Exception ex)
        {
            throw (ex);
        }

        finally
        {
            cmd.Connection.Close();
        }
    }

    //get rows from DB
    private DataTable Select(SqlCommand cmd)
    {
        try
        {
            DataSet ds = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds, "Table");
            DataTable dt = ds.Tables["Table"];

            return dt;
        }
        catch (Exception ex)
        {
            throw (ex);
        }

        finally
        {
            cmd.Connection.Close();
        }

    }

    //convert dataTable to list
    private static List<T> ConvertDataTable<T>(DataTable dt)
    {
        List<T> data = new List<T>();
        foreach (DataRow row in dt.Rows)
        {
            T item = GetItem<T>(row);
            data.Add(item);
        }
        return data;
    }

    //get the row item according to the list type
    private static T GetItem<T>(DataRow dr)
    {
        Type temp = typeof(T);
        T obj = Activator.CreateInstance<T>();

        foreach (DataColumn column in dr.Table.Columns)
        {
            foreach (PropertyInfo pro in temp.GetProperties())
            {
                if (pro.Name == column.ColumnName)
                {
                    pro.SetValue(obj, dr[column.ColumnName], null);
                }

                else
                    continue;
            }
        }
        return obj;
    }

    #endregion

    //register user to DB
    internal int registerUser(string email, string password, int userType, string fullName, string mobileNumber, string homeNumber,
        char familyStatus, char gender, string address, DateTime birthday, string image)
    {
        try
        {
            SqlConnection con = Connect();
            string commandText = string.Format("exec register N'{0}', N'{1}', {2}, N'{3}', N'{4}', N'{5}', N'{6}', N'{7}', N'{8}', N'{9}', N'{10}'", email, password, userType, fullName, mobileNumber, homeNumber, familyStatus, gender, address, birthday.ToString("yyyy-MM-dd"), image);
            SqlCommand cmd = CreateCommand(commandText, con);
            ExecuteAndClose(cmd);

            return 1;
        }
        catch (Exception ex)
        {
            return 0;
        }

    }

    //login to App
    internal User login(string email, string password)
    {
        SqlConnection con = Connect();
        string commandText = string.Format("select * from dbo.userLogin(N'{0}',N'{1}')", email, password);
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<User> thisUser = ConvertDataTable<User>(dt);

        return thisUser[0];
    }

    internal Order createOrder(int userId, int businessId, DateTime orderDate, DateTime? orderETA, string orderType, int orderPaymetType, double orderPrice, int categoryId, string address)
    {
        SqlConnection con = Connect();
        string commandText;
        if (orderType == "120")
        {
            commandText = string.Format("exec newOrder {0}, {1}, '{2}', '', N'{3}', {4}, {5}, {6}, N'{7}'",
                userId, businessId, orderDate.ToString("yyyy-MM-dd HH:mm:ss"), orderType, orderPaymetType, orderPrice, categoryId, address);
        }
        else
        {
            DateTime eta = (DateTime)orderETA;
            commandText = string.Format("exec newOrder {0}, {1}, '{2}', '{3}', N'{4}', {5}, {6}, {7}, N'{8}'",
                 userId, businessId, orderDate.ToString("yyyy-MM-dd HH:mm:ss"), eta.ToString("yyyy-MM-dd HH:mm:ss"), orderType, orderPaymetType, orderPrice, categoryId, address);
        }

        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<Order> thisOrder = ConvertDataTable<Order>(dt);

        return thisOrder[0];
    }

    internal List<Category> getAllCategories()
    {
        SqlConnection con = Connect();
        string commandText = "select * from dbo.category";
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<Category> categories = ConvertDataTable<Category>(dt);

        return categories;
    }


    internal List<SubCategory> getAllSubCategories(string where)
    {
        SqlConnection con = Connect();
        string commandText = string.Format("select * from dbo.subCategory {0} order by Title", where);
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<SubCategory> subCategories = ConvertDataTable<SubCategory>(dt);

        return subCategories;
    }

    internal List<SubCategory> getAllSubCategoriesByTitle(string where)
    {
        SqlConnection con = Connect();
        string commandText = string.Format("select distinct Title from dbo.subCategory {0} order by Title", where);
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<SubCategory> subCategories = ConvertDataTable<SubCategory>(dt);

        return subCategories;
    }

    internal List<Route> getAllRoutes()
    {
        SqlConnection con = Connect();
        string commandText = "select * from slugView";
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<Route> routes = ConvertDataTable<Route>(dt);

        return routes;
    }

    internal Category getCategoryBySlug(string slug)
    {
        SqlConnection con = Connect();
        string commandText = string.Format("select * from category where Slug = N'{0}'", slug);
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<Category> categories = ConvertDataTable<Category>(dt);

        return categories[0];
    }

    internal int addBusiness(string email, string password, int userType, string fullName, string mobileNumber, string homeNumber,
        char familyStatus, char gender, string address, DateTime birthday, string image, string businessName, DateTime sundayStart,
        DateTime sundayEnd, DateTime mondayStart, DateTime mondayEnd, DateTime tuesdayStart, DateTime tuesdayEnd, DateTime wednesdayStart,
        DateTime wednesdayEnd, DateTime thursdayStart, DateTime thursdayEnd, DateTime fridayStart, DateTime fridayEnd, DateTime saturdayStart,
        DateTime saturdayEnd)
    {
        try
        {
            SqlConnection con = Connect();
            string commandText = string.Format(@"exec addBusiness
                N'{0}', N'{1}', {2}, N'{3}', N'{4}', N'{5}', N'{6}', N'{7}', N'{8}', N'{9}', N'{10}', 
                N'{11}', N'{12}', N'{13}', N'{14}', N'{15}', N'{16}', N'{17}', N'{18}', N'{19}', N'{20}',
                N'{21}', N'{22}', N'{23}', N'{24}', N'{25}'",
                email, password, userType, fullName, mobileNumber, homeNumber, familyStatus, gender, address, birthday.ToString("yyyy-MM-dd"), image,
                businessName, sundayStart.ToString("HH:mm:ss"), sundayEnd.ToString("HH:mm:ss"), mondayStart.ToString("HH:mm:ss"), mondayEnd.ToString("HH:mm:ss"),
                tuesdayStart.ToString("HH:mm:ss"), tuesdayEnd.ToString("HH:mm:ss"), wednesdayStart.ToString("HH:mm:ss"),
                wednesdayEnd.ToString("HH:mm:ss"), thursdayStart.ToString("HH:mm:ss"), thursdayEnd.ToString("HH:mm:ss"), fridayStart.ToString("HH:mm:ss"),
                fridayEnd.ToString("HH:mm:ss"), saturdayStart.ToString("HH:mm:ss"), saturdayEnd.ToString("HH:mm:ss")
                );

            SqlCommand cmd = CreateCommand(commandText, con);
            ExecuteAndClose(cmd);

            return 1;
        }
        catch (Exception ex)
        {
            return 0;
        }
    }

    internal Page getPageBySlug(string slug)
    {
        SqlConnection con = Connect();
        string commandText = string.Format("select * from page where Slug = N'{0}'", slug);
        SqlCommand cmd = CreateCommand(commandText, con);
        DataTable dt = Select(cmd);
        List<Page> pages = ConvertDataTable<Page>(dt);

        return pages[0];
    }

}