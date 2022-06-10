export interface applicationInterface{
    id: string                      //the id of the app
    name: string                    //the name of the app
    icon?: string                   //the icon hash of the app
    description: string             //the description of the app
    rpc_orgins?: string[]           //an array of rpc origin urls, if rpc is enabled
    bot_public: boolean             //when false only app owner can join the app's bot to guilds
    bot_require_code_grant: boolean //when true the app's bot will only join upon completion of the full oauth2 code grant flow
    terms_of_service_url?: string   //the url of the app's terms of service
    privacy_policy_url?:  string    //the url of the app's privacy policy
    // owner                        //partial user object containing info on the owner of the application
    verify_key: string              //the hex encoded key for verification in interactions and the GameSDK's GetTicket
    // team                         //if the application belongs to a team, this will be a list of the members of that team
    guild_id?: string               //if this application is a game sold on Discord, this field will be the guild to which it has been linked
    primary_sku_id?: string         //if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
    slug?: string                   //if this application is a game sold on Discord, this field will be the URL slug that links to the store page
    cover_image?: string            //the application's default rich presence invite cover image hash
    flags?: number                  //the application's public flags
    tags?: string[]                 //up to 5 tags describing the content and functionality of the application
    // instal_params                //settings for the application's default in-app authorization link, if enabled
    custom_install_link?: string    //	the application's default custom authorization link, if enabled
}

export class Application implements applicationInterface{
    id: string
    name: string   
    icon?: string
    description: string             
    rpc_orgins?: string[]           
    bot_public: boolean             
    bot_require_code_grant: boolean 
    terms_of_service_url?: string   
    privacy_policy_url?:  string    
    // owner                        
    verify_key: string              
    // team                         
    guild_id?: string              
    primary_sku_id?: string        
    slug?: string                
    cover_image?: string            
    flags?: number                  
    tags?: string[]                 
    // instal_params                
    custom_install_link?: string
    
    constructor(id: string, 
        name: string, 
        description: string, 
        bot_public: boolean, 
        bot_require_code_grant: boolean, 
        verify_key: string, 
        icon?: string, 
        rpc_orgins?: string[], 
        terms_of_service_url?: string, 
        privacy_policy_url?: string,
        guild_id?: string, 
        primary_sku_id?: string, 
        slug?: string, 
        cover_image?: string, 
        flags?: number, 
        tags?: string[], 
        custom_install_link?: string)
        {
        this.id = id
        this.name = name
        this.description = description
        this.bot_public = bot_public
        this.bot_require_code_grant = bot_require_code_grant
        this.verify_key = verify_key
        this.icon = icon
        this.rpc_orgins = rpc_orgins
        this.terms_of_service_url = terms_of_service_url
        this.privacy_policy_url = privacy_policy_url
        this.guild_id = guild_id
        this.primary_sku_id = primary_sku_id
        this.slug = slug
        this.cover_image = cover_image
        this.flags = flags
        this.tags = tags
        this.custom_install_link = custom_install_link
    }
}