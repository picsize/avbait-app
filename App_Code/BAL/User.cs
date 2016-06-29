using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for User
/// </summary>
public class User
{
    private readonly DB _db = new DB();

    #region Properties

    public string Address { get; private set; }
    public DateTime Birthday { get; private set; }
    public string Email { get; private set; }
    public char FamilyStatus { get; private set; }
    public string FullName { get; private set; }
    public char Gender { get; private set; }
    public string HomeNumber { get; private set; }
    public int Id { get; private set; }
    public string Img { get; private set; }
    public bool IsActive { get; private set; }
    public string MobileNumber { get; private set; }
    public string Password { get; private set; }
    public int UserType { get; private set; }
    public string GenderString { get; private set; }
    public string FamilyStatusString { get; private set; }

    #endregion

    public User()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public User(int id, string email, string password, bool isActive, int userType, string fullName, string mobileNumber, 
        string homeNumber, char familyStatus, char gender, string address, DateTime birthday, string image)
    {
        Id = id;
        Email = email;
        Password = password;
        IsActive = isActive;
        UserType = userType;
        FullName = fullName;
        MobileNumber = mobileNumber;
        HomeNumber = homeNumber;
        Gender = gender;
        Address = address;
        FamilyStatus = familyStatus;
        Birthday = birthday;
        Img = image;
    }

    public User(int id, string email, string password, bool isActive, int userType, string fullName, string mobileNumber,
        string homeNumber, string familyStatusString, string genderString, string address, string image)
    {
        Id = id;
        Email = email;
        Password = password;
        IsActive = isActive;
        UserType = userType;
        FullName = fullName;
        MobileNumber = mobileNumber;
        HomeNumber = homeNumber;
        GenderString = genderString;
        Address = address;
        FamilyStatusString = familyStatusString;
        Img = image;
    }

    //register user
    internal int register(string email, string password, int userType, string fullName, string mobileNumber, string homeNumber, char familyStatus, char gender, string address, DateTime birthday, string image)
    {
        return _db.registerUser(email, password, userType, fullName, mobileNumber, homeNumber, familyStatus, gender, address, birthday, image);
    }

    //login user
    internal User login(string email, string password)
    {
        return _db.login(email, password);
    }
}