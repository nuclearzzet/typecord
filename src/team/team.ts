export interface teamInterface{
    id: string
    members: string
    name: string
    owner_user_id: string
    avatar?: string
}

export class Team implements teamInterface{
    id: string
    members: string
    name: string
    owner_user_id: string
    avatar?: string

    constructor(id: string, members: string, name: string, owner_user_id: string, avatar?: string){
        this.id = id
        this.members = members
        this.name = name
        this.owner_user_id = owner_user_id
        this.avatar = avatar
    }
}