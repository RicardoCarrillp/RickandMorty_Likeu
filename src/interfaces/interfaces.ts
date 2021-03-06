export interface Character{
    id: number;
    name?:string;
    image?:string;
    status?:string;
    species?:string;
    gender?:string;
    created?:string;
    location?:Location;
    episode:string[] ;
}

export type RequestInfo={
    next:string
}

export interface Location {
    name:string;
}

export interface Episode {
    id: number;
    name?:string;
    air_date?:string;
    episode?:string;

    
}

