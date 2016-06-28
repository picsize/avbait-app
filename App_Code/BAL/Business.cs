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

    public Business()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Business(int id, string email, string password, bool isActive, int userType, string fullName, string mobileNumber,
        string homeNumber, string familyStatusString, string genderString, string address, string birthdayString, string image)
        : base(id, email, password, isActive, userType, fullName, mobileNumber,
         homeNumber, familyStatusString, genderString, address, birthdayString, image)
    {

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
}