public class ReactApp_Controller_Login_LCC {

    @AuraEnabled
    public static String UserLogin(String username, String password) {
        try{
            ApexPages.PageReference lgn = Site.login(username, password, null);
            aura.redirect(lgn);
            return null;
        }
        catch (Exception ex) {
            return ex.getMessage();            
        }
    }
    
}