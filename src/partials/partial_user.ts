export interface partialUserInterface{
    id: string
    username: string
    discriminator: string
    avatar?: string
}
export class PartialUser implements partialUserInterface{
    id: string
    username: string
    discriminator: string
    avatar?: string

    constructor(id: string, username: string, discriminator: string, avatar?: string){
        this.id = id
        this.username = username
        this.discriminator = discriminator
        this.avatar = avatar
    }
}