using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Business
/// </summary>
public class Business : User
{
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
}