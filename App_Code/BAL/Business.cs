using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Business
/// </summary>
public class Business : User
{
    private readonly DB _db = new DB();

    #region Properties

    public string BusinessName { get; private set; }
    public DateTime FridayEnd { get; private set; }
    public DateTime FridayStart { get; private set; }
    public DateTime MondayEnd { get; private set; }
    public DateTime MondayStart { get; private set; }
    public DateTime SaturdayEnd { get; private set; }
    public DateTime SaturdayStart { get; private set; }
    public DateTime SundayEnd { get; private set; }
    public DateTime SundayStart { get; private set; }
    public DateTime ThursdayEnd { get; private set; }
    public DateTime ThursdayStart { get; private set; }
    public DateTime TuesdayEnd { get; private set; }
    public DateTime TuesdayStart { get; private set; }
    public DateTime WednesdayEnd { get; private set; }
    public DateTime WednesdayStart { get; private set; }
    public string Slug { get; private set; }
    public int BusinessId { get; private set; }
    public decimal Rating { get; private set; }
    public bool IsAvaliable { get; private set; }
    public new string MobileNumber { get; private set; }
    public new string Address { get; private set; }
    public new string Image { get; private set; }
    public decimal Price { get; private set; }


    #endregion

    public Business()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Business(int id, string email, string password, bool isActive, int userType, string fullName, string mobileNumber,
        string homeNumber, string familyStatusString, string genderString, string address, string birthdayString, string image)
        : base(id, email, password, isActive, userType, fullName, mobileNumber,
         homeNumber, familyStatusString, genderString, address, image)
    {

    }

    public Business(string email, string password, int userType, string fullName, string mobileNumber,
        string homeNumber, char familyStatus, char gender, string address, DateTime birthday, string image,
        string businessName, DateTime sundayStart, DateTime sundayEnd, DateTime mondayStart, DateTime mondayEnd, DateTime tuesdayStart, DateTime tuesdayEnd,
        DateTime wednesdayStart, DateTime wednesdayEnd, DateTime thursdayStart, DateTime thursdayEnd, DateTime fridayStart, DateTime fridayEnd,
        DateTime saturdayStart, DateTime saturdayEnd) : base(email, password, userType, fullName, mobileNumber,
         homeNumber, familyStatus, gender, address, birthday, image)
    {
        BusinessName = businessName;
        SundayStart = sundayStart;
        SundayEnd = sundayEnd;
        MondayStart = mondayStart;
        MondayEnd = mondayEnd;
        TuesdayStart = tuesdayStart;
        TuesdayEnd = tuesdayEnd;
        WednesdayStart = wednesdayStart;
        WednesdayEnd = wednesdayEnd;
        ThursdayStart = thursdayStart;
        ThursdayEnd = thursdayEnd;
        FridayStart = fridayStart;
        FridayEnd = fridayEnd;
        SaturdayStart = saturdayStart;
        SaturdayEnd = saturdayEnd;

    }

    internal int addBusiness(string email, string password, int userType, string fullName, string mobileNumber,
        string homeNumber, char familyStatus, char gender, string address, DateTime birthday, string image,
        string businessName, DateTime sundayStart, DateTime sundayEnd, DateTime mondayStart, DateTime mondayEnd, DateTime tuesdayStart, DateTime tuesdayEnd,
        DateTime wednesdayStart, DateTime wednesdayEnd, DateTime thursdayStart, DateTime thursdayEnd, DateTime fridayStart, DateTime fridayEnd,
        DateTime saturdayStart, DateTime saturdayEnd)
    {
        return _db.addBusiness(email, password, userType, fullName, mobileNumber,
         homeNumber, familyStatus, gender, address, birthday, image,
         businessName, sundayStart, sundayEnd, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd,
         wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd,
         saturdayStart, saturdayEnd);
    }

    internal List<Business> getBusinessForCategory(string slug)
    {
        return _db.getBusinessForCategory(slug);
    }
}