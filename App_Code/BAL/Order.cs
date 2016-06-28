using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Order
/// </summary>
public class Order
{
    private readonly DB _db = new DB();

    #region Properties

    public string Address { get; private set; }
    public int BusinessId { get; private set; }
    public string BusinessName { get; private set; }
    public int CategoryId { get; private set; }
    public string CategoryName { get; private set; }
    public decimal CategoryPrice { get; private set; }
    public int ClientId { get; private set; }
    public string FullName { get; private set; }
    public DateTime OrderDate { get; private set; }
    public string OrderDateString { get; private set; }
    public DateTime OrderETA { get; private set; }
    public string OrderETAString { get; private set; }
    public int OrderId { get; private set; }
    public decimal OrderPrice { get; private set; }
    public string OrderType { get; private set; }
    public int PaymentId { get; private set; }
    public string PaymentName { get; private set; }

    #endregion

    public Order()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Order(int orderId, int clientId, string fullName, int businessId, string businessName, DateTime orderDate, string orderDateString,
        DateTime orderETA, string orderETAString, string orderType, int paymentId, string paymentName, decimal orderPrice,
        int categoryId, string categoryName, decimal categoryPrice, string address)
    {
        OrderId = orderId;
        ClientId = clientId;
        FullName = fullName;
        BusinessId = businessId;
        BusinessName = businessName;
        OrderDate = orderDate;
        OrderDateString = orderDateString;
        OrderETA = orderETA;
        OrderETAString = orderETAString;
        OrderType = orderType;
        PaymentId = paymentId;
        PaymentName = paymentName;
        OrderPrice = orderPrice;
        CategoryId = categoryId;
        CategoryName = categoryName;
        CategoryPrice = categoryPrice;
        Address = address;
    }

    //create a new order and get the information back
    internal Order createOrder(int userId, int businessId, DateTime orderDate, DateTime orderETA, string orderType, int orderPaymetType, double orderPrice, int categoryId, string address)
    {
        return _db.createOrder(userId, businessId, orderDate, orderETA, orderType, orderPaymetType, orderPrice, categoryId, address);
    }

    internal Order createOrder120(int userId, int businessId, DateTime orderDate, string orderType, int orderPaymetType, double orderPrice, int categoryId, string address)
    {
        return _db.createOrder(userId, businessId, orderDate, DateTime.Now, orderType, orderPaymetType, orderPrice, categoryId, address);
    }
}