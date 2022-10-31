export interface IInput{
    cities: ICities[]
}

export interface ICities{
    id: number
    name: string
    coord: ICoord
    main: IMain
    dt: number
    wind: IWind
    clouds: IClouds
    weather: IWeather[]
}

interface ICoord{
    lon: number
    lat: number
}

interface IMain{
    temp: number, 
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number
}

interface IWind{
    spped: number
    deg: number
}

interface IClouds{
    all: number
}

interface IWeather{
    id: number
    main: string
    description: string
    icon: string
}

export interface IOutput{
    wather: IWeather
    cities: ICities[]
}