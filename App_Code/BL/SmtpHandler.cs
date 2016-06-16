using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

/// <summary>
/// Summary description for SmtpHandler
/// </summary>
public class SmtpHandler
{
    private MailMessage mail = new MailMessage();
    private SmtpClient SmtpServer = new SmtpClient("mail.picsize.co.il");

    public SmtpHandler()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    private void InitializeComponent()
    {
        mail.From = new MailAddress("info@picsize.co.il");
        mail.IsBodyHtml = true;
        SmtpServer.Host = "mail.picsize.co.il";
        SmtpServer.Port = 25;
        SmtpServer.UseDefaultCredentials = false;
        SmtpServer.Credentials = new NetworkCredential("info@picsize.co.il", "picsize8914!");
        SmtpServer.EnableSsl = false;
    }

    internal string sendEmail(string to, string subject, string msg)
    {
        try
        {
            InitializeComponent();
            List<string> emailAddresses = to.Split(',').ToList();
            foreach (var address in emailAddresses)
            {
                mail.To.Add(address);
            }

            mail.Subject = subject;
            mail.Body = msg;

            SmtpServer.Send(mail);

            return "success";
        }
        catch (Exception e)
        {
            return "error:\n" + e.Message;
        }
    }

}